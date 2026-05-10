import { reasons } from '../data/steps'

export function WhySection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-5">
        <span className="inline-flex rounded-full border border-orange-300/25 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
          Neden ZİRVEYOLU?
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Modern yazılım ekipleri için tasarlanmış akıllı bir çalışma rotası
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          ZİRVEYOLU, sadece üretim hızını değil; kaliteyi, görünürlüğü ve sürdürülebilir
          ilerlemeyi de aynı anda güçlendiren bütüncül bir model sunar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <div
            key={reason}
            className="rounded-[1.6rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-lg transition duration-300 hover:border-violet-300/30 hover:bg-slate-900/70"
          >
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
              {index + 1}
            </div>
            <p className="text-sm font-medium leading-7 text-slate-200 sm:text-base">
              {reason}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
