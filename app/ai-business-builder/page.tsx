"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Loader2,
  MessageCircle,
  RotateCcw,
  Sparkles,
  User,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   TYPES
========================================================= */

type Message = {
  role: "user" | "assistant";
  content: string;
};

type Recommendation = {
  service?: string;
  reason?: string;
};

type RoadmapItem = {
  phase?: string;
  description?: string;
};

type QuickReply = {
  label: string;
  value: string;
  description?: string;
  icon?: string;
};

type Action = {
  label: string;
  type: "link" | "message";
  style?: "primary" | "whatsapp" | "secondary";
  url?: string;
  value?: string;
};

type ProgressData = {
  step?: number;
  total?: number;
  percent?: number;
  label?: string;
};

type AnalysisCardData = {
  title?: string;
  business_summary?: string;
  summary?: string;
  pain_points?: string[];
  opportunities?: string[];
};

type CaseStudyData = {
  title?: string;
  result?: string;
  testimonial?: string;
  logo?: string;
};

type TrustData = {
  ai_disclosure?: string;
  privacy_note?: string;
  response_promise?: string;
  what_happens_next?: string[];
  show_consent?: boolean;
  consent_text?: string;
};

type HandoffData = {
  show?: boolean;
  title?: string;
  message?: string;
  response_promise?: string;
  report_note?: string;
  actions?: Action[];
};

type BuilderResponse = {
  success?: boolean;
  session_id?: string;
  message?: string;

  recommendations?: Recommendation[];
  roadmap?: RoadmapItem[];
  next_step?: string;
  lead_captured?: boolean;

  progress?: ProgressData;

  ui?: {
    quick_replies?: QuickReply[];
    selection_mode?: "single" | "multi" | "none";
    options_title?: string;
  };

  analysis_card?: AnalysisCardData | null;

  case_study?: CaseStudyData | null;

  trust?: TrustData;

  handoff?: HandoffData;
};

/* =========================================================
   STARTER OPTIONS
========================================================= */

const starterOptions: QuickReply[] = [
  {
    label: "Website",
    value: "I need a website",
    icon: "website",
    description: "Business or service website",
  },
  {
    label: "E-Commerce",
    value: "I need an e-commerce solution",
    icon: "ecommerce",
    description: "Online store and digital sales",
  },
  {
    label: "Mobile App",
    value: "I need a mobile application",
    icon: "mobile",
    description: "iOS or Android application",
  },
  {
    label: "AI & Automation",
    value: "I need AI and automation",
    icon: "ai",
    description: "Automate business processes",
  },
  {
    label: "CRM",
    value: "I need a CRM solution",
    icon: "crm",
    description: "Customers, leads and operations",
  },
  {
    label: "Custom Software",
    value: "I need custom software",
    icon: "software",
    description: "A solution built around my business",
  },
];

/* =========================================================
   SESSION
========================================================= */

function createSessionId() {
  return `sess_${Math.random()
    .toString(36)
    .substring(2, 12)}_${Date.now().toString(36)}`;
}

/* =========================================================
   ICON HELPER
========================================================= */

function getOptionIcon(icon?: string) {
  if (!icon) {
    return "→";
  }

  const iconMap: Record<string, string> = {
    website: "🌐",
    ecommerce: "🛒",
    shop: "🛒",
    healthcare: "🏥",
    dental: "🦷",
    restaurant: "🍽️",
    education: "🎓",
    finance: "💳",
    realestate: "🏢",
    automation: "⚙️",
    ai: "✦",
    crm: "👥",
    mobile: "📱",
    software: "💻",
    cloud: "☁️",
    marketing: "📣",
    phone: "☎️",
    whatsapp: "💬",
    calendar: "📅",
    patient: "🩺",
    other: "✦",
  };

  return iconMap[icon.toLowerCase()] || icon;
}

/* =========================================================
   MESSAGE FORMATTER
========================================================= */

