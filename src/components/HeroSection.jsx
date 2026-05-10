export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 px-6 py-16 shadow-[0_0_80px_rgba(45,212,255,0.12)] backdrop-blur-xl sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.18),_transparent_28%)]" />
      <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
            Yeni Nesil Geliştirme Rotası
          </div>
          <div className="space-y-4">
            <h1 className="font-display text-5xl font-extrabold uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
              ZİRVEYOLU
            </h1>
            <p className="max-w-2xl font-display text-xl text-slate-200 sm:text-2xl">
              AI Destekli Modern Yazılım Geliştirme Modeli
            </p>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              ZİRVEYOLU, çevik yazılım geliştirme yaklaşımını yapay zeka, otomatik test,
              gerçek zamanlı izleme ve sürekli güncelleme süreçleriyle birleştiren modern
              bir yazılım geliştirme modelidir.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#model"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]"
            >
              Modeli İncele
            </a>
            <a
              href="#adimlar"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-orange-300/70 hover:bg-orange-400/10"
            >
              Adımları Gör
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute inset-x-16 bottom-4 top-20 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-slate-950/50 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_40px_rgba(76,29,149,0.22)]">
            <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>Sistem Sinyali</span>
              <span className="text-cyan-300">Online</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['AI Karar Motoru', 'Gerçek zamanlı analiz ile en iyi rotayı seçer.'],
                ['Kalite Kalkanı', 'Otomatik test ve doğrulama akışlarıyla güven verir.'],
                ['Sürekli Evrim', 'Canlı izleme verileriyle ürünü her sürümde güçlendirir.'],
                ['Çevik Ritim', 'Sprint bazlı ilerleme ile ekip odağını korur.'],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/10"
                >
                  <div className="mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-orange-400" />
                  <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
