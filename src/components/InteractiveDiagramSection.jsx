import { useState } from 'react'
import { steps } from '../data/steps'

export function InteractiveDiagramSection() {
  const [activeStep, setActiveStep] = useState(steps[0])

  return (
    <section id="adimlar" className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex rounded-full border border-violet-300/25 bg-violet-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200">
          İnteraktif Akış
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          7 adımlı gelişim diyagramını keşfet
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">
          Her adım, bir önceki aşamadan güç alır. Tıklayarak ZİRVEYOLU’nun yazılım
          geliştirme yolculuğunu detaylı biçimde inceleyebilirsin.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl">
          <div className="relative hidden min-h-[460px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/8 bg-slate-950/50 p-10 lg:flex">
            <div className="absolute inset-y-16 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-300/60 to-orange-400/0" />
            <div className="absolute inset-12 rounded-full border border-white/6" />
            <div className="absolute inset-20 rounded-full border border-white/6" />
            {steps.map((step, index) => {
              const angle = (index / steps.length) * Math.PI * 2 - Math.PI / 2
              const x = Math.cos(angle) * 180
              const y = Math.sin(angle) * 180
              const isActive = activeStep.id === step.id

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`absolute flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center transition duration-300 ${
                    isActive
                      ? `border-white/30 bg-gradient-to-br ${step.accent} text-white shadow-[0_0_30px_rgba(56,189,248,0.28)]`
                      : 'border-white/10 bg-slate-900/80 text-slate-300 hover:border-cyan-300/40 hover:text-white'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <span className="font-display text-lg font-bold">{step.id}</span>
                  <span className="mt-1 px-2 text-[10px] font-semibold leading-4">
                    {step.title}
                  </span>
                </button>
              )
            })}
            <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950/90 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-white">7</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Adımlı Akış
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {steps.map((step) => {
              const isActive = activeStep.id === step.id
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={`rounded-2xl border p-4 text-left transition duration-300 ${
                    isActive
                      ? `border-white/20 bg-gradient-to-r ${step.accent} text-white`
                      : 'border-white/10 bg-slate-950/60 text-slate-200 hover:border-cyan-300/30'
                  }`}
                >
                  <div className="text-sm font-semibold">{step.id}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{step.title}</div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-8 backdrop-blur-xl">
          <div
            className={`inline-flex rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold text-white ${activeStep.accent}`}
          >
            Adım {activeStep.id}
          </div>
          <h3 className="mt-5 font-display text-3xl font-bold text-white">
            {activeStep.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            {activeStep.description}
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <div
                className={`h-4 w-4 rounded-full bg-gradient-to-r ${activeStep.accent} shadow-[0_0_16px_rgba(56,189,248,0.55)]`}
              />
              <span className="text-sm uppercase tracking-[0.26em] text-slate-400">
                ZİRVEYOLU Sistem Yorumu
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Bu adım, yazılım yolculuğunun ritmini belirler. Bir sonraki aşamaya veri,
              görünürlük ve kalite sinyali taşıyarak bütün modeli senkronize eder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
