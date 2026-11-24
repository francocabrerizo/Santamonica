export default function Atmosphere() {
  const noise =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E"

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] mix-blend-soft-light"
        style={{ backgroundImage: `url("${noise}")` }}
      />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-[28%] h-[32rem] w-[32rem] rounded-full bg-sage opacity-[0.07] blur-[160px]" />
        <div className="absolute -right-32 top-[65%] h-[28rem] w-[28rem] rounded-full bg-gold opacity-[0.05] blur-[170px]" />
      </div>
    </>
  )
}