function renderMessageContent(content: string) {
  if (!content) {
    return null;
  }

  const normalized = content
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();

  /*
   * Converts:
   *
   * "Please tell me: 1. Question one? 2. Question two?"
   *
   * into:
   *
   * Please tell me:
   *
   * 1. Question one?
   *
   * 2. Question two?
   */

  const formatted = normalized.replace(
    /\s+(?=\d+\.\s+)/g,
    "\n"
  );

  const lines = formatted
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="space-y-3">
      {lines.map((line, index) => {
        /* ---------------------------------------------
           NUMBERED ITEM
        --------------------------------------------- */

        const numberedMatch = line.match(
          /^(\d+)\.\s+(.*)$/
        );

        if (numberedMatch) {
          const number = numberedMatch[1];
          const text = numberedMatch[2];

          return (
            <div
              key={`number-${index}`}
              className="flex items-start gap-3"
            >
              <span
                className="
                  flex h-6 w-6 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#E7F0FC]
                  text-[11px]
                  font-bold
                  text-[#2463D4]
                "
              >
                {number}
              </span>

              <p className="pt-0.5 text-sm leading-6 text-[#425166]">
                {text}
              </p>
            </div>
          );
        }

        /* ---------------------------------------------
           BULLET ITEM
        --------------------------------------------- */

        const bulletMatch = line.match(
          /^[-*•]\s+(.*)$/
        );

        if (bulletMatch) {
          return (
            <div
              key={`bullet-${index}`}
              className="flex items-start gap-3"
            >
              <span
                className="
                  mt-[9px]
                  h-1.5 w-1.5
                  shrink-0
                  rounded-full
                  bg-[#2463D4]
                "
              />

              <p className="text-sm leading-6 text-[#425166]">
                {bulletMatch[1]}
              </p>
            </div>
          );
        }

        /* ---------------------------------------------
           NORMAL TEXT
        --------------------------------------------- */

        return (
          <p
            key={`text-${index}`}
            className="text-sm leading-6 text-[#425166]"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function AIBusinessBuilderPage() {
  const [sessionId, setSessionId] = useState("");

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "What type of solution are you looking for?",
    },
  ]);

  const [recommendations, setRecommendations] =
    useState<Recommendation[]>([]);

  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);

  const [nextStep, setNextStep] = useState("");

  const [latestResponse, setLatestResponse] =
    useState<BuilderResponse | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [consentGiven, setConsentGiven] = useState(false);

  const [selectedOptions, setSelectedOptions] =
    useState<string[]>([]);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  /* =======================================================
     SESSION INITIALIZATION
  ======================================================= */

  useEffect(() => {
    const storedSession =
      window.localStorage.getItem(
        "zevin_ai_session"
      );

    if (storedSession) {
      setSessionId(storedSession);
    } else {
      const newSession = createSessionId();

      window.localStorage.setItem(
        "zevin_ai_session",
        newSession
      );

      setSessionId(newSession);
    }
  }, []);

  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, latestResponse]);

  /* =======================================================
     SEND MESSAGE
  ======================================================= */

  async function sendMessage(message: string) {
    const cleanInput = message.trim();

    if (!cleanInput || isLoading) {
      return;
    }

    if (!sessionId) {
      return;
    }

    const userMessage: Message = {
      role: "user",
      content: cleanInput,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setSelectedOptions([]);
    setIsLoading(true);

    try {
      const response = await fetch(
        "/api/ai-business-builder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            session_id: sessionId,
            message: cleanInput,
            history: updatedMessages.map(
              (message) => ({
                role: message.role,
                content: message.content,
              })
            ),
            contact: {
              name: "",
              email: "",
              company: "",
              phone: "",
              country: "",
            },
          }),
        }
      );

      const data: BuilderResponse =
        await response.json();

      /*
       * IMPORTANT:
       * n8n can return HTTP 200 with success:false.
       */

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to contact AI Business Developer."
        );
      }

      /* -----------------------------------------------
         STORE COMPLETE RESPONSE
      ------------------------------------------------ */

      setLatestResponse(data);

      /* -----------------------------------------------
         AI MESSAGE
      ------------------------------------------------ */

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.message ||
            "Let's continue with the next step.",
        },
      ]);

      /* -----------------------------------------------
         RECOMMENDATIONS
      ------------------------------------------------ */

      if (data.recommendations) {
        setRecommendations(
          data.recommendations
        );
      }

      /* -----------------------------------------------
         ROADMAP
      ------------------------------------------------ */

      if (data.roadmap) {
        setRoadmap(data.roadmap);
      }

      /* -----------------------------------------------
         NEXT STEP
      ------------------------------------------------ */

      if (data.next_step) {
        setNextStep(data.next_step);
      }

      /* -----------------------------------------------
         CONSENT
      ------------------------------------------------ */

      if (!data.trust?.show_consent) {
        setConsentGiven(false);
      }
    } catch (error) {
      console.error(
        "AI Business Builder error:",
        error
      );

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I'm sorry, I couldn't connect to the AI Business Developer right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  /* =======================================================
     QUICK REPLY
  ======================================================= */

  function handleQuickReply(option: QuickReply) {
    const selectionMode =
      latestResponse?.ui?.selection_mode ||
      "single";

    /*
     * SINGLE SELECTION
     */

    if (selectionMode === "single") {
      sendMessage(option.value);
      return;
    }

    /*
     * MULTI SELECTION
     */

    if (selectionMode === "multi") {
      setSelectedOptions((current) => {
        if (current.includes(option.value)) {
          return current.filter(
            (value) => value !== option.value
          );
        }

        return [
          ...current,
          option.value,
        ];
      });
    }
  }

  /* =======================================================
     CONTINUE MULTI SELECTION
  ======================================================= */

  function continueMultiSelection() {
    if (
      selectedOptions.length === 0 ||
      isLoading
    ) {
      return;
    }

    sendMessage(
      selectedOptions.join(", ")
    );
  }

  /* =======================================================
     FORM SUBMIT
  ======================================================= */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    await sendMessage(input);
  }

  /* =======================================================
     NEW CONVERSATION
  ======================================================= */

  function startNewConversation() {
    const newSession =
      createSessionId();

    window.localStorage.setItem(
      "zevin_ai_session",
      newSession
    );

    setSessionId(newSession);

    setMessages([
      {
        role: "assistant",
        content:
          "What type of solution are you looking for?",
      },
    ]);

    setRecommendations([]);
    setRoadmap([]);
    setNextStep("");
    setLatestResponse(null);
    setInput("");
    setConsentGiven(false);
    setSelectedOptions([]);
  }

  /* =======================================================
     QUICK REPLIES
  ======================================================= */

  const quickReplies =
    latestResponse?.ui?.quick_replies ||
    (!latestResponse
      ? starterOptions
      : []);

  const selectionMode =
    latestResponse?.ui?.selection_mode ||
    "single";

  /* =======================================================
     RESULTS CHECK
  ======================================================= */

  const hasResults =
    recommendations.length > 0 ||
    roadmap.length > 0 ||
    Boolean(nextStep) ||
    Boolean(
      latestResponse?.analysis_card
    ) ||
    Boolean(
      latestResponse?.case_study
    ) ||
    Boolean(
      latestResponse?.handoff?.show
    );

  /* =======================================================
     MAIN UI
  ======================================================= */

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F7F9FD] pt-[80px]">
        <section className="relative overflow-hidden">
          {/* BACKGROUND */}

          <div className="pointer-events-none absolute left-[-250px] top-[80px] h-[600px] w-[600px] rounded-full bg-[#EFEAFD] opacity-50" />

          <div className="pointer-events-none absolute right-[-300px] top-[100px] h-[700px] w-[700px] rounded-full bg-[#E7F0FC] opacity-70" />

          <div className="relative z-10 mx-auto max-w-[1240px] px-5 pb-20 pt-16 sm:px-6 lg:pb-28 lg:pt-20">

            {/* =================================================
                PAGE HEADING
            ================================================= */}

            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#DCE3EC] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7048C8] shadow-sm">
                <Sparkles className="h-4 w-4" />
                AI Business Developer
              </div>

              <h1 className="mx-auto mt-6 max-w-[850px] text-[40px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0F1B2D] sm:text-[52px] lg:text-[60px]">
                Turn Your Business Idea Into a{" "}
                <span className="text-[#2463D4]">
                  Digital Roadmap.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[720px] text-[16px] leading-[1.7] text-[#66758A] sm:text-[18px]">
                Answer a few simple questions and
                Zevin AI will identify the right
                digital solutions for your business.
              </p>
            </div>

            {/* =================================================
                BUILDER
            ================================================= */}

            <div className="mx-auto mt-12 max-w-[1000px]">
              <div className="overflow-hidden rounded-[20px] border border-[#DCE3EC] bg-white shadow-[0_25px_70px_rgba(15,27,45,0.08)]">

                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="flex items-center justify-between border-b border-[#DCE3EC] bg-white px-5 py-4 sm:px-7">

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1ECFA] text-[#7048C8]">
                      <Bot className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#0F1B2D]">
                        Zevin AI Business Developer
                      </p>

                      <p className="text-xs text-[#66758A]">
                        Digital strategy assistant
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={
                      startNewConversation
                    }
                    className="
                      flex items-center gap-2
                      rounded-lg
                      border border-[#DCE3EC]
                      bg-white
                      px-3 py-2
                      text-xs font-semibold
                      text-[#425166]
                      transition
                      hover:border-[#2463D4]
                      hover:bg-[#F7FAFF]
                      hover:text-[#2463D4]
                    "
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    New
                  </button>
                </div>

                {/* =================================================
                    PROGRESS
                ================================================= */}

                {latestResponse?.progress && (
                  <div className="border-b border-[#DCE3EC] bg-white px-5 py-3 sm:px-7">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#425166]">
                        {latestResponse.progress
                          .label ||
                          "Understanding your business"}
                      </span>

                      <span className="text-xs font-bold text-[#2463D4]">
                        Step{" "}
                        {latestResponse.progress
                          .step || 1}{" "}
                        /{" "}
                        {latestResponse.progress
                          .total || 1}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-[#E7F0FC]">
                      <div
                        className="h-full rounded-full bg-[#2463D4] transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            100,
                            Math.max(
                              0,
                              latestResponse
                                .progress
                                .percent || 0
                            )
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* =================================================
                    CHAT
                ================================================= */}

                <div className="max-h-[600px] min-h-[430px] overflow-y-auto bg-[#FBFCFE] px-5 py-7 sm:px-7">

                  <div className="space-y-6">

                    {/* MESSAGES */}

                    {messages.map(
                      (message, index) => (
                        <div
                          key={`${message.role}-${index}`}
                          className={`flex gap-3 ${
                            message.role ===
                            "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >

                          {/* ASSISTANT ICON */}

                          {message.role ===
                            "assistant" && (
                            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F1ECFA] text-[#7048C8]">
                              <Bot className="h-4 w-4" />
                            </div>
                          )}

                          {/* MESSAGE */}

                          <div
                            className={`
                              max-w-[78%]
                              rounded-2xl
                              px-4 py-3.5
                              ${
                                message.role ===
                                "user"
                                  ? "rounded-br-md bg-[#2463D4] text-white shadow-sm"
                                  : "rounded-bl-md border border-[#E4EAF1] bg-white shadow-sm"
                              }
                            `}
                          >
                            {message.role ===
                            "assistant" ? (
                              renderMessageContent(
                                message.content
                              )
                            ) : (
                              <p className="text-sm leading-6 text-white">
                                {
                                  message.content
                                }
                              </p>
                            )}
                          </div>

                          {/* USER ICON */}

                          {message.role ===
                            "user" && (
                            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E7F0FC] text-[#2463D4]">
                              <User className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      )
                    )}

                    {/* =================================================
                        QUICK REPLIES
                    ================================================= */}

                    {quickReplies.length >
                      0 &&
                      !isLoading && (
                        <div className="ml-[48px] max-w-[760px]">

                          {/* TITLE */}

                          {latestResponse?.ui
                            ?.options_title && (
                            <div className="mb-3 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#2463D4]" />

                              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#66758A]">
                                {
                                  latestResponse
                                    .ui
                                    .options_title
                                }
                              </p>
                            </div>
                          )}

                          {/* STARTER TITLE */}

                          {!latestResponse && (
                            <p className="mb-3 text-xs font-semibold text-[#66758A]">
                              Choose an option to get
                              started
                            </p>
                          )}

                          {/* OPTIONS */}

                          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                            {quickReplies.map(
                              (option) => {
                                const isSelected =
                                  selectedOptions.includes(
                                    option.value
                                  );

                                return (
                                  <button
                                    key={
                                      option.value
                                    }
                                    type="button"
                                    disabled={
                                      isLoading
                                    }
                                    onClick={() =>
                                      handleQuickReply(
                                        option
                                      )
                                    }
                                    className={`
                                      group
                                      flex
                                      w-full
                                      items-center
                                      gap-3
                                      rounded-xl
                                      border
                                      px-4
                                      py-3.5
                                      text-left
                                      transition-all
                                      duration-200
                                      active:scale-[0.99]
                                      disabled:cursor-not-allowed
                                      disabled:opacity-50

                                      ${
                                        isSelected
                                          ? "border-[#2463D4] bg-[#F0F6FF] shadow-[0_8px_24px_rgba(36,99,212,0.10)]"
                                          : "border-[#DCE3EC] bg-white hover:-translate-y-[1px] hover:border-[#2463D4] hover:bg-[#F7FAFF] hover:shadow-[0_8px_24px_rgba(36,99,212,0.10)]"
                                      }
                                    `}
                                  >

                                    {/* ICON */}

                                    <span
                                      className={`
                                        flex h-10 w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        text-base
                                        transition

                                        ${
                                          isSelected
                                            ? "bg-[#2463D4] text-white"
                                            : "bg-[#E7F0FC] text-[#2463D4] group-hover:bg-[#2463D4] group-hover:text-white"
                                        }
                                      `}
                                    >
                                      {selectionMode ===
                                        "multi" &&
                                      isSelected ? (
                                        <Check className="h-5 w-5" />
                                      ) : (
                                        getOptionIcon(
                                          option.icon
                                        )
                                      )}
                                    </span>

                                    {/* TEXT */}

                                    <span className="min-w-0 flex-1">

                                      <span className="block text-sm font-bold text-[#0F1B2D]">
                                        {
                                          option.label
                                        }
                                      </span>

                                      {option.description && (
                                        <span className="mt-0.5 block text-xs leading-5 text-[#66758A]">
                                          {
                                            option.description
                                          }
                                        </span>
                                      )}
                                    </span>

                                    {/* ARROW */}

                                    <ChevronRight
                                      className={`
                                        h-4 w-4
                                        shrink-0
                                        transition
                                        ${
                                          isSelected
                                            ? "text-[#2463D4]"
                                            : "text-[#A3AFBF] group-hover:translate-x-0.5 group-hover:text-[#2463D4]"
                                        }
                                      `}
                                    />
                                  </button>
                                );
                              }
                            )}
                          </div>

                          {/* MULTI CONTINUE */}

                          {selectionMode ===
                            "multi" && (
                            <button
                              type="button"
                              disabled={
                                selectedOptions.length ===
                                  0 ||
                                isLoading
                              }
                              onClick={
                                continueMultiSelection
                              }
                              className="
                                mt-4
                                inline-flex
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-[#2463D4]
                                px-5 py-3
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-[#174EA6]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                              "
                            >
                              Continue
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      )}

                    {/* =================================================
                        LOADING
                    ================================================= */}

                    {isLoading && (
                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F1ECFA] text-[#7048C8]">
                          <Bot className="h-4 w-4" />
                        </div>

                        <div className="rounded-2xl rounded-bl-md border border-[#E4EAF1] bg-white px-4 py-3 text-sm text-[#66758A] shadow-sm">
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Zevin is thinking...
                          </span>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* =================================================
                    INPUT
                ================================================= */}

                <form
                  onSubmit={handleSubmit}
                  className="border-t border-[#DCE3EC] bg-white p-4 sm:p-5"
                >
                  <div className="flex items-end gap-3 rounded-xl border border-[#C9D6E5] bg-white p-2 transition focus-within:border-[#2463D4] focus-within:ring-2 focus-within:ring-[#2463D4]/10">

                    <textarea
                      value={input}
                      onChange={(event) =>
                        setInput(
                          event.target.value
                        )
                      }
                      maxLength={2000}
                      rows={2}
                      placeholder={
                        quickReplies.length >
                        0
                          ? "Or type your own answer..."
                          : "Tell me about your business or challenge..."
                      }
                      className="
                        min-h-[52px]
                        flex-1
                        resize-none
                        bg-transparent
                        px-3 py-2
                        text-sm
                        leading-6
                        text-[#18243D]
                        outline-none
                        placeholder:text-[#7A879A]
                      "
                    />

                    <button
                      type="submit"
                      disabled={
                        !input.trim() ||
                        isLoading
                      }
                      className="
                        flex h-11
                        shrink-0
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        bg-[#2463D4]
                        px-5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#174EA6]
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          Send
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="mt-2 text-right text-xs text-[#8A96A8]">
                    {input.length}/2000
                  </p>
                </form>
              </div>

              {/* =================================================
                  TRUST
              ================================================= */}

              {latestResponse?.trust && (
                <div className="mt-6 rounded-2xl border border-[#DCE3EC] bg-white p-6 shadow-sm">

                  <div className="grid gap-6 md:grid-cols-3">

                    {/* AI */}

                    <div>
                      <div className="flex items-center gap-2">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F1ECFA] text-[#7048C8]">
                          <Bot className="h-4 w-4" />
                        </div>

                        <p className="text-sm font-bold text-[#0F1B2D]">
                          AI-Assisted Analysis
                        </p>
                      </div>

                      {latestResponse.trust
                        .ai_disclosure && (
                        <p className="mt-2 text-xs leading-6 text-[#66758A]">
                          {
                            latestResponse
                              .trust
                              .ai_disclosure
                          }
                        </p>
                      )}
                    </div>

                    {/* PRIVACY */}

                    <div>
                      <div className="flex items-center gap-2">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E7F0FC] text-[#2463D4]">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>

                        <p className="text-sm font-bold text-[#0F1B2D]">
                          Your Information
                        </p>
                      </div>

                      {latestResponse.trust
                        .privacy_note && (
                        <p className="mt-2 text-xs leading-6 text-[#66758A]">
                          {
                            latestResponse
                              .trust
                              .privacy_note
                          }
                        </p>
                      )}
                    </div>

                    {/* WHAT HAPPENS */}

                    <div>
                      <p className="text-sm font-bold text-[#0F1B2D]">
                        What Happens Next
                      </p>

                      <ol className="mt-3 space-y-2">
                        {latestResponse.trust
                          .what_happens_next?.map(
                            (
                              item,
                              index
                            ) => (
                              <li
                                key={`${index}-${item}`}
                                className="flex gap-2 text-xs leading-5 text-[#66758A]"
                              >
                                <span className="font-bold text-[#2463D4]">
                                  {index + 1}.
                                </span>

                                <span>
                                  {item}
                                </span>
                              </li>
                            )
                          )}
                      </ol>
                    </div>
                  </div>

                  {latestResponse.trust
                    .response_promise && (
                    <div className="mt-5 border-t border-[#DCE3EC] pt-4 text-center text-sm font-semibold text-[#2463D4]">
                      {
                        latestResponse
                          .trust
                          .response_promise
                      }
                    </div>
                  )}
                </div>
              )}

              {/* =================================================
                  CONSENT
              ================================================= */}

              {latestResponse?.trust
                ?.show_consent && (
                <div className="mt-5 rounded-xl border border-[#DCE3EC] bg-white p-5 shadow-sm">

                  <label className="flex cursor-pointer items-start gap-3">

                    <input
                      type="checkbox"
                      checked={consentGiven}
                      onChange={(event) =>
                        setConsentGiven(
                          event.target.checked
                        )
                      }
                      className="mt-1 h-4 w-4 accent-[#2463D4]"
                    />

                    <span className="text-xs leading-6 text-[#66758A]">
                      {latestResponse.trust
                        .consent_text ||
                        "I agree to share my details with Zevin Soft so the team can contact me about my request."}
                    </span>
                  </label>
                </div>
              )}

              {/* =================================================
                  RESULTS
              ================================================= */}

              {hasResults && (
                <div className="mt-8 space-y-6">

                  {/* =================================================
                      BUSINESS SNAPSHOT
                  ================================================= */}

                  {latestResponse?.analysis_card && (
                    <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 shadow-sm">

                      <div className="flex items-start gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E7F0FC] text-[#2463D4]">
                          <Sparkles className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2463D4]">
                            Business Analysis
                          </p>

                          <h2 className="mt-1 text-xl font-bold text-[#0F1B2D]">
                            {
                              latestResponse
                                .analysis_card
                                .title ||
                              "Your Business Snapshot"
                            }
                          </h2>
                        </div>
                      </div>

                      {(latestResponse
                        .analysis_card
                        .business_summary ||
                        latestResponse
                          .analysis_card
                          .summary) && (
                        <p className="mt-5 text-sm leading-7 text-[#425166]">
                          {
                            latestResponse
                              .analysis_card
                              .business_summary ||
                            latestResponse
                              .analysis_card
                              .summary
                          }
                        </p>
                      )}

                      <div className="mt-6 grid gap-6 md:grid-cols-2">

                        {/* CHALLENGES */}

                        {latestResponse
                          .analysis_card
                          .pain_points
                          ?.length ? (
                          <div>
                            <p className="text-sm font-bold text-[#0F1B2D]">
                              Key Challenges
                            </p>

                            <ul className="mt-3 space-y-2">
                              {latestResponse
                                .analysis_card
                                .pain_points.map(
                                  (item) => (
                                    <li
                                      key={item}
                                      className="flex gap-2 text-sm leading-6 text-[#66758A]"
                                    >
                                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#2463D4]" />

                                      <span>
                                        {item}
                                      </span>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        ) : null}

                        {/* OPPORTUNITIES */}

                        {latestResponse
                          .analysis_card
                          .opportunities
                          ?.length ? (
                          <div>
                            <p className="text-sm font-bold text-[#0F1B2D]">
                              Opportunities
                            </p>

                            <ul className="mt-3 space-y-2">
                              {latestResponse
                                .analysis_card
                                .opportunities.map(
                                  (item) => (
                                    <li
                                      key={item}
                                      className="flex gap-2 text-sm leading-6 text-[#66758A]"
                                    >
                                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#7048C8]" />

                                      <span>
                                        {item}
                                      </span>
                                    </li>
                                  )
                                )}
                            </ul>
                          </div>
                        ) : null}

                      </div>
                    </div>
                  )}

                  {/* =================================================
                      RECOMMENDATIONS
                  ================================================= */}

                  {recommendations.length >
                    0 && (
                    <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 shadow-sm">

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2463D4]">
                          Recommended Solutions
                        </p>

                        <h2 className="mt-1 text-xl font-bold text-[#0F1B2D]">
                          Solutions For Your Business
                        </h2>

                        <p className="mt-2 text-sm text-[#66758A]">
                          Select a solution to
                          explore it further.
                        </p>
                      </div>

                      <div className="mt-5 grid gap-3">

                        {recommendations.map(
                          (
                            recommendation,
                            index
                          ) => (
                            <button
                              key={`${recommendation.service}-${index}`}
                              type="button"
                              disabled={
                                isLoading
                              }
                              onClick={() => {
                                if (
                                  recommendation.service
                                ) {
                                  sendMessage(
                                    `Tell me more about ${recommendation.service}`
                                  );
                                }
                              }}
                              className="
                                group
                                w-full
                                rounded-xl
                                border
                                border-[#DCE3EC]
                                bg-white
                                p-5
                                text-left
                                transition-all
                                duration-200
                                hover:-translate-y-[2px]
                                hover:border-[#2463D4]
                                hover:bg-[#F7FAFF]
                                hover:shadow-[0_10px_28px_rgba(36,99,212,0.10)]
                                active:scale-[0.99]
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                              "
                            >
                              <div className="flex items-center gap-4">

                                <div
                                  className="
                                    flex h-11 w-11
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#E7F0FC]
                                    text-[#2463D4]
                                    transition
                                    group-hover:bg-[#2463D4]
                                    group-hover:text-white
                                  "
                                >
                                  <CheckCircle2 className="h-5 w-5" />
                                </div>

                                <div className="min-w-0 flex-1">

                                  <p className="font-bold text-[#0F1B2D]">
                                    {
                                      recommendation.service
                                    }
                                  </p>

                                  {recommendation.reason && (
                                    <p className="mt-1 text-sm leading-6 text-[#66758A]">
                                      {
                                        recommendation.reason
                                      }
                                    </p>
                                  )}
                                </div>

                                <ArrowRight
                                  className="
                                    h-5 w-5
                                    shrink-0
                                    text-[#A3AFBF]
                                    transition
                                    group-hover:translate-x-1
                                    group-hover:text-[#2463D4]
                                  "
                                />
                              </div>
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      CASE STUDY
                  ================================================= */}

                  {latestResponse?.case_study && (
                    <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 shadow-sm">

                      <span className="rounded-full bg-[#E7F0FC] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#2463D4]">
                        Verified Case Study
                      </span>

                      <div className="mt-4">

                        <h2 className="text-xl font-bold text-[#0F1B2D]">
                          {
                            latestResponse
                              .case_study
                              .title
                          }
                        </h2>

                        {latestResponse
                          .case_study
                          .result && (
                          <p className="mt-2 text-sm leading-6 text-[#425166]">
                            {
                              latestResponse
                                .case_study
                                .result
                            }
                          </p>
                        )}

                        {latestResponse
                          .case_study
                          .testimonial && (
                          <p className="mt-4 border-l-2 border-[#2463D4] pl-4 text-sm italic leading-6 text-[#66758A]">
                            “
                            {
                              latestResponse
                                .case_study
                                .testimonial
                            }
                            ”
                          </p>
                        )}

                      </div>
                    </div>
                  )}

                  {/* =================================================
                      NEXT STEP
                  ================================================= */}

                  {nextStep && (
                    <div className="rounded-2xl border border-[#DDD3F4] bg-[#F1ECFA] p-6">

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7048C8]">
                        Recommended Next Step
                      </p>

                      <p className="mt-3 text-base font-semibold leading-7 text-[#0F1B2D]">
                        {nextStep}
                      </p>

                    </div>
                  )}

                  {/* =================================================
                      ROADMAP
                  ================================================= */}

                  {roadmap.length > 0 && (
                    <div className="rounded-2xl border border-[#DCE3EC] bg-white p-6 shadow-sm">

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2463D4]">
                        Digital Roadmap
                      </p>

                      <h2 className="mt-1 text-xl font-bold text-[#0F1B2D]">
                        Your Recommended Path
                      </h2>

                      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                        {roadmap.map(
                          (item, index) => (
                            <div
                              key={`${item.phase}-${index}`}
                              className="
                                rounded-xl
                                border
                                border-[#E4EAF1]
                                bg-[#F7F9FC]
                                p-5
                                transition
                                hover:border-[#C9D9F2]
                                hover:bg-white
                              "
                            >

                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E7F0FC] text-sm font-bold text-[#2463D4]">
                                {String(
                                  index + 1
                                ).padStart(
                                  2,
                                  "0"
                                )}
                              </div>

                              <h3 className="mt-4 font-bold text-[#0F1B2D]">
                                {item.phase}
                              </h3>

                              {item.description && (
                                <p className="mt-2 text-sm leading-6 text-[#66758A]">
                                  {
                                    item.description
                                  }
                                </p>
                              )}

                            </div>
                          )
                        )}

                      </div>
                    </div>
                  )}

                  {/* =================================================
                      HANDOFF
                  ================================================= */}

                  {latestResponse?.handoff
                    ?.show && (
                    <div className="overflow-hidden rounded-2xl border border-[#C9D9F2] bg-[#E7F0FC] p-7">

                      <div className="flex items-start gap-4">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2463D4] text-white">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>

                        <div className="flex-1">

                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2463D4]">
                            Zevin Agent
                          </p>

                          <h2 className="mt-2 text-2xl font-bold text-[#0F1B2D]">
                            {
                              latestResponse
                                .handoff
                                .title ||
                              "Your business analysis is ready"
                            }
                          </h2>

                          {latestResponse
                            .handoff
                            .message && (
                            <p className="mt-2 text-sm leading-7 text-[#425166]">
                              {
                                latestResponse
                                  .handoff
                                  .message
                              }
                            </p>
                          )}

                          {latestResponse
                            .handoff
                            .report_note && (
                            <p className="mt-3 text-sm font-medium leading-6 text-[#425166]">
                              {
                                latestResponse
                                  .handoff
                                  .report_note
                              }
                            </p>
                          )}

                          {latestResponse
                            .handoff
                            .response_promise && (
                            <p className="mt-3 text-sm font-semibold text-[#2463D4]">
                              {
                                latestResponse
                                  .handoff
                                  .response_promise
                              }
                            </p>
                          )}

                          {/* ACTIONS */}

                          {latestResponse
                            .handoff
                            .actions
                            ?.length ? (
                            <div className="mt-6 flex flex-wrap gap-3">

                              {latestResponse.handoff.actions.map(
                                (action) => {
                                  const baseClass =
                                    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition";

                                  if (
                                    action.type ===
                                    "link"
                                  ) {
                                    const styleClass =
                                      action.style ===
                                      "whatsapp"
                                        ? "bg-[#25D366] text-white hover:opacity-90"
                                        : action.style ===
                                            "secondary"
                                          ? "border border-[#2463D4] bg-white text-[#2463D4] hover:bg-[#F7F9FC]"
                                          : "bg-[#2463D4] text-white hover:bg-[#174EA6]";

                                    return (
                                      <a
                                        key={
                                          action.label
                                        }
                                        href={
                                          action.url
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${baseClass} ${styleClass}`}
                                      >
                                        {action.style ===
                                          "whatsapp" && (
                                          <MessageCircle className="h-4 w-4" />
                                        )}

                                        {
                                          action.label
                                        }

                                        <ExternalLink className="h-3.5 w-3.5" />
                                      </a>
                                    );
                                  }

                                  return (
                                    <button
                                      key={
                                        action.label
                                      }
                                      type="button"
                                      disabled={
                                        isLoading
                                      }
                                      onClick={() => {
                                        if (
                                          action.value
                                        ) {
                                          sendMessage(
                                            action.value
                                          );
                                        }
                                      }}
                                      className={`${baseClass} border border-[#2463D4] bg-white text-[#2463D4] hover:bg-[#F7F9FC] disabled:opacity-50`}
                                    >
                                      {
                                        action.label
                                      }
                                    </button>
                                  );
                                }
                              )}

                            </div>
                          ) : (
                            <div className="mt-6 flex flex-wrap gap-3">

                              <a
                                href="/contact"
                                className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  gap-2
                                  rounded-lg
                                  bg-[#2463D4]
                                  px-5 py-3
                                  text-sm
                                  font-semibold
                                  text-white
                                  transition
                                  hover:bg-[#174EA6]
                                "
                              >
                                Talk to Zevin Team

                                <ArrowRight className="h-4 w-4" />
                              </a>

                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  )}

                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}