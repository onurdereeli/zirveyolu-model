

export function ModelImageSection() {
  return (
    <section id="model" className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_180deg,_rgba(34,211,238,0.18),_rgba(147,51,234,0.16),_rgba(249,115,22,0.22),_rgba(34,211,238,0.18))] blur-2xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-slate-950/60 p-3 shadow-[0_0_60px_rgba(34,211,238,0.18)] backdrop-blur-xl">
          <img
  src="/zirveyolu.png"
  alt="ZİRVEYOLU model diyagramı"
/>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl">
        <span className="inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
          Resmi Model Diyagramı
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">
          Zirveye çıkan sürecin görsel haritası
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
          Her yazılım projesi bir zirve yolculuğudur. Doğru adımlarla ilerler, sürekli
          iyileşir ve hedefe ulaşır.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            'Net aşamalar, görünür akış',
            'AI ile hızlanan üretim ritmi',
            'Kalite ve gözlem odaklı süreç',
            'Sürekli gelişen ürün yaklaşımı',
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
