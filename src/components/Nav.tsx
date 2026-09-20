import { useState } from "react"
import { gradient, navLinks } from "@/constants"

function handleNavClick(href: string, setOpen?: (v: boolean) => void) {
  setOpen?.(false)
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-end w-full">
        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center"
          aria-label="Primary navigation"
          style={{ gap: "clamp(24px, 3.75vw, 48px)" }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white no-underline shrink-0"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(href)
              }}
              style={{
                fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                fontSize: "clamp(14px, 1.094vw, 14px)",
                fontVariationSettings: '"opsz" 14',
                lineHeight: "normal",
                whiteSpace: "nowrap",
                color: "rgba(255,255,255,0.8)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
              }
            >
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#pricing")
            }}
            className="btn-glow no-underline flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "40px",
              padding: "7px clamp(16px, 1.563vw, 20px)",
              fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
              fontSize: "clamp(13px, 1.094vw, 14px)",
              fontVariationSettings: '"opsz" 14',
              color: "white",
              whiteSpace: "nowrap",
            }}
          >
            Start the sprint →
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          id="nav-menu-open"
          className="flex md:hidden flex-col justify-center items-end gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="block w-6 h-[2px] bg-white rounded-full" />
          <span className="block w-6 h-[2px] bg-white rounded-full" />
          <span className="block w-4 h-[2px] bg-white rounded-full" />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-10"
          style={{ background: gradient }}
        >
          <button
            id="nav-menu-close"
            className="absolute top-6 right-6 bg-transparent border-0 cursor-pointer flex flex-col gap-0"
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <span
              className="block w-6 h-[2px] bg-white rounded-full"
              style={{ transform: "rotate(45deg) translateY(1px)" }}
            />
            <span
              className="block w-6 h-[2px] bg-white rounded-full"
              style={{ transform: "rotate(-45deg) translateY(-1px)" }}
            />
          </button>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-white no-underline"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(href, setOpen)
              }}
              style={{
                fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                fontSize: "36px",
                fontVariationSettings: '"opsz" 14',
                lineHeight: "normal",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#pricing", setOpen)
            }}
            className="no-underline"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "40px",
              padding: "12px 32px",
              fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
              fontSize: "20px",
              fontVariationSettings: '"opsz" 14',
              color: "white",
            }}
          >
            Start the sprint →
          </a>
        </div>
      )}
    </>
  )
}
