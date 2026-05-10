import { principles } from '../data/steps'

const descriptions = {
  'Akıllı Yön': 'AI destekli analizler sayesinde ekipler doğru kararları daha hızlı alır.',
  'Esnek Adım': 'Değişen gereksinimlere uyum sağlayan çevik yapı, projeyi hareketli tutar.',
  'Kalite Odaklı': 'Her sürüm, test ve doğrulama katmanlarıyla güvence altına alınır.',
  'Şeffaf İlerleme': 'Anlık görünürlük; ekip, paydaş ve ürün arasında ortak bir zemin kurar.',
  'Sürekli Evrim': 'Geri bildirimler yeni sürümlere dönüşür, sistem her döngüde güçlenir.',
}

export function PrinciplesSection() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-4">
        <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Temel İlkeler
        </span>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Modelin omurgasını oluşturan ilkeler
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {principles.map((item, index) => (
          <article
            key={item}
            className="group rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-orange-400/20 text-lg font-bold text-white">
              0{index + 1}
            </div>
            <h3 className="font-display text-xl font-semibold text-white">{item}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{descriptions[item]}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
