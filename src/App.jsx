import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { InteractiveDiagramSection } from './components/InteractiveDiagramSection'
import { ModelImageSection } from './components/ModelImageSection'
import { PrinciplesSection } from './components/PrinciplesSection'
import { WhySection } from './components/WhySection'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_20%_20%,_rgba(168,85,247,0.14),_transparent_30%),radial-gradient(circle_at_80%_0%,_rgba(249,115,22,0.14),_transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/45 px-5 py-3 backdrop-blur-xl">
          <a href="#" className="font-display text-lg font-bold uppercase tracking-[0.28em] text-white">
            ZİRVEYOLU
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#model" className="transition hover:text-cyan-200">
              Model
            </a>
            <a href="#adimlar" className="transition hover:text-cyan-200">
              Adımlar
            </a>
            <a href="#neden" className="transition hover:text-cyan-200">
              Neden?
            </a>
          </nav>
        </header>

        <main className="space-y-20">
          <HeroSection />
          <ModelImageSection />
          <InteractiveDiagramSection />
          <PrinciplesSection />
          <section id="neden">
            <WhySection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
