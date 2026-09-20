import { useState, useEffect } from "react"
import { gradient } from "@/constants"

interface IntroScreenProps {
  onDone: () => void
}

export default function IntroScreen({ onDone }: IntroScreenProps) {
  const [phase, setPhase] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    // Phase 1: show tagline
    const t1 = setTimeout(() => setPhase(1), 60)
    // Phase 2: split curtains open
    const t2 = setTimeout(() => setPhase(2), 2000)
    // Done
    const t3 = setTimeout(() => onDone(), 2900)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [onDone])

  const curtainStyle = (side: "left" | "right"): React.CSSProperties => ({
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    background: "#000",
    left: side === "left" ? 0 : undefined,
    right: side === "right" ? 0 : undefined,
    transform:
      phase === 2
        ? side === "left"
          ? "translateX(-100%)"
          : "translateX(100%)"
        : "translateX(0)",
    transition:
      phase === 2 ? "transform 0.85s cubic-bezier(0.76,0,0.24,1)" : "none",
    zIndex: 2,
  })

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading StoryZen"
      style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden" }}
    >
      {/* Page shows through — curtains reveal it */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "#000",
          zIndex: 0,
        }}
      />

      {/* Left curtain */}
      <div aria-hidden="true" style={curtainStyle("left")} />
      {/* Right curtain */}
      <div aria-hidden="true" style={curtainStyle("right")} />

      {/* Center content — sits between curtains */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(10px, 1.5vw, 20px)",
          opacity: phase === 2 ? 0 : 1,
          transition: phase === 2 ? "opacity 0.3s ease" : "none",
          pointerEvents: "none",
          textAlign: "center",
          padding: "0 clamp(24px, 5vw, 60px)",
        }}
      >
        <p
          style={{
            fontFamily:
              '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
            fontWeight: 400,
            fontSize: "clamp(10px, 0.781vw, 10px)",
            fontVariationSettings: '"wdth" 100',
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            margin: 0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          A creative studio
        </p>

        <p
          style={{
            fontFamily:
              '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
            fontWeight: 800,
            fontSize: "clamp(44px, 9.5vw, 122px)",
            color: "white",
            margin: 0,
            lineHeight: 1.0,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s",
          }}
        >
          BUILT TO SELL.
        </p>

        {/* Blue underline */}
        <div
          style={{
            height: "2px",
            backgroundImage: gradient,
            transformOrigin: "center",
            width: "clamp(48px, 5vw, 64px)",
            transform: phase >= 1 ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}
        />
      </div>
    </div>
  )
}
