import Image from "next/image";
import {
  BrainCircuit,
  Monitor,
  UsersRound,
  Settings,
  BarChart3,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "AI & Automation",
    Icon: BrainCircuit,
    color: "#7048C8",
    glow: "rgba(112,72,200,0.18)",
    left: "50%",
    top: "15%",
  },
  {
    title: "CRM Solutions",
    Icon: UsersRound,
    color: "#10B394",
    glow: "rgba(16,179,148,0.18)",
    left: "80.3%",
    top: "32.5%",
  },
  {
    title: "Business\nAutomation",
    Icon: Settings,
    color: "#F23869",
    glow: "rgba(242,56,105,0.18)",
    left: "80.3%",
    top: "67.5%",
  },
  {
    title: "Analytics",
    Icon: BarChart3,
    color: "#7048C8",
    glow: "rgba(112,72,200,0.18)",
    left: "50%",
    top: "85%",
  },
  {
    title: "E-Commerce",
    Icon: ShoppingCart,
    color: "#F59A1B",
    glow: "rgba(245,154,27,0.18)",
    left: "19.7%",
    top: "67.5%",
  },
  {
    title: "Website\nDevelopment",
    Icon: Monitor,
    color: "#1682F4",
    glow: "rgba(22,130,244,0.18)",
    left: "19.7%",
    top: "32.5%",
  },
];

