export default function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="w-full flex flex-col items-center"
      style={{
        gap: "clamp(24px, 3.125vw, 40px)",
        paddingTop: "clamp(48px, 6.875vw, 88px)",
        paddingBottom: "clamp(80px, 17.97vw, 230px)",
        paddingLeft: "clamp(20px, 4vw, 32px)",
        paddingRight: "clamp(20px, 4vw, 32px)",
      }}
    >
      <h2
        id="problem-heading"
        className="az-blur text-white shrink-0 uppercase text-center"
        style={{
          fontFamily:
            '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
          fontWeight: 800,
          fontStyle: "normal",
          fontSize: "clamp(28px, 3.75vw, 48px)",
          lineHeight: "normal",
          whiteSpace: "nowrap",
          margin: 0,
        }}
      >
        The Problem
      </h2>
      <p
        className="az-up shrink-0 uppercase text-justify md:text-center"
        style={{
          "--az-delay": "0.2s",
          fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
          fontWeight: 700,
          fontSize: "clamp(16px, 2.1875vw, 28px)",
          lineHeight: 1.55,
          letterSpacing: "0.28px",
          color: "rgba(255,255,255,0.8)",
          fontVariationSettings: '"opsz" 14',
          maxWidth: "clamp(300px, 69.375vw, 888px)",
          width: "100%",
          textAlign: "justify",
          textJustify: "inter-word",
          textAlignLast: "center",
        } as React.CSSProperties}
      >
        {
          "Every year, businesses burn thousands on ads to get attention, only to waste it on a message that doesn't connect, an offer that doesn't sell, positioning that doesn't stick, and a landing page that doesn't convert."
        }
      </p>
    </section>
  )
}
