const steps = [
  {
    day: "DAY 0 → 1",
    tag: "YOU DO THIS ONCE",
    title: "Fill the form. Into the portal.",
    body: "A 5-minute intake is all we need. Once you're in, you get access to your private client portal the same day — track progress in real time, leave notes, ask questions. No email threads, ever.",
    accent: true,
  },
  {
    day: "DAYS 2–6",
    tag: "THE SPRINT",
    title: "We build the system.",
    body: "Position. Offer. Story. Page. Each piece is researched, written, and designed in sequence — one feeding the next — so everything lands as one connected whole.",
    accent: true,
  },
  {
    day: "DAY 7",
    tag: "DONE",
    title: "Delivered.",
    body: "Your full Revenue System lands in the portal on day 7. Review it, approve it, launch it. Remaining 50% due on delivery.",
    accent: true,
  },
]

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="w-full flex flex-col items-center"
      style={{
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(64px, 10.703vw, 137px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
        gap: "clamp(48px, 7.813vw, 100px)",
      }}
    >
      {/* Header */}
      <div
        className="w-full flex flex-col items-center text-center"
        style={{ gap: "clamp(12px, 1.25vw, 16px)" }}
      >
        <p
          className="az-fade"
          style={{
            fontFamily:
              '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
            fontWeight: 500,
            fontSize: "clamp(11px, 0.938vw, 12px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          THE 7-DAY SPRINT
        </p>
        <h2
          id="how-it-works-heading"
          className="az-blur text-white uppercase w-full"
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
          HERE'S WHAT HAPPENS.
        </h2>
        <p
          className="az-up"
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(14px, 1.25vw, 16px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.6,
            maxWidth: "520px",
            margin: 0,
          }}
        >
          You fill a 5-minute form. We build the rest. Here's the full timeline
          from start to delivery.
        </p>
      </div>

      {/* Steps */}
      <div
        className="w-full flex flex-col md:flex-row items-stretch"
        style={{ gap: "clamp(12px, 2.344vw, 30px)" }}
      >
        {steps.map((step, i) => (
          <article
            key={i}
            className="az-scale lift flex flex-col justify-between flex-1"
            style={{
              "--az-delay": `${i * 0.14}s`,
              borderRadius: "clamp(16px, 1.563vw, 20px)",
              border: step.accent ? "none" : "1px solid rgba(255,255,255,0.1)",
              background: step.accent
                ? "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)"
                : "rgba(255,255,255,0.03)",
              padding: "clamp(24px, 2.813vw, 36px)",
              gap: "clamp(32px, 3.75vw, 48px)",
            } as React.CSSProperties}
          >
            {/* Top */}
            <div className="flex flex-col" style={{ gap: "clamp(6px, 0.625vw, 8px)" }}>
              <div className="flex items-center justify-between">
                <p
                  style={{
                    fontFamily:
                      '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
                    fontWeight: 800,
                    fontSize: "clamp(18px, 1.875vw, 24px)",
                    color: "white",
                    margin: 0,
                    lineHeight: "normal",
                  }}
                >
                  {step.day}
                </p>
                <p
                  style={{
                    fontFamily:
                      '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                    fontWeight: 500,
                    fontSize: "clamp(9px, 0.703vw, 9px)",
                    fontVariationSettings: '"wdth" 100',
                    color: step.accent
                      ? "rgba(255,255,255,0.7)"
                      : "rgba(255,255,255,0.3)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  {step.tag}
                </p>
              </div>

              {/* Divider */}
              <div
                aria-hidden="true"
                style={{
                  height: "1px",
                  background: step.accent
                    ? "rgba(255,255,255,0.3)"
                    : "rgba(255,255,255,0.08)",
                  marginTop: "clamp(6px, 0.625vw, 8px)",
                }}
              />
            </div>

            {/* Bottom */}
            <div className="flex flex-col" style={{ gap: "clamp(8px, 0.938vw, 12px)" }}>
              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
                  fontWeight: 600,
                  fontSize: "clamp(18px, 1.875vw, 24px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "white",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {step.title}
              </p>
              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1.094vw, 14px)",
                  fontVariationSettings: '"wdth" 100',
                  color: step.accent
                    ? "rgba(255,255,255,0.75)"
                    : "rgba(255,255,255,0.45)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Payment note */}
      <div
        className="w-full flex flex-col md:flex-row items-center justify-between"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "clamp(14px, 1.563vw, 20px)",
          padding:
            "clamp(20px, 2.344vw, 30px) clamp(24px, 2.813vw, 36px)",
          gap: "clamp(16px, 1.563vw, 20px)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="flex flex-col" style={{ gap: "4px" }}>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
              fontWeight: 500,
              fontSize: "clamp(11px, 0.938vw, 12px)",
              fontVariationSettings: '"wdth" 100',
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            PAYMENT STRUCTURE
          </p>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
              fontWeight: 600,
              fontSize: "clamp(15px, 1.25vw, 16px)",
              fontVariationSettings: '"wdth" 100',
              color: "white",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            50% to start the sprint. 50% when you receive the work.
          </p>
        </div>
        <div
          className="flex items-center shrink-0"
          style={{ gap: "clamp(20px, 2.344vw, 30px)" }}
        >
          {[
            ["$249.50", "Due now"],
            ["$249.50", "On delivery"],
          ].map(([amount, label]) => (
            <div
              key={label}
              className="flex flex-col items-center"
              style={{ gap: "4px" }}
            >
              <p
                style={{
                  fontFamily:
                    '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(18px, 1.563vw, 20px)",
                  color: "white",
                  margin: 0,
                  lineHeight: "normal",
                }}
              >
                {amount}
              </p>
              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: "clamp(11px, 0.781vw, 10px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
