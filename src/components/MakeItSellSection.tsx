import { cardGradient } from "@/constants"

interface Card {
  label: string
  body: string[]
}

const cards: Card[] = [
  {
    label: "THE PATTERN",
    body: [
      "GOOD PRODUCT.",
      "UNCLEAR POSITIONING.",
      "WEAK OFFER.",
      "PRETTY PAGE.",
      "NO REVENUE.",
    ],
  },
  {
    label: "WHAT WE DO",
    body: [
      "WE FIND WHAT'S",
      "GETTING IN THE WAY",
      "AND BUILD THE",
      "REVENUE SYSTEM",
      "AROUND IT.",
    ],
  },
  {
    label: "THE PATTERN",
    body: [
      "LESS EXPLAINING.",
      "MORE UNDERSTANDING.",
      'MORE "THAT\'S EXACTLY WHAT I NEED."',
      "MORE PEOPLE READY TO BUY.",
    ],
  },
]

export default function MakeItSellSection() {
  return (
    <section
      aria-labelledby="make-it-sell-heading"
      className="w-full flex flex-col items-center justify-center text-white uppercase"
      style={{
        gap: "clamp(48px, 7.813vw, 100px)",
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(64px, 10.703vw, 137px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
      }}
    >
      <h2
        id="make-it-sell-heading"
        className="az-blur text-center w-full shrink-0"
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
        MAKE IT SELL.
      </h2>

      <div
        className="w-full flex flex-col md:flex-row items-stretch"
        style={{ gap: "clamp(16px, 2.578vw, 33px)" }}
      >
        {cards.map((card, i) => (
          <article
            key={i}
            className="az-tilt lift flex flex-col items-start justify-between w-full md:flex-1 overflow-hidden"
            style={{
              "--az-delay": `${i * 0.12}s`,
              background: cardGradient,
              borderRadius: "clamp(16px, 2.344vw, 30px)",
              padding:
                "clamp(16px, 1.875vw, 25px) clamp(16px, 1.875vw, 24px)",
              minHeight: "clamp(260px, 33.52vw, 429px)",
            } as React.CSSProperties}
          >
            <p
              style={{
                fontFamily:
                  '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                fontWeight: 500,
                fontSize: "clamp(12px, 1.25vw, 16px)",
                lineHeight: "normal",
                fontVariationSettings: '"wdth" 100',
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                fontFamily:
                  '"Instrument Sans:Bold", "Instrument Sans", sans-serif',
                fontWeight: 700,
                fontSize: "clamp(15px, 1.5625vw, 20px)",
                lineHeight: 1.35,
                fontVariationSettings: '"wdth" 100',
              }}
            >
              {card.body.map((line, j) => (
                <span key={j}>
                  {line}
                  {j < card.body.length - 1 && <br />}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