export default function BusinessSystemVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px]">
      {/* ====================================================== */}
      {/* BACKGROUND GLOW */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[88%] w-[88%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          background:
            "radial-gradient(circle, rgba(216,231,255,0.70) 0%, rgba(232,240,252,0.38) 44%, rgba(255,255,255,0) 74%)",
          filter: "blur(12px)",
        }}
      />

      {/* ====================================================== */}
      {/* ORBIT RINGS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[76%] w-[76%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[#DCE7F5]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[66%] w-[66%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          border border-[#DCE7F5]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[71%] w-[71%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          border: "2px dashed rgba(76,143,235,0.42)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[52%] w-[52%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
        style={{
          border: "2px dashed rgba(76,143,235,0.34)",
        }}
      />

      {/* ====================================================== */}
      {/* CONNECTOR LINES */}
      {/* ====================================================== */}

      <svg
        viewBox="0 0 1000 1000"
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          h-full
          w-full
        "
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineBlue">
            <stop offset="0%" stopColor="#1682F4" />
            <stop offset="100%" stopColor="#53B0FF" />
          </linearGradient>

          <linearGradient id="linePurple">
            <stop offset="0%" stopColor="#7048C8" />
            <stop offset="100%" stopColor="#A876FF" />
          </linearGradient>

          <linearGradient id="lineGreen">
            <stop offset="0%" stopColor="#10B394" />
            <stop offset="100%" stopColor="#35D0AF" />
          </linearGradient>

          <linearGradient id="lineOrange">
            <stop offset="0%" stopColor="#F59A1B" />
            <stop offset="100%" stopColor="#FFC45A" />
          </linearGradient>

          <linearGradient id="linePink">
            <stop offset="0%" stopColor="#F23869" />
            <stop offset="100%" stopColor="#FF7C9A" />
          </linearGradient>
        </defs>

        {/* UPPER LEFT - WEBSITE */}
        <line
          x1="335"
          y1="405"
          x2="270"
          y2="367"
          stroke="url(#lineBlue)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* UPPER RIGHT - CRM */}
        <line
          x1="665"
          y1="405"
          x2="730"
          y2="367"
          stroke="url(#lineGreen)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* LOWER LEFT - E-COMMERCE */}
        <line
          x1="335"
          y1="595"
          x2="270"
          y2="633"
          stroke="url(#lineOrange)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* LOWER RIGHT - AUTOMATION */}
        <line
          x1="665"
          y1="595"
          x2="730"
          y2="633"
          stroke="url(#linePink)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* ====================================================== */}
      {/* FIXED TOP VERTICAL CONNECTOR */}
      {/* AI & AUTOMATION -> CENTER */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[25.8%]
          z-[15]
          h-[4.6%]
          w-[2px]
          -translate-x-1/2
        "
        style={{
          background:
            "linear-gradient(to bottom, #7048C8 0%, #8E63DD 100%)",
        }}
      />

      {/* ====================================================== */}
      {/* FIXED BOTTOM VERTICAL CONNECTOR */}
      {/* CENTER -> ANALYTICS */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[25.8%]
          left-1/2
          z-[15]
          h-[4.6%]
          w-[2px]
          -translate-x-1/2
        "
        style={{
          background:
            "linear-gradient(to bottom, #8E63DD 0%, #7048C8 100%)",
        }}
      />

      {/* ====================================================== */}
      {/* ROTATING PARTICLES */}
      {/* ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2 top-1/2
          h-[68%] w-[68%]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
        "
      >
        <div className="hero-particles-spin absolute inset-0 rounded-full">
          <div
            className="
              absolute
              left-[6%] top-[21%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#62B7FF,#1677DF)",
              boxShadow:
                "0 4px 12px rgba(22,130,244,.30)",
            }}
          />

          <div
            className="
              absolute
              right-[13%] top-[8%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#B893FF,#7048C8)",
            }}
          />

          <div
            className="
              absolute
              right-[1%] top-[47%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#2FD5B4,#10B394)",
            }}
          />

          <div
            className="
              absolute
              bottom-[8%] right-[17%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#B78EFF,#7048C8)",
            }}
          />

          <div
            className="
              absolute
              bottom-[9%] left-[17%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#61B6FF,#1677DF)",
            }}
          />

          <div
            className="
              absolute
              left-[1%] top-[52%]
              h-4 w-4
              rounded-full
              sm:h-5 sm:w-5
            "
            style={{
              background:
                "linear-gradient(145deg,#61B6FF,#1677DF)",
            }}
          />
        </div>
      </div>

      {/* ====================================================== */}
      {/* CENTER LOGO */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          left-1/2 top-1/2
          z-20
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <div
          className="
            hero-center-pulse
            flex
            h-[170px] w-[170px]
            items-center
            justify-center
            rounded-full
            bg-white

            sm:h-[210px] sm:w-[210px]

            md:h-[245px] md:w-[245px]
          "
          style={{
            border: "5px solid white",

            boxShadow:
              "0 0 0 6px rgba(205,225,250,.82), 0 0 0 14px rgba(221,235,253,.48), 0 20px 52px rgba(36,99,212,.16)",
          }}
        >
          <div
            className="
              flex
              w-[80%]
              flex-col
              items-center
              justify-center
            "
          >
            <Image
              src="/logo/zevin-logo.png"
              alt="Zevin Soft"
              width={320}
              height={260}
              priority
              className="
                h-auto
                w-[86%]
                object-contain
              "
            />

            <div
              className="
                mt-2
                text-center
                text-[6px]
                font-bold
                uppercase
                leading-[1.7]
                tracking-[0.29em]
                text-[#16233A]

                sm:text-[8px]

                md:text-[9px]
              "
            >
              Your Business
              <br />
              Powered Digitally
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* SERVICE CIRCLES */}
      {/* ====================================================== */}

      {services.map((service, index) => {
        const Icon = service.Icon;

        return (
          <div
            key={service.title}
            className="
              absolute
              z-30
              -translate-x-1/2
              -translate-y-1/2
            "
            style={{
              left: service.left,
              top: service.top,
            }}
          >
            <div
              className={
                index % 2 === 0
                  ? "hero-service-float-up"
                  : "hero-service-float-down"
              }
              style={{ animationDuration: `${4.5 + index * 0.18}s` }}
            >
              <div
                className="
                  transition-transform
                  duration-200
                  hover:scale-[1.045]
                  flex
                  h-[90px] w-[90px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-center

                  sm:h-[112px] sm:w-[112px]

                  md:h-[136px] md:w-[136px]
                "
                style={{
                  border: `1.5px solid ${service.color}45`,

                  boxShadow: `
                    0 8px 24px ${service.glow},
                    inset 0 0 18px ${service.glow}
                  `,
                }}
              >
                <Icon
                  className="
                    mb-2
                    h-6 w-6

                    sm:h-7 sm:w-7

                    md:h-9 md:w-9
                  "
                  strokeWidth={2.4}
                  style={{
                    color: service.color,
                  }}
                />

                <h3
                  className="
                    whitespace-pre-line
                    px-2
                    text-[8px]
                    font-bold
                    leading-[1.12]
                    text-[#101B30]

                    sm:text-[10px]

                    md:text-[12px]
                  "
                >
                  {service.title}
                </h3>
              </div>
            </div>
          </div>
        );
      })}

      {/* ====================================================== */}
      {/* CONNECTION DOTS */}
      {/* ====================================================== */}

      {/* TOP PURPLE */}
      <div
        className="
          absolute
          left-1/2
          top-[29.8%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#7048C8]
        "
        style={{
          boxShadow:
            "0 3px 8px rgba(112,72,200,.30)",
        }}
      />

      {/* UPPER RIGHT GREEN */}
      <div
        className="
          absolute
          left-[66.5%]
          top-[40.5%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#10B394]
        "
      />

      {/* LOWER RIGHT PINK */}
      <div
        className="
          absolute
          left-[66.5%]
          top-[59.5%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#F23869]
        "
      />

      {/* BOTTOM PURPLE */}
      <div
        className="
          absolute
          left-1/2
          top-[70.2%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#7048C8]
        "
      />

      {/* LOWER LEFT ORANGE */}
      <div
        className="
          absolute
          left-[33.5%]
          top-[59.5%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#F59A1B]
        "
      />

      {/* UPPER LEFT BLUE */}
      <div
        className="
          absolute
          left-[33.5%]
          top-[40.5%]
          z-40
          h-3.5 w-3.5
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#1682F4]
        "
      />
    </div>
  );
}