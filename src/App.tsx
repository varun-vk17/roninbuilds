import { useState, useEffect, useRef } from "react"
import { Routes, Route } from "react-router-dom"
import IntroScreen from "@/components/IntroScreen"
import HeroSection from "@/components/HeroSection"
import FadeTransition from "@/components/FadeTransition"
import ProblemSection from "@/components/ProblemSection"
import ThinkSection from "@/components/ThinkSection"
import MakeItSellSection from "@/components/MakeItSellSection"
import RevenueSystemSection from "@/components/RevenueSystemSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ReviewsSection from "@/components/ReviewsSection"
import WeWorkWithSection from "@/components/WeWorkWithSection"
import FAQSection from "@/components/FAQSection"
import FinalCTASection from "@/components/FinalCTASection"
import Footer from "@/components/Footer"
import ApplyPage from "@/pages/ApplyPage"
import DesignsPage from "@/pages/DesignsPage"

// Selector for all scroll-animation targets
const AZ_SELECTOR =
  ".az-up,.az-left,.az-right,.az-fade,.az-scale,.az-blur,.az-tilt"

function LandingPage() {
  const [introDone, setIntroDone] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Hero cascade: trigger when intro finishes
  useEffect(() => {
    if (!introDone) return
    heroRef.current?.classList.add("hero-ready")
  }, [introDone])

  // Global scroll observer — adds az-visible to any element with an az-* animation class
  useEffect(() => {
    if (!introDone) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("az-visible")
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    )

    document.querySelectorAll(AZ_SELECTOR).forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [introDone])

  return (
    <>
      {!introDone && <IntroScreen onDone={() => setIntroDone(true)} />}
      <div
        ref={heroRef}
        className="bg-black w-full"
        style={{
          opacity: introDone ? 1 : 0,
          transition: introDone ? "opacity 0.5s ease" : "none",
        }}
      >
        <main>
          <HeroSection />
          <FadeTransition />
          <ProblemSection />
          <ThinkSection />
          <MakeItSellSection />
          <RevenueSystemSection />
          <HowItWorksSection />
          <ReviewsSection />
          <WeWorkWithSection />
          <FAQSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply" element={<ApplyPage />} />
      <Route path="/designs" element={<DesignsPage />} />
    </Routes>
  )
}

