import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const N8N_WEBHOOK_URL =
  process.env.N8N_ZEVIN_WEBHOOK_URL;

export async function POST(request: NextRequest) {
  try {
    console.log("=================================");
    console.log("ZEVIN AI BUSINESS BUILDER");
    console.log("=================================");

    console.log(
      "N8N URL:",
      N8N_WEBHOOK_URL
        ? "CONFIGURED"
        : "MISSING"
    );

    if (!N8N_WEBHOOK_URL) {
      return NextResponse.json(
        {
          success: false,
          message:
            "N8N_ZEVIN_WEBHOOK_URL is missing.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    console.log("Incoming request:", {
      session_id: body.session_id,
      messageLength:
        body.message?.length || 0,
    });

    const {
      session_id,
      message,
      history = [],
      contact = {},
    } = body;

    if (
      !session_id ||
      typeof session_id !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid session ID.",
        },
        { status: 400 }
      );
    }

    if (
      !message ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message must be under 2,000 characters.",
        },
        { status: 400 }
      );
    }

    console.log("Calling n8n...");

    const n8nResponse = await fetch(
      N8N_WEBHOOK_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          session_id,
          message,
          history,
          contact,
        }),
        cache: "no-store",
      }
    );

    const responseText =
      await n8nResponse.text();

    console.log(
      "n8n HTTP status:",
      n8nResponse.status
    );

    console.log(
      "n8n response:",
      responseText
    );

    console.log(
      "n8n content type:",
      n8nResponse.headers.get(
        "content-type"
      )
    );

    if (!n8nResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            "n8n rejected the request.",
          n8n_status:
            n8nResponse.status,
          n8n_response:
            responseText,
        },
        { status: 502 }
      );
    }

    let data;

    try {
      data = JSON.parse(responseText);
    } catch (error) {
      console.error(
        "Invalid JSON from n8n:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "n8n returned an invalid response.",
          raw_response:
            responseText,
        },
        { status: 502 }
      );
    }

    console.log(
      "Parsed n8n data:",
      data
    );

    return NextResponse.json(data);

  } catch (error) {
    console.error(
      "================================="
    );

    console.error(
      "AI BUSINESS BUILDER ERROR"
    );

    console.error(error);

    console.error(
      "================================="
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to connect to the AI Business Developer.",
        error:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}