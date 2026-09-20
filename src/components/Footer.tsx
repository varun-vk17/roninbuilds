export default function Footer() {
  const footerNavGroups = [
    {
      heading: "WORK",
      links: [
        { label: "Revenue System™", href: "#revenue-system" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      heading: "COMPANY",
      links: [
        { label: "We Work With", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "Start the Sprint", href: "#pricing" },
      ],
    },
  ]

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer
      className="w-full flex flex-col"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        paddingTop: "clamp(40px, 4.688vw, 60px)",
        paddingBottom: "clamp(32px, 3.75vw, 48px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
        gap: "clamp(40px, 4.688vw, 60px)",
      }}
    >
      {/* Top row */}
      <div
        className="w-full flex flex-col md:flex-row md:items-start justify-between"
        style={{ gap: "clamp(32px, 3.75vw, 48px)" }}
      >
        {/* Brand */}
        <div
          className="az-up flex flex-col"
          style={{ gap: "clamp(10px, 1.094vw, 14px)" }}
        >
          <p
            style={{
              fontFamily:
                '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
              fontWeight: 800,
              fontStyle: "normal",
              fontSize: "clamp(18px, 1.875vw, 24px)",
              color: "white",
              margin: 0,
              lineHeight: "normal",
            }}
          >
            RONIN
          </p>
          <p
            style={{
              fontFamily:
                '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(12px, 0.938vw, 12px)",
              fontVariationSettings: '"wdth" 100',
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.6,
              maxWidth: "240px",
              margin: 0,
            }}
          >
            A revenue-based creative studio. We build the system behind what
            sells.
          </p>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col sm:flex-row"
          style={{ gap: "clamp(32px, 5.469vw, 70px)" }}
        >
          {footerNavGroups.map(({ heading, links }) => (
            <div
              key={heading}
              className="flex flex-col"
              style={{ gap: "clamp(12px, 1.25vw, 16px)" }}
            >
              <p
                style={{
                  fontFamily:
                    '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: "clamp(10px, 0.781vw, 10px)",
                  fontVariationSettings: '"wdth" 100',
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {heading}
              </p>
              <div
                className="flex flex-col"
                style={{ gap: "clamp(8px, 0.781vw, 10px)" }}
              >
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="no-underline"
                    onClick={href !== "#" ? handleClick(href) : undefined}
                    style={{
                      fontFamily:
                        '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: "clamp(13px, 1.094vw, 14px)",
                      fontVariationSettings: '"wdth" 100',
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: "normal",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                    }
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom row */}
      <div
        className="w-full flex flex-col sm:flex-row items-center justify-between"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "clamp(20px, 2.344vw, 30px)",
          gap: "clamp(8px, 0.938vw, 12px)",
        }}
      >
        <p
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(11px, 0.781vw, 10px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.2)",
            margin: 0,
          }}
        >
          © 2026 STORYZEN. All rights reserved.
        </p>
        <p
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(11px, 0.781vw, 10px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.2)",
            margin: 0,
          }}
        >
          Built in 7 days. Sells forever.
        </p>
      </div>
    </footer>
  )
}
