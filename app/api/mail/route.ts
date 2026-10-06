import nodemailer from "nodemailer";
import { getJob } from "@/data/jobs";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 6 * 1024 * 1024;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resumeMimeTypes: Record<string, string> = {
  ".pdf": "application/pdf",
  ".doc": "application/msword",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function getText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function badRequest(message: string) {
  return Response.json({ message }, { status: 400 });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return Response.json(
      { message: "The submitted files exceed the 6 MB request limit." },
      { status: 413 },
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return badRequest("The submitted form could not be read.");
  }

  const kind = getText(formData, "kind");
  const name = getText(formData, kind === "contact" ? "fullName" : "name");
  const email = getText(formData, "email");

  if (!name || name.length > 120 || !email || email.length > 254 || !emailPattern.test(email)) {
    return badRequest("Enter a valid name and email address.");
  }

  let subject: string;
  let text: string;
  const attachments: {
    filename: string;
    content: Buffer;
    contentType: string;
  }[] = [];

  if (kind === "contact") {
    const company = getText(formData, "company");
    const website = getText(formData, "website");
    const service = getText(formData, "service");
    const projectDetails = getText(formData, "projectDetails");

    if (
      company.length > 200 ||
      website.length > 2048 ||
      service.length > 120 ||
      !projectDetails ||
      projectDetails.length > 5000
    ) {
      return badRequest("Add project details and keep each field within its length limit.");
    }
    if (website) {
      try {
        const url = new URL(website);
        if (url.protocol !== "http:" && url.protocol !== "https:") {
          return badRequest("Enter a valid website URL.");
        }
      } catch {
        return badRequest("Enter a valid website URL.");
      }
    }

    subject = service ? `Quote request: ${service}` : "New website contact request";
    text = [
      "Website contact request",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Website: ${website || "Not provided"}`,
      `Service: ${service || "Not provided"}`,
      "",
      "Project details:",
      projectDetails,
    ].join("\n");
  } else if (kind === "application") {
    const roleSlug = getText(formData, "role");
    const job = getJob(roleSlug);
    const phone = getText(formData, "phone");
    const portfolio = getText(formData, "portfolio");
    const message = getText(formData, "message");
    const resume = formData.get("resume");

    if (!job) {
      return badRequest("Select a valid position.");
    }
    if (phone.length > 50 || portfolio.length > 2048 || message.length > 5000) {
      return badRequest("One or more application fields exceed the allowed length.");
    }
    if (!(resume instanceof File) || resume.size === 0) {
      return badRequest("Attach your resume to continue.");
    }
    if (resume.size > MAX_RESUME_BYTES) {
      return Response.json(
        { message: "The resume must be 5 MB or smaller." },
        { status: 413 },
      );
    }

    const extension = resume.name.slice(resume.name.lastIndexOf(".")).toLowerCase();
    const contentType = resumeMimeTypes[extension];
    if (!contentType || (resume.type && resume.type !== contentType && resume.type !== "application/octet-stream")) {
      return badRequest("Resume must be a PDF, DOC, or DOCX file.");
    }

    const filename = resume.name
      .split(/[\\/]/)
      .pop()
      ?.replace(/[^\w.() -]/g, "_")
      .slice(0, 120);

    attachments.push({
      filename: filename || `resume${extension}`,
      content: Buffer.from(await resume.arrayBuffer()),
      contentType,
    });

    subject = `Job application: ${job.title}`;
    text = [
      `Role: ${job.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Portfolio or LinkedIn: ${portfolio || "Not provided"}`,
      `Resume: ${filename || "resume"}`,
      "",
      "Why I am interested:",
      message || "Not provided",
    ].join("\n");
  } else {
    return badRequest("Unknown form type.");
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !Number.isInteger(port) || port <= 0 || !user || !pass) {
    return Response.json(
      { message: "Email delivery is not configured. Please try again later." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || user,
      to: process.env.CONTACT_EMAIL || "hello@zevinsoft.com",
      replyTo: email,
      subject,
      text,
      ...(kind === "application" ? { attachments } : {}),
    });
  } catch (error) {
    console.error("Could not send website form email:", error);
    return Response.json(
      { message: "We could not send your message right now. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Your submission was sent successfully." });
}
