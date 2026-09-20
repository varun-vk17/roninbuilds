export default function FadeTransition() {
  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{
        height: "clamp(180px, 25vw, 320px)",
        background: "black",
      }}
    />
  )
}

