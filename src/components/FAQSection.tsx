import { useState } from "react"
import { faqs, type FaqItem } from "@/constants"

function FAQItem({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false)
  const id = `faq-answer-${q.replace(/\s+/g, "-").toLowerCase().slice(0, 40)}`

  return (
    <div
      className="w-full"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        paddingBottom: "clamp(20px, 2.344vw, 30px)",
      }}
    >
      <button
        className="w-full flex items-start justify-between text-left bg-transparent border-0 cursor-pointer"
        style={{
          gap: "clamp(16px, 2.344vw, 30px)",
          paddingTop: "clamp(20px, 2.344vw, 30px)",
        }}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
      >
        <p
          style={{
            fontFamily:
              '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
            fontWeight: 600,
            fontSize: "clamp(15px, 1.406vw, 18px)",
            fontVariationSettings: '"wdth" 100',
            color: "white",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {q}
        </p>
        <span
          className="shrink-0"
          aria-hidden="true"
          style={{
            width: "clamp(22px, 2.344vw, 30px)",
            height: "clamp(22px, 2.344vw, 30px)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.25s ease, border-color 0.25s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            borderColor: open
              ? "rgba(255,255,255,0.6)"
              : "rgba(255,255,255,0.25)",
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <line
              x1="5"
              y1="0"
              x2="5"
              y2="10"
              stroke="white"
              strokeWidth="1.2"
            />
            <line
              x1="0"
              y1="5"
              x2="10"
              y2="5"
              stroke="white"
              strokeWidth="1.2"
            />
          </svg>
        </span>
      </button>
      <div
        id={id}
        role="region"
        style={{
          maxHeight: open ? "400px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(13px, 1.094vw, 14px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            marginTop: "clamp(10px, 1.094vw, 14px)",
            margin: 0,
            paddingTop: "clamp(10px, 1.094vw, 14px)",
            paddingRight: "clamp(32px, 3.906vw, 50px)",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full flex flex-col items-center"
      style={{
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(64px, 10.703vw, 137px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
        gap: "clamp(48px, 5.469vw, 70px)",
      }}
    >
      {/* Header */}
      <div
        className="w-full flex flex-col md:flex-row md:items-end justify-between"
        style={{ gap: "clamp(16px, 2.344vw, 30px)" }}
      >
        <h2
          id="faq-heading"
          className="az-blur text-white uppercase shrink-0"
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
          QUESTIONS
        </h2>
        <p
          className="az-fade"
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(13px, 1.094vw, 14px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: "360px",
          }}
        >
          Everything you need to know before you start the sprint.
        </p>
      </div>

      {/* FAQ list */}
      <div
        className="az-up w-full"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        {faqs.map((item) => (
          <FAQItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  )
}
