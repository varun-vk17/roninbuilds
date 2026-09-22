import { Link } from "react-router-dom"

export default function DesignsPage() {
  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#050505",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px clamp(16px, 5vw, 80px)",
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(5,5,5,0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display, "Monument Extended", sans-serif)',
            fontWeight: 800,
            fontSize: "clamp(16px, 4vw, 20px)",
            color: "white",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          RONIN
        </Link>

        <Link
          to="/"
          style={{
            fontFamily: '"Instrument Sans:Medium", sans-serif',
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.5)",
            textDecoration: "none",
            textTransform: "uppercase",
            transition: "color 0.2s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
        >
          ← Back to Home
        </Link>
      </nav>

      {/* ── HEADER & SUBHEADING ── */}
      <section
        style={{
          padding: "clamp(40px, 8vw, 100px) clamp(16px, 5vw, 80px) clamp(28px, 4vw, 60px)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: '"Instrument Sans:Medium", sans-serif',
            fontSize: "10px",
            letterSpacing: "0.22em",
            color: "rgb(0,81,247)",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontWeight: 600,
          }}
        >
          OUR DESIGNS & PORTFOLIO
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-display, "Monument Extended", sans-serif)',
            fontWeight: 800,
            fontSize: "clamp(34px, 8.5vw, 96px)",
            lineHeight: 0.95,
            margin: "0 0 20px",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
            wordBreak: "break-word",
          }}
        >
          OUR WORK
        </h1>

        <p
          style={{
            fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
            fontSize: "clamp(15px, 1.6vw, 22px)",
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: 0,
          }}
        >
          A look into how we transform raw businesses into market-defining revenue engines.
        </p>
      </section>

      {/* ── SELECTED WORK & 3 IMAGES ── */}
      <section
        style={{
          padding: "0 clamp(16px, 5vw, 80px) clamp(48px, 8vw, 100px)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: "16px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display, "Monument Extended", sans-serif)',
              fontWeight: 800,
              fontSize: "clamp(16px, 2.5vw, 28px)",
              letterSpacing: "0.02em",
              margin: 0,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            KV BUILDERS
          </h2>
          <span
            style={{
              fontFamily: '"Instrument Sans:Medium", sans-serif',
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
            }}
          >
            3 IMAGES SHOWN
          </span>
        </div>

        {/* 3 Images Stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 4vw, 48px)",
            marginBottom: "clamp(36px, 6vw, 80px)",
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              borderRadius: "clamp(12px, 1.5vw, 24px)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0a0a0a",
            }}
          >
            <img
              src="/portfolio-meridian.png"
              alt="KV Builders Overview"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "750px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* Image 2 & 3 side by side on desktop, stacked on mobile */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
              gap: "clamp(20px, 4vw, 48px)",
            }}
          >
            <div
              style={{
                borderRadius: "clamp(12px, 1.5vw, 24px)",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0a0a0a",
              }}
            >
              <img
                src="/portfolio-ember.png"
                alt="KV Builders Architecture & Experience"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "260px",
                  maxHeight: "500px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              style={{
                borderRadius: "clamp(12px, 1.5vw, 24px)",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0a0a0a",
              }}
            >
              <img
                src="/portfolio-apex.png"
                alt="KV Builders Project Showcase"
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "260px",
                  maxHeight: "500px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── SMALL STORY / DESCRIPTION ── */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "clamp(16px, 2vw, 24px)",
            padding: "clamp(20px, 5vw, 56px)",
          }}
        >
          <div
            style={{
              fontFamily: '"Instrument Sans:Medium", sans-serif',
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgb(0,81,247)",
              textTransform: "uppercase",
              marginBottom: "14px",
              fontWeight: 600,
            }}
          >
            PROJECT STORY
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display, "Monument Extended", sans-serif)',
              fontWeight: 800,
              fontSize: "clamp(18px, 3vw, 32px)",
              lineHeight: 1.25,
              margin: "0 0 20px",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            BUILDING A DIGITAL EXPERIENCE THAT FEELS LIKE HOME
          </h3>

          <p
            style={{
              fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              margin: "0 0 20px",
            }}
          >
            KV Builders is built around more than constructing houses. The idea was to create a digital experience that communicates warmth, trust and the feeling of coming home before a visitor ever starts exploring the projects.
          </p>

          <p
            style={{
              fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
              fontSize: "clamp(14px, 1.1vw, 17px)",
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            We used immersive architecture, warm imagery, expressive typography and a simple narrative structure to turn the website into an experience rather than a traditional construction company brochure.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px clamp(16px, 5vw, 80px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
          background: "#030303",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display, "Monument Extended", sans-serif)',
            fontWeight: 800,
            fontSize: "15px",
            color: "rgba(255,255,255,0.4)",
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          RONIN
        </Link>
        <span
          style={{
            fontFamily: '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontSize: "10px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          A REVENUE-BASED CREATIVE STUDIO
        </span>
      </footer>
    </div>
  )
}
