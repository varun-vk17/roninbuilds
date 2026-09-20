import { useState, useEffect, useRef } from "react"

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "SYSTEM", href: "#revenue-system", active: true },
    { label: "HOW IT WORKS", href: "#how-it-works", active: false },
    { label: "PRICING", href: "#pricing", active: false },
    { label: "FAQ", href: "#faq", active: false },
  ]

  const handleScrollTo = (href: string) => {
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      ref={heroRef}
      className="relative w-full h-[100svh] overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 30% 80%, rgba(0,0,0,0.7) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,0,0,0.5) 0%, transparent 50%)"
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP LAYOUT (md:block / md:flex - EXACTLY as originally configured)    */}
      {/* ========================================================================= */}

      {/* Desktop Top Navigation */}
      <nav className="absolute top-6 right-16 z-20 hidden md:flex items-center gap-8">
        {navLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="text-white hover:text-white/80 no-underline text-xs tracking-widest relative"
            style={{
              fontFamily: '"Instrument Sans:Medium", sans-serif',
              textTransform: "uppercase"
            }}
            onClick={(e) => {
              e.preventDefault()
              handleScrollTo(link.href)
            }}
          >
            {link.label}
            {link.active && (
              <span className="absolute -bottom-2 left-0 w-full border-b-[1px] border-dotted border-white/60" />
            )}
          </a>
        ))}
      </nav>

      {/* Desktop Right Edge Tab */}
      <div 
        className="absolute top-0 right-0 h-48 w-12 bg-[#F3F0E6] hidden md:flex items-center justify-center z-20"
        style={{
          borderBottomLeftRadius: "8px"
        }}
      >
        <div 
          className="transform -rotate-90 whitespace-nowrap text-[10px] tracking-widest text-black/80 font-bold"
          style={{ fontFamily: '"Instrument Sans:Bold", sans-serif' }}
        >
          RONIN • 7-DAY SPRINT
        </div>
      </div>

      {/* Desktop Top Left: Overline & Wordmark */}
      <div className="absolute top-16 left-12 z-20 hidden md:block">
        <p 
          className="text-white text-[11px] tracking-[0.2em] uppercase mb-1 h-item h-d1"
          style={{ fontFamily: '"Instrument Sans:Medium", sans-serif' }}
        >
          A REVENUE-BASED CREATIVE STUDIO.
        </p>
        <h1 
          className="text-white leading-none tracking-tight h-item h-wordmark h-d2"
          style={{ 
            fontFamily: '"Monument Extended:Ultrabold", sans-serif',
            fontSize: "clamp(80px, 18vw, 240px)",
            marginLeft: "-6px",
            textShadow: "0 2px 40px rgba(0,0,0,0.4)"
          }}
        >
          RONIN
        </h1>
      </div>

      {/* Desktop Middle Right: Descriptor Paragraph */}
      <div className="absolute top-[45%] right-24 z-20 max-w-[420px] text-left h-item h-d3 hidden md:block">
        <p 
          className="text-white text-2xl leading-snug"
          style={{ 
            fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
            fontWeight: 400,
            textShadow: "0 1px 20px rgba(0,0,0,0.6)"
          }}
        >
          We turn what you&apos;ve built into something people want to buy. Brand position · Offer design · Copy · Landing page.
        </p>
      </div>

      {/* Desktop Bottom Left: Simple Blue CTA */}
      <div className="absolute bottom-16 left-12 z-20 h-item h-d4 hidden md:block">
        <a
          href="#pricing"
          className="btn-glow no-underline flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault()
            handleScrollTo("#pricing")
          }}
          style={{
            background: "rgb(0, 81, 247)",
            borderRadius: "100px",
            padding: "clamp(12px,1vw,16px) clamp(28px,2.5vw,40px)",
            fontFamily: '"DM Sans:Medium", "DM Sans", sans-serif',
            fontSize: "clamp(13px, 1.1vw, 16px)",
            fontWeight: 600,
            color: "white",
            whiteSpace: "nowrap",
            boxShadow: "0 0 32px rgba(0,81,247,0.5), 0 4px 16px rgba(0,0,0,0.3)",
            letterSpacing: "-0.01em",
          }}
        >
          Start the sprint →
        </a>
      </div>

      {/* Desktop Bottom Center: Scroll to continue */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-2 cursor-pointer h-item h-d5 opacity-80 hover:opacity-100 transition-opacity"
        onClick={() => handleScrollTo("#revenue-system")}
      >
        <div className="w-5 h-5 rounded-full border border-white/50 flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
        <span 
          className="text-white text-[10px] tracking-widest uppercase"
          style={{ fontFamily: '"Instrument Sans:Medium", sans-serif' }}
        >
          Scroll to continue
        </span>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE LAYOUT (< md) - STRUCTURE MATCHES REFERENCE IMAGE                  */}
      {/* ========================================================================= */}
      <div className="flex md:hidden flex-col justify-between h-full w-full px-5 pt-6 pb-7 relative z-20">
        
        {/* Row 1: Top Bar with Menu Pill */}
        <div className="flex justify-end items-center h-item h-d1">
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="px-4 py-1.5 rounded-full border border-dashed border-white/60 text-white text-[11px] tracking-widest flex items-center gap-2 font-medium active:scale-95 transition-all bg-black/20 backdrop-blur-xs cursor-pointer"
            style={{ fontFamily: '"Instrument Sans:Medium", sans-serif' }}
            aria-label="Toggle navigation menu"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            MENU
          </button>
        </div>

        {/* Mobile Dropdown Menu (overlay) */}
        {mobileMenuOpen && (
          <div className="absolute top-16 right-5 z-30 bg-black/90 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 min-w-[200px] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-[10px] tracking-widest uppercase text-white/50 font-bold">Navigation</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-white hover:text-white/80 no-underline text-xs tracking-wider uppercase font-medium"
                style={{ fontFamily: '"Instrument Sans:Medium", sans-serif' }}
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10">
              <div 
                className="text-[10px] tracking-widest uppercase text-amber-300/90 font-bold"
                style={{ fontFamily: '"Instrument Sans:Bold", sans-serif' }}
              >
                RONIN • 7-DAY SPRINT
              </div>
            </div>
          </div>
        )}

        {/* Upper Block: Overline, Huge Headline, Right-Aligned Descriptor */}
        <div className="flex flex-col mt-2">
          {/* Overline: Right-aligned above RONIN like 'MADE FOR MUGS. BUILT FOR TABLES.' */}
          <div className="text-right mb-1.5 h-item h-d1">
            <p 
              className="text-white text-[10px] tracking-[0.16em] uppercase font-bold"
              style={{ fontFamily: '"Instrument Sans:Bold", sans-serif' }}
            >
              A REVENUE-BASED CREATIVE STUDIO.
            </p>
          </div>

          {/* Main Title: Full-width massive RONIN */}
          <h1 
            className="text-white leading-[0.85] tracking-tight uppercase h-item h-wordmark h-d2"
            style={{ 
              fontFamily: '"Monument Extended:Ultrabold", sans-serif',
              fontSize: "clamp(58px, 18.5vw, 84px)",
              marginLeft: "-3px",
              textShadow: "0 2px 30px rgba(0,0,0,0.5)"
            }}
          >
            RONIN
          </h1>

          {/* Descriptor: Floated to right, left-aligned within block, exactly like reference image */}
          <div className="ml-auto max-w-[245px] sm:max-w-[280px] mt-4 text-left h-item h-d3">
            <p 
              className="text-white text-[14px] sm:text-[15px] leading-snug font-normal"
              style={{ 
                fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                textShadow: "0 1px 16px rgba(0,0,0,0.8)",
                color: "rgba(255, 255, 255, 0.92)"
              }}
            >
              We turn what you&apos;ve built into something people want to buy. Brand position · Offer design · Copy · Landing page.
            </p>
          </div>
        </div>

        {/* Middle Visual Spacer: Let the background center visual breathe freely */}
        <div className="flex-1" />

        {/* Bottom Row: CTA on Left, Scroll to Continue on Right */}
        <div className="flex items-end justify-between gap-3 pt-3 h-item h-d4">
          {/* Bottom Left: Only our CTA button */}
          <a
            href="#pricing"
            className="btn-glow no-underline flex items-center justify-center shrink-0"
            onClick={(e) => {
              e.preventDefault()
              handleScrollTo("#pricing")
            }}
            style={{
              background: "rgb(0, 81, 247)",
              borderRadius: "100px",
              padding: "12px 22px",
              fontFamily: '"DM Sans:Medium", "DM Sans", sans-serif',
              fontSize: "14px",
              fontWeight: 600,
              color: "white",
              whiteSpace: "nowrap",
              boxShadow: "0 0 24px rgba(0,81,247,0.5), 0 4px 14px rgba(0,0,0,0.3)",
              letterSpacing: "-0.01em",
            }}
          >
            Start the sprint →
          </a>

          {/* Bottom Right: Scroll to continue matching reference image */}
          <div 
            className="flex items-center gap-2 cursor-pointer pb-1.5 opacity-85 hover:opacity-100 transition-opacity shrink-0"
            onClick={() => handleScrollTo("#revenue-system")}
          >
            <span 
              className="text-white text-[9px] tracking-wider uppercase font-semibold text-right"
              style={{ fontFamily: '"Instrument Sans:Medium", sans-serif' }}
            >
              SCROLL TO CONTINUE
            </span>
            <div className="w-5 h-5 rounded-full border border-dashed border-white/60 flex items-center justify-center shrink-0">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

      </div>

    </header>
  )
}
