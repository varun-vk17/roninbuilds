import imgFounders from "@/imports/Frame75/d86d665f27674f6799cb1a2dedf86e0d54d0d0c4.png"
import imgBrands from "@/imports/Frame75/080051224697eba7e47ffe23872431a54649ac06.png"
import imgAnd from "@/imports/Frame75/30b628f1fb71bfa217290fdd976a19b7cda38f3a.png"
import { cardGradient } from "@/constants"

const cardStyle = {
  backgroundImage: cardGradient,
  borderRadius: "clamp(16px, 2.344vw, 30px)",
  height: "clamp(260px, 33.52vw, 429px)",
  padding: "clamp(16px, 1.953vw, 25px) clamp(16px, 1.875vw, 24px)",
  overflow: "hidden" as const,
}

const illSize = {
  width: "clamp(120px, 17.656vw, 226px)",
  height: "clamp(110px, 13.906vw, 178px)",
}

const labelStyle: React.CSSProperties = {
  fontFamily:
    '"Monument Extended:Ultrabold", "Big Shoulders Display", Impact, sans-serif',
  fontWeight: 800,
  fontStyle: "normal",
  fontSize: "clamp(14px, 1.5625vw, 20px)",
  lineHeight: 1.35,
  color: "white",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
}

export default function WeWorkWithSection() {
  return (
    <section
      aria-labelledby="we-work-with-heading"
      className="w-full flex flex-col items-center"
      style={{
        gap: "clamp(48px, 7.813vw, 100px)",
        paddingTop: "clamp(64px, 11.172vw, 143px)",
        paddingBottom: "clamp(64px, 10.703vw, 137px)",
        paddingLeft: "clamp(20px, 7.813vw, 100px)",
        paddingRight: "clamp(20px, 7.813vw, 100px)",
      }}
    >
      <h2
        id="we-work-with-heading"
        className="az-blur text-white text-center uppercase w-full shrink-0"
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
        WE WORK WITH
      </h2>

      <div
        className="w-full flex flex-col md:flex-row items-stretch"
        style={{ gap: "clamp(16px, 2.578vw, 33px)" }}
      >
        {/* FOUNDERS */}
        <div
          className="az-left lift flex-1 flex flex-col items-center justify-center"
          style={cardStyle}
        >
          <div style={{ transform: "scaleY(-1) rotate(180deg)" }}>
            <div className="relative shrink-0" style={illSize}>
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgFounders}
                loading="lazy"
              />
            </div>
          </div>
          <p style={labelStyle}>FOUNDERS</p>
        </div>

        {/* BRANDS */}
        <div
          className="az-scale lift flex-1 flex flex-col items-center justify-center"
          style={
            { ...cardStyle, "--az-delay": "0.12s" } as React.CSSProperties
          }
        >
          <div className="relative shrink-0" style={illSize}>
            <img
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              src={imgBrands}
              loading="lazy"
            />
          </div>
          <p style={labelStyle}>BRANDS</p>
        </div>

        {/* AND... */}
        <div
          className="az-right lift flex-1 flex flex-col items-center justify-end"
          style={{ ...cardStyle, gap: "clamp(16px, 2.188vw, 28px)" }}
        >
          <div
            className="flex flex-col items-center"
            style={{ gap: "clamp(6px, 0.781vw, 10px)" }}
          >
            <div className="relative shrink-0" style={illSize}>
              <img
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgAnd}
                loading="lazy"
              />
            </div>
            <p style={labelStyle}>AND...</p>
          </div>
          <p
            className="text-center text-white lowercase"
            style={{
              fontFamily:
                '"Instrument Sans:Regular", "Instrument Sans", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(12px, 1.25vw, 16px)",
              fontVariationSettings: '"wdth" 100',
              lineHeight: "normal",
            }}
          >
            businesses that are
            <br />
            tired of buying
            <br />
            attention that doesn{"'"}t buy back.
          </p>
        </div>
      </div>
    </section>
  )
}
