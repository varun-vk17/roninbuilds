import imgPos from "@/imports/Frame74/310703af24629639fdd392c039f1bfabdca91d3c.png"
import imgOffer from "@/imports/Frame74/2c0eba77c8c936bd41ff4c5da5b1ac1eca7cd7a5.png"
import imgStory from "@/imports/Frame74/65bec34cfda507d774931c098f64dddc5f02ec29.png"
import imgExp from "@/imports/Frame74/29435c0a38600e12dacb0d523fc83ba223ee97e2.png"
import { gradient } from "@/constants"

interface RevenueSystemCardProps {
  label: string
  title: string
  description: string
  img: string
  imgOpacity?: number
}

function RevenueSystemCard({
  label,
  title,
  description,
  img,
  imgOpacity = 0.1,
}: RevenueSystemCardProps) {
  return (
    <div
      className="relative rounded-[20px] flex-1 min-w-0"
      style={{ minHeight: "clamp(200px, 22vw, 280px)" }}
    >
      {/* Background image — decorative */}
      <img
        alt=""
        src={img}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-[20px]"
        style={{ opacity: imgOpacity }}
        aria-hidden="true"
        loading="lazy"
      />
      {/* Content */}
      <div
        className="relative flex flex-col items-start h-full rounded-[20px]"
        style={{
          padding:
            "clamp(20px, 2.656vw, 34px) clamp(20px, 2.656vw, 34px)",
          gap: "clamp(8px, 0.781vw, 10px)",
        }}
      >
        <p
          className="text-white shrink-0"
          style={{
            fontFamily:
              '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
            fontWeight: 500,
            fontSize: "clamp(10px, 0.938vw, 12px)",
            fontVariationSettings: '"wdth" 100',
            lineHeight: "normal",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </p>
        <div
          className="flex flex-col text-white"
          style={{ gap: "clamp(8px, 0.938vw, 12px)" }}
        >
          <p
            style={{
              fontFamily:
                '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
              fontWeight: 600,
              fontSize: "clamp(22px, 2.813vw, 36px)",
              fontVariationSettings: '"wdth" 100',
              lineHeight: "normal",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(14px, 1.406vw, 18px)",
              fontVariationSettings: '"wdth" 100',
              lineHeight: "normal",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      {/* Border overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.7)" }}
      />
    </div>
  )
}

export default function RevenueSystemSection() {
  return (
    <section
      id="revenue-system"
      aria-labelledby="revenue-system-heading"
      className="w-full flex flex-col items-center"
      style={{
        gap: "clamp(60px, 11.719vw, 150px)",
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(64px, 10.703vw, 137px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
      }}
    >
      {/* Header */}
      <div
        className="flex flex-col w-full"
        style={{ gap: "clamp(12px, 1.563vw, 20px)" }}
      >
        <h2
          id="revenue-system-heading"
          className="az-blur text-white w-full"
          style={{
            fontFamily:
              '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
            fontWeight: 800,
            fontStyle: "normal",
            fontSize: "clamp(28px, 3.75vw, 48px)",
            lineHeight: "normal",
            margin: 0,
          }}
        >
          REVENUE SYSTEM™
        </h2>
        <p
          className="az-up w-full"
          style={{
            fontFamily:
              '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
            fontWeight: 600,
            fontSize: "clamp(14px, 1.563vw, 20px)",
            fontVariationSettings: '"wdth" 100',
            lineHeight: "normal",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          We bring the thinking behind what you sell, how you say it, and what
          people see into one connected system — built and delivered in 7 days.
        </p>
      </div>

      {/* 2×2 grid */}
      <div
        className="w-full flex flex-col"
        style={{ gap: "clamp(16px, 3.125vw, 40px)" }}
      >
        {/* Row 1 */}
        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "clamp(16px, 3.125vw, 40px)" }}
        >
          <div
            className="az-left flex-1 min-w-0 lift"
            style={{ "--az-delay": "0s" } as React.CSSProperties}
          >
            <RevenueSystemCard
              label="01 — POSITION"
              title="Be different."
              description="Find the position your business can own—and make it impossible to confuse you with the rest."
              img={imgPos}
              imgOpacity={0.1}
            />
          </div>
          <div
            className="az-right flex-1 min-w-0 lift"
            style={{ "--az-delay": "0.1s" } as React.CSSProperties}
          >
            <RevenueSystemCard
              label="02 — OFFER"
              title="Make it desirable."
              description="Shape what you sell into an offer that feels valuable, relevant, and worth acting on."
              img={imgOffer}
              imgOpacity={0.1}
            />
          </div>
        </div>
        {/* Row 2 */}
        <div
          className="flex flex-col md:flex-row"
          style={{ gap: "clamp(16px, 3.125vw, 40px)" }}
        >
          <div
            className="az-left flex-1 min-w-0 lift"
            style={{ "--az-delay": "0s" } as React.CSSProperties}
          >
            <RevenueSystemCard
              label="03 — STORY"
              title="Make people care."
              description="Turn your product, idea, or business into a story that makes the value felt—not just understood."
              img={imgStory}
              imgOpacity={0.1}
            />
          </div>
          <div
            className="az-right flex-1 min-w-0 lift"
            style={{ "--az-delay": "0.1s" } as React.CSSProperties}
          >
            <RevenueSystemCard
              label="04 — EXPERIENCE"
              title="Bring it to life."
              description="Bring the strategy to life through a focused landing page built to move people toward action."
              img={imgExp}
              imgOpacity={0.3}
            />
          </div>
        </div>

        {/* Pricing card */}
        <div
          id="pricing"
          className="az-scale w-full flex flex-col md:flex-row items-stretch"
          style={{
            borderRadius: "clamp(16px, 2.344vw, 20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            overflow: "hidden",
          }}
        >
          {/* Left — plan info */}
          <div
            className="flex flex-col justify-between flex-1"
            style={{
              padding: "clamp(28px, 3.75vw, 48px)",
              gap: "clamp(32px, 3.75vw, 48px)",
              borderRight: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <div
              className="flex flex-col"
              style={{ gap: "clamp(8px, 0.938vw, 12px)" }}
            >
              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: "clamp(11px, 0.938vw, 12px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: "normal",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                REVENUE SYSTEM™ — 7-DAY SPRINT
              </p>
              <div
                className="flex items-end"
                style={{ gap: "clamp(10px, 1.094vw, 14px)" }}
              >
                <p
                  style={{
                    fontFamily:
                      '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
                    fontWeight: 800,
                    fontSize: "clamp(28px, 3.75vw, 48px)",
                    lineHeight: "normal",
                    color: "white",
                    margin: 0,
                  }}
                >
                  $499
                </p>
                <p
                  style={{
                    fontFamily:
                      '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "clamp(12px, 1.094vw, 14px)",
                    fontVariationSettings: '"wdth" 100',
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.4,
                    marginBottom: "clamp(6px, 0.625vw, 8px)",
                    textDecoration: "line-through",
                  }}
                >
                  $1,000
                </p>
              </div>

              {/* Founding badge */}
              <div
                className="flex items-center self-start"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "40px",
                  padding: "4px clamp(10px, 0.938vw, 12px)",
                  gap: "6px",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
                <p
                  style={{
                    fontFamily:
                      '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: "clamp(10px, 0.781vw, 10px)",
                    fontVariationSettings: '"wdth" 100',
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Founding client rate — first 5 only
                </p>
              </div>

              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1.25vw, 16px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.5,
                }}
              >
                One project. One price. The full Revenue System — position,
                offer, story, and page — delivered in 7 days. Goes to $1,000
                after the first 5.
              </p>
            </div>

            <a
              href="#"
              className="no-underline flex items-center justify-center self-start"
              rel="noopener noreferrer"
              style={{
                background: gradient,
                borderRadius: "40px",
                padding:
                  "clamp(10px, 0.938vw, 12px) clamp(28px, 3.203vw, 41px)",
                fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                fontWeight: 400,
                fontSize: "clamp(14px, 1.25vw, 16px)",
                color: "white",
                whiteSpace: "nowrap",
              }}
            >
              Start the work
            </a>
          </div>

          {/* Right — features */}
          <div
            className="flex flex-col justify-center flex-1"
            style={{
              padding: "clamp(28px, 3.75vw, 48px)",
              gap: "clamp(16px, 1.563vw, 20px)",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {[
              ["01 — POSITION", "Brand positioning & messaging strategy"],
              ["02 — OFFER", "Offer design & value articulation"],
              ["03 — STORY", "Narrative & copywriting for your market"],
              ["04 — EXPERIENCE", "Landing page design & build"],
            ].map(([label, desc]) => (
              <div
                key={label}
                className="flex flex-col md:flex-row md:items-center"
                style={{ gap: "clamp(4px, 0.625vw, 8px)" }}
              >
                <p
                  className="shrink-0"
                  style={{
                    fontFamily:
                      '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: "clamp(10px, 0.781vw, 10px)",
                    fontVariationSettings: '"wdth" 100',
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    minWidth: "clamp(90px, 9.375vw, 120px)",
                  }}
                >
                  {label}
                </p>
                <div
                  className="hidden md:block shrink-0"
                  aria-hidden="true"
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "rgba(255,255,255,0.15)",
                  }}
                />
                <p
                  style={{
                    fontFamily:
                      '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.094vw, 14px)",
                    fontVariationSettings: '"wdth" 100',
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.4,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
