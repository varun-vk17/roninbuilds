export default function ThinkSection() {
  return (
    <section
      aria-labelledby="think-heading"
      className="w-full flex flex-col items-center justify-center"
      style={{
        paddingTop: "clamp(48px, 6.5vw, 84px)",
        paddingBottom: "clamp(48px, 6.5vw, 84px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
        gap: "clamp(24px, 3.2vw, 44px)",
      }}
    >
      {/* Heading only — subtext moved into the card image */}
      <div className="flex flex-col items-center text-center w-full">
        <h2
          id="think-heading"
          className="az-blur text-white w-full uppercase"
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
          WE THINK
        </h2>
      </div>

      {/* Showcase Card containing the fresh visual with the subtext at the top */}
      <div
        className="az-scale w-full shrink-0 overflow-hidden"
        style={{
          borderRadius: "clamp(16px, 2.344vw, 30px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 24px 70px -15px rgba(0, 0, 0, 0.8)",
        }}
      >
        <img
          src="/think-card.jpg"
          alt="We Think: Attention is easy to buy. Interest is harder to earn. Action takes a reason."
          className="w-full h-auto block object-cover object-center"
          loading="lazy"
        />
      </div>
    </section>
  )
}
