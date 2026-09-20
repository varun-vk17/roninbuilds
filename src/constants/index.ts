// ─── Design tokens ──────────────────────────────────────────────────────────

export const gradient =
  "linear-gradient(-28.222638400066074deg, rgb(0, 81, 247) 40.902%, rgb(84, 130, 224) 99.197%)"

export const cardGradient =
  "linear-gradient(158.43417944645938deg, rgb(94, 164, 224) 1.8105%, rgb(0, 81, 247) 35.839%)"

// Alias for components that use the name "cardBg"
export const cardBg = cardGradient

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "The System", href: "#revenue-system" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  q: string
  a: string
}

export const faqs: FaqItem[] = [
  {
    q: "What exactly do I get in 7 days?",
    a: "The full Revenue System — brand positioning, offer design, narrative copywriting, and a conversion-focused landing page. Four deliverables, one sprint, one price.",
  },
  {
    q: "Why only $499?",
    a: "We keep it focused. No bloated retainers, no endless discovery calls. One sprint, one output, one fixed price. It's designed to be the easiest yes you make this year.",
  },
  {
    q: "Do I need to prepare anything before we start?",
    a: "Just a short intake form. We ask about your business, your audience, and what's not working right now. That's it — we handle everything else from there.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We do one round of revisions after delivery. Our work is strategy-led, so we explain every decision. Most clients don't need changes because they understand the thinking.",
  },
  {
    q: "Is this a template or custom work?",
    a: "Fully custom. Everything is built from scratch around your business, your market, and what makes you different. No drag-and-drop, no recycled copy.",
  },
  {
    q: "Who is this NOT for?",
    a: "If you need a 40-page brand bible, a 6-month content strategy, or a full e-commerce build — this isn't it. The Revenue System is a focused sprint for one clear problem.",
  },
]

// ─── Reviews ─────────────────────────────────────────────────────────────────

export interface Review {
  name: string
  role: string
  quote: string
  stars: number
  img: string
}

export const reviews: Review[] = [
  {
    name: "Marcus T.",
    role: "Founder, Selano",
    quote:
      "I had a great product and zero traction. Seven days later I had a page that actually explained what I was selling. First week live — 3 paying customers.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Priya S.",
    role: "Brand Lead, Lumevo",
    quote:
      "The positioning work alone was worth ten times what we paid. We had been explaining ourselves wrong for two years. StoryZen fixed it in a week.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Jordan K.",
    role: "Solo founder",
    quote:
      "I was skeptical about the 7-day timeline but they actually delivered everything on day 7. The copy is sharper than anything I could have written in 6 months.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  {
    name: "Amara O.",
    role: "CEO, Fieldline",
    quote:
      "The client portal made the whole process feel premium. I could see progress every day and leave notes. No back-and-forth email chains. Just results.",
    stars: 5,
    img: "https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?w=80&h=80&fit=crop&auto=format",
  },
]

// ─── Font helpers (shared inline-style fragments) ────────────────────────────

export const fontMonument = {
  fontFamily:
    '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
  fontWeight: 800,
  fontStyle: "normal" as const,
}

export const fontInstrumentRegular = {
  fontFamily:
    '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
  fontWeight: 400,
  fontVariationSettings: '"wdth" 100',
}

export const fontInstrumentMedium = {
  fontFamily:
    '"Instrument Sans:Medium", "Instrument Sans", sans-serif',
  fontWeight: 500,
  fontVariationSettings: '"wdth" 100',
}

export const fontInstrumentSemiBold = {
  fontFamily:
    '"Instrument Sans:SemiBold", "Instrument Sans", sans-serif',
  fontWeight: 600,
  fontVariationSettings: '"wdth" 100',
}

export const fontInstrumentBold = {
  fontFamily:
    '"Instrument Sans:Bold", "Instrument Sans", sans-serif',
  fontWeight: 700,
  fontVariationSettings: '"wdth" 100',
}

export const fontDmSansRegular = {
  fontFamily: '"DM Sans:Regular", "DM Sans", sans-serif',
  fontWeight: 400,
  fontVariationSettings: '"opsz" 14',
}

export const fontDmSansMedium = {
  fontFamily: '"DM Sans:Medium", "DM Sans", sans-serif',
  fontWeight: 500,
  fontVariationSettings: '"opsz" 14',
}
