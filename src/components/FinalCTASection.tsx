import { cardBg, gradient } from "@/constants"

export default function FinalCTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="w-full"
      style={{
        paddingTop: "clamp(40px, 6.25vw, 80px)",
        paddingBottom: "clamp(40px, 6.25vw, 80px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
      }}
    >
      {/* Big blue gradient card */}
      <div
        className="az-scale w-full flex flex-col items-center text-center relative overflow-hidden"
        style={{
          backgroundImage: cardBg,
          borderRadius: "clamp(20px, 2.344vw, 30px)",
          padding:
            "clamp(56px, 8.594vw, 110px) clamp(24px, 7.813vw, 100px)",
          gap: "clamp(32px, 3.75vw, 48px)",
        }}
      >
        {/* Subtle noise texture overlay — decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0,0,0,0.15) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Founding badge */}
        <div
          className="flex items-center self-center"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "40px",
            padding: "5px clamp(14px, 1.25vw, 16px)",
            gap: "7px",
            position: "relative",
            zIndex: 1,
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
              color: "white",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            5 FOUNDING SPOTS — 3 LEFT
          </p>
        </div>

        {/* Headline */}
        <div
          className="flex flex-col items-center"
          style={{
            gap: "clamp(14px, 1.563vw, 20px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            id="cta-heading"
            className="text-white uppercase"
            style={{
              fontFamily:
                '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "clamp(32px, 6.25vw, 80px)",
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            READY TO MAKE IT SELL?
          </h2>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(14px, 1.25vw, 16px)",
              fontVariationSettings: '"wdth" 100',
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: "460px",
              margin: 0,
            }}
          >
            Fill the 5-minute form. We handle the rest. Your full Revenue System
            — built and delivered in 7 days for $499.
          </p>
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center"
          style={{
            gap: "clamp(12px, 1.25vw, 16px)",
            position: "relative",
            zIndex: 1,
          }}
        >
          <a
            href="#"
            rel="noopener noreferrer"
            className="no-underline flex items-center justify-center"
            style={{
              background: "black",
              borderRadius: "40px",
              padding:
                "clamp(13px, 1.094vw, 14px) clamp(36px, 3.75vw, 48px)",
              fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(14px, 1.25vw, 16px)",
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            Claim your founding spot — $499
          </a>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(12px, 0.938vw, 12px)",
              fontVariationSettings: '"wdth" 100',
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Goes to $1,000 after the first 5 clients
          </p>
        </div>
      </div>
    </section>
  )
}
