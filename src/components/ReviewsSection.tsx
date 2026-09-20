import { reviews, cardBg } from "@/constants"

export default function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="w-full flex flex-col items-center"
      style={{
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(40px, 6.25vw, 80px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
        gap: "clamp(40px, 5.469vw, 70px)",
      }}
    >
      {/* Header */}
      <div
        className="w-full flex flex-col md:flex-row md:items-end justify-between"
        style={{ gap: "clamp(12px, 1.563vw, 20px)" }}
      >
        <h2
          id="reviews-heading"
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
          WHAT CLIENTS SAY
        </h2>
        <p
          className="az-fade"
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(13px, 1.094vw, 14px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.35)",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: "300px",
            textAlign: "right" as const,
          }}
        >
          Real results from the founding sprint.
        </p>
      </div>

      {/* Marquee */}
      <div
        className="az-fade w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          role="list"
          aria-label="Client testimonials"
          style={{
            display: "flex",
            gap: "clamp(12px, 1.563vw, 20px)",
            width: "max-content",
            animation: "marquee 32s linear infinite",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {[...reviews, ...reviews].map((r, i) => (
            <article
              key={i}
              role="listitem"
              className="flex flex-col justify-between shrink-0"
              style={{
                width: "clamp(280px, 30vw, 380px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "clamp(16px, 1.563vw, 20px)",
                background: "rgba(255,255,255,0.02)",
                padding: "clamp(24px, 2.344vw, 30px)",
                gap: "clamp(20px, 2.344vw, 30px)",
              }}
            >
              {/* Stars */}
              <div
                className="flex items-center"
                style={{ gap: "4px" }}
                aria-label={`${r.stars} out of 5 stars`}
              >
                {Array.from({ length: r.stars }).map((_, s) => (
                  <svg
                    key={s}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 1L8.545 5.18H13L9.5 7.82L10.855 12L7 9.36L3.145 12L4.5 7.82L1 5.18H5.455L7 1Z"
                      fill="white"
                      fillOpacity="0.9"
                    />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily:
                    '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: "clamp(13px, 1.094vw, 14px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.7,
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {`"${r.quote}"`}
              </blockquote>

              {/* Attribution */}
              <footer
                className="flex items-center"
                style={{
                  gap: "clamp(10px, 1.094vw, 14px)",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                  marginLeft: "clamp(-24px, -2.344vw, -30px)",
                  marginRight: "clamp(-24px, -2.344vw, -30px)",
                  marginBottom: "clamp(-24px, -2.344vw, -30px)",
                  padding:
                    "clamp(14px, 1.563vw, 18px) clamp(24px, 2.344vw, 30px)",
                  background: cardBg,
                  borderRadius:
                    "0 0 clamp(14px, 1.563vw, 18px) clamp(14px, 1.563vw, 18px)",
                }}
              >
                <img
                  src={r.img}
                  alt={`Photo of ${r.name}`}
                  className="shrink-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(255,255,255,0.3)",
                  }}
                />
                <div className="flex flex-col" style={{ gap: "2px" }}>
                  <cite
                    style={{
                      fontFamily:
                        '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
                      fontWeight: 600,
                      fontSize: "clamp(13px, 1.094vw, 14px)",
                      fontVariationSettings: '"wdth" 100',
                      color: "white",
                      fontStyle: "normal",
                      lineHeight: "normal",
                    }}
                  >
                    {r.name}
                  </cite>
                  <p
                    style={{
                      fontFamily:
                        '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "10px",
                      fontVariationSettings: '"wdth" 100',
                      color: "rgba(255,255,255,0.6)",
                      margin: 0,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {r.role}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
