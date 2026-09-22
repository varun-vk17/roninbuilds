import { useState } from "react"
import { Link } from "react-router-dom"

type FormData = {
  name: string
  email: string
  product: string
  category: string
  revenue: string
  bottleneck: string
  goal: string
}

const CATEGORIES = ["SaaS / Software", "E-commerce", "Coaching / Consulting", "Agency", "Creator / Personal Brand", "Other"]
const REVENUE_RANGES = ["Pre-revenue", "$0 – $1k/mo", "$1k – $5k/mo", "$5k – $15k/mo", "$15k – $50k/mo", "$50k+/mo"]
const BOTTLENECKS = [
  { icon: "🎯", label: "Unclear positioning", sub: "People don't get what I do" },
  { icon: "✍️", label: "Weak copy", sub: "Visitors don't convert" },
  { icon: "🏗️", label: "No landing page", sub: "Nothing to send traffic to" },
  { icon: "🔁", label: "Offer confusion", sub: "Can't explain what I sell" },
]

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<"forward" | "back">("forward")
  const [animating, setAnimating] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    product: "",
    category: "",
    revenue: "",
    bottleneck: "",
    goal: "",
  })

  const TOTAL_STEPS = 4

  const goTo = (next: number, dir: "forward" | "back") => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setStep(next)
      setAnimating(false)
    }, 320)
  }

  const next = () => { if (step < TOTAL_STEPS) goTo(step + 1, "forward") }
  const back = () => { if (step > 1) goTo(step - 1, "back") }

  const canNext = () => {
    if (step === 1) return form.name.trim() && form.email.trim()
    if (step === 2) return form.product.trim() && form.category
    if (step === 3) return form.revenue && form.bottleneck
    if (step === 4) return form.goal.trim().length > 10
    return false
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "12px",
    color: "white",
    fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
    fontSize: "16px",
    padding: "14px 18px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s ease, background 0.2s ease",
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: '"Instrument Sans:Medium", sans-serif',
    fontSize: "11px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.45)",
    marginBottom: "8px",
    display: "block",
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100svh",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG glow */}
        <div style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,81,247,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }} />
        <div style={{
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "rgba(0,81,247,0.15)",
          border: "1px solid rgba(0,81,247,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "32px",
          fontSize: "28px",
        }}>✓</div>
        <h1 style={{
          fontFamily: 'var(--font-display, "Big Shoulders Display", "Bebas Neue", Impact, sans-serif)',
          fontWeight: 900,
          fontSize: "clamp(42px, 8vw, 80px)",
          color: "white",
          margin: "0 0 16px",
          lineHeight: 1,
        }}>YOU'RE IN.</h1>
        <p style={{
          fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
          color: "rgba(255,255,255,0.55)",
          fontSize: "16px",
          maxWidth: "420px",
          lineHeight: 1.7,
          margin: "0 0 40px",
        }}>
          We've got your application, {form.name.split(" ")[0]}. Expect a message from us within 24 hours. We only take 5 founding clients — your spot is tentatively held.
        </p>
        <Link
          to="/"
          style={{
            background: "rgb(0,81,247)",
            borderRadius: "100px",
            padding: "14px 36px",
            fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
            fontSize: "15px",
            fontWeight: 600,
            color: "white",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          ← Back to RONIN
        </Link>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100svh",
        background: "#050505",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,81,247,0.1) 0%, transparent 65%)",
        top: "-200px",
        right: "-200px",
        pointerEvents: "none",
      }} />

      {/* Top bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px clamp(20px,5vw,60px)",
        position: "relative",
        zIndex: 10,
      }}>
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display, "Big Shoulders Display", "Bebas Neue", Impact, sans-serif)',
            fontWeight: 900,
            fontSize: "22px",
            color: "white",
            textDecoration: "none",
            letterSpacing: "0.04em",
          }}
        >
          RONIN
        </Link>

        {/* Step counter */}
        <div style={{
          fontFamily: '"Instrument Sans:Medium", sans-serif',
          fontSize: "11px",
          letterSpacing: "0.12em",
          color: "rgba(255,255,255,0.35)",
          textTransform: "uppercase",
        }}>
          {step} / {TOTAL_STEPS}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", position: "relative", zIndex: 10 }}>
        <div style={{
          height: "1px",
          background: "rgb(0,81,247)",
          width: `${(step / TOTAL_STEPS) * 100}%`,
          transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "0 0 12px rgba(0,81,247,0.7)",
        }} />
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(32px,4vw,60px) clamp(20px,5vw,60px)",
        position: "relative",
      }}>
        {/* Big background step numeral */}
        <div style={{
          position: "absolute",
          fontFamily: 'var(--font-display, "Big Shoulders Display", "Bebas Neue", Impact, sans-serif)',
          fontWeight: 900,
          fontSize: "clamp(200px, 40vw, 400px)",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          right: "-2vw",
          bottom: "-0.1em",
          userSelect: "none",
          pointerEvents: "none",
          transition: "opacity 0.3s ease",
        }}>
          {step}
        </div>

        {/* Step card */}
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            position: "relative",
            zIndex: 2,
            opacity: animating ? 0 : 1,
            transform: animating
              ? direction === "forward" ? "translateY(20px)" : "translateY(-20px)"
              : "translateY(0)",
            transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Step label */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,81,247,0.12)",
            border: "1px solid rgba(0,81,247,0.25)",
            borderRadius: "40px",
            padding: "5px 14px",
            marginBottom: "28px",
          }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgb(0,81,247)", flexShrink: 0, display: "inline-block" }} />
            <span style={{
              fontFamily: '"Instrument Sans:Medium", sans-serif',
              fontSize: "10px",
              letterSpacing: "0.14em",
              color: "rgba(255,255,255,0.7)",
              textTransform: "uppercase",
            }}>
              {step === 1 && "Introductions"}
              {step === 2 && "Your Business"}
              {step === 3 && "Where You Are"}
              {step === 4 && "Your Goal"}
            </span>
          </div>

          {/* Step heading */}
          <h2 style={{
            fontFamily: 'var(--font-display, "Big Shoulders Display", "Bebas Neue", Impact, sans-serif)',
            fontWeight: 900,
            fontSize: "clamp(38px, 6vw, 64px)",
            color: "white",
            lineHeight: 1.0,
            margin: "0 0 36px",
            letterSpacing: "0.01em",
          }}>
            {step === 1 && "WHO ARE YOU?"}
            {step === 2 && "WHAT DO YOU SELL?"}
            {step === 3 && "WHERE ARE YOU NOW?"}
            {step === 4 && "WHAT'S YOUR GOAL?"}
          </h2>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={labelStyle}>Your name</label>
                <input
                  id="apply-name"
                  type="text"
                  placeholder="Alex Rivera"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,81,247,0.6)"; e.currentTarget.style.background = "rgba(0,81,247,0.06)" }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                />
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input
                  id="apply-email"
                  type="email"
                  placeholder="alex@company.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,81,247,0.6)"; e.currentTarget.style.background = "rgba(0,81,247,0.06)" }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                />
              </div>
            </div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={labelStyle}>What do you sell?</label>
                <input
                  id="apply-product"
                  type="text"
                  placeholder="e.g. Real estate developments / custom homes"
                  value={form.product}
                  onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                  style={inputStyle}
                  onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,81,247,0.6)"; e.currentTarget.style.background = "rgba(0,81,247,0.06)" }}
                  onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                />
              </div>
              <div>
                <label style={labelStyle}>Category</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))", gap: "10px" }}>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      id={`cat-${cat.replace(/\W/g, "-")}`}
                      onClick={() => setForm(f => ({ ...f, category: cat }))}
                      style={{
                        background: form.category === cat ? "rgba(0,81,247,0.18)" : "rgba(255,255,255,0.04)",
                        border: form.category === cat ? "1px solid rgba(0,81,247,0.5)" : "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                        color: form.category === cat ? "white" : "rgba(255,255,255,0.5)",
                        fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                        fontSize: "13px",
                        padding: "11px 14px",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <label style={labelStyle}>Current monthly revenue</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {REVENUE_RANGES.map(rev => (
                    <button
                      key={rev}
                      id={`rev-${rev.replace(/\W/g, "-")}`}
                      onClick={() => setForm(f => ({ ...f, revenue: rev }))}
                      style={{
                        background: form.revenue === rev ? "rgb(0,81,247)" : "rgba(255,255,255,0.04)",
                        border: form.revenue === rev ? "1px solid rgb(0,81,247)" : "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "100px",
                        color: "white",
                        fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                        fontSize: "12px",
                        padding: "8px 16px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        whiteSpace: "nowrap",
                        boxShadow: form.revenue === rev ? "0 0 20px rgba(0,81,247,0.3)" : "none",
                      }}
                    >
                      {rev}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label style={labelStyle}>Biggest bottleneck right now</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 170px), 1fr))", gap: "10px" }}>
                  {BOTTLENECKS.map(b => (
                    <button
                      key={b.label}
                      id={`bottleneck-${b.label.replace(/\W/g, "-")}`}
                      onClick={() => setForm(f => ({ ...f, bottleneck: b.label }))}
                      style={{
                        background: form.bottleneck === b.label ? "rgba(0,81,247,0.18)" : "rgba(255,255,255,0.04)",
                        border: form.bottleneck === b.label ? "1px solid rgba(0,81,247,0.5)" : "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "12px",
                        color: "white",
                        fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                        fontSize: "13px",
                        padding: "12px 14px",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontSize: "18px", marginBottom: "4px" }}>{b.icon}</div>
                      <div style={{ fontWeight: 600, marginBottom: "2px", fontSize: "13px" }}>{b.label}</div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", lineHeight: 1.3 }}>{b.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── STEP 4 ── */}
          {step === 4 && (
            <div>
              <label style={labelStyle}>Describe your goal in the next 90 days</label>
              <textarea
                id="apply-goal"
                placeholder="e.g. Get to $10k/mo from my SaaS, launch a landing page that actually converts, stop losing leads to competitors with better copy..."
                value={form.goal}
                onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}
                rows={6}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  minHeight: "140px",
                  lineHeight: 1.7,
                }}
                onFocus={e => { e.currentTarget.style.borderColor = "rgba(0,81,247,0.6)"; e.currentTarget.style.background = "rgba(0,81,247,0.06)" }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
              />
              <p style={{
                fontFamily: '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                marginTop: "10px",
                letterSpacing: "0.02em",
              }}>
                Be specific. The more we know, the better we can build your Revenue System.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px",
            gap: "12px",
          }}>
            {step > 1 ? (
              <button
                id="apply-back"
                onClick={back}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                  fontSize: "14px",
                  padding: "12px 24px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "white" }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)" }}
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {step < TOTAL_STEPS ? (
              <button
                id="apply-next"
                onClick={next}
                disabled={!canNext()}
                style={{
                  background: canNext() ? "rgb(0,81,247)" : "rgba(255,255,255,0.06)",
                  border: "none",
                  borderRadius: "100px",
                  color: canNext() ? "white" : "rgba(255,255,255,0.25)",
                  fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "13px 36px",
                  cursor: canNext() ? "pointer" : "not-allowed",
                  transition: "all 0.25s ease",
                  boxShadow: canNext() ? "0 0 28px rgba(0,81,247,0.4)" : "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Continue →
              </button>
            ) : (
              <button
                id="apply-submit"
                onClick={handleSubmit}
                disabled={!canNext()}
                style={{
                  background: canNext() ? "rgb(0,81,247)" : "rgba(255,255,255,0.06)",
                  border: "none",
                  borderRadius: "100px",
                  color: canNext() ? "white" : "rgba(255,255,255,0.25)",
                  fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "13px 36px",
                  cursor: canNext() ? "pointer" : "not-allowed",
                  transition: "all 0.25s ease",
                  boxShadow: canNext() ? "0 0 28px rgba(0,81,247,0.4)" : "none",
                  letterSpacing: "-0.01em",
                }}
              >
                Claim your spot →
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Bottom fine print */}
      <div style={{
        padding: "20px clamp(20px,5vw,60px)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        zIndex: 10,
      }}>
        <p style={{
          fontFamily: '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
          fontSize: "11px",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.05em",
          margin: 0,
          textAlign: "center",
        }}>
          RONIN • 5 FOUNDING SPOTS • $499 FLAT • 7-DAY DELIVERY
        </p>
      </div>
    </div>
  )
}
