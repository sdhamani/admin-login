// Converted from Stitch export — zero design decisions made here.
// Every color, font, radius, and layout token comes directly from the export.

const GENRE_TAGS = ['All', 'Cyberpunk', 'Neo-Noir', 'Psychological', 'Space Opera', 'Retro-Future']

const LATE_NIGHT_POSTERS = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDayhRNsfMRQpE2mfI3yecVRvrifRWtmuw-RYSZ9-nifo1gDar4qCuCeODLzJ7UBpNSlqLF5PeI7Gkg9GSi2R8-4Ylq_tc5WyNoLFEZiLCnbMgOTZEEw7ACkHzl3F7nT-n_Q_1zZwLvCzXwFwnXN6OC1Hrs4HJ8KHkUAQH1WSkOUoRtubGWEbt6gespkZzA2xpwZR0cql0-H_WIeYORvKafNeVDJEZtulDR3xLulT_35T4nLYxTq2YHdvmmOt9o1BVdaYslWMx-6ME',
    title: 'Neon Pulse',
    meta: 'Thriller • 2024',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkt4kkLiPG5d-HLW1w6dh-P92CLbMq0NoVB9d6xuUqHVkRIQSvOAqEcc0EDc8JTDS-wmchGSDWlVLB8ENT3NDM3eZEjujO8fKUvunZKy1VZZUvF2-v-rjX4BzrjjTBJ_pY5l5sl0j8kRT6Wl7Uh7yCC9ryBr7QnAFZ87z7N1J91MQ6Q03VCVqZTSWtxIo0Ssl00ybuzns0iHEnEO7Whr7Lb6pQqA4gEoWTe8FFziJZBUNJ6QElFGBsa7-2Stwpq1mX9gAfhT-m0Mk',
    title: 'Shutter Speed',
    meta: 'Action • 2023',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBja80OydzDgQ1FIxPjKXoQvl9cQLX7YDLtpDevEaiQy0RbXTJFnrTJ8fA2t31jnUIzIV5Yqut_E72LSvHnz_ptyQmqHJahuERre2KnX4lyPm1FaBpvJp73A3oSUFgo0DIPxF-RlAkG2CHWCyYFGRsqeGsqyNUb4AD_S04Kr5Qg9SMbMPiHILIDfsv4Y7lpG6ZX48n3wIclO9h6un2toeKamMCsb6CmTChxlXIgIF9wU8NWMIdHIR3k9rly30aE6N9_IHmpDgXh8J3dbCQ',
    title: 'Rainy Alley',
    meta: 'Noir • 2024',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyLgciTtUAkpqA3XH8LJdBT4ZuI9JDT5AxyslZHJ6aq7bkkCNiyrx25xOiLyPWXIIDMSd1gjNmDXdiLZ1hcqPujHipEya1WcDAsKRTuHv5Gb7sNRUw-gs0JyEralJSicGR7nJSAzWYuyulQclkVZZ8oMqSDIGwbZfAMSEQ5k9xz0LVXaPZAJYS2m-ZZ_XdhVOlPVZGiTqtIosKW4rmnTmGNXnph6j2HWpcmzTUcq5LeeLNPt0hRxrK3aIc3mUT2dQ0v-oSSUmRJwA',
    title: 'Ghost Shell',
    meta: 'Sci-Fi • 2024',
  },
]

export default function CineSwipePage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen pb-24">

      {/* TopAppBar */}
      <header className="sticky top-0 z-50 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="flex items-center justify-between px-6 py-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">movie</span>
            <h1 className="font-headline text-2xl font-bold tracking-tight">CineSwipe</h1>
          </div>
          <button className="p-2 hover:bg-surface-container-highest rounded-full transition-colors">
            <span className="material-symbols-outlined text-on-surface">search</span>
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-6">

        {/* Search bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-on-surface-variant/60">search</span>
          </div>
          <input
            type="text"
            placeholder="Search for movies, actors, moods..."
            className="w-full bg-surface-container-high border-none rounded-full py-4 pl-12 pr-6 text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
          />
        </div>

        {/* Genre tags */}
        <div className="flex overflow-x-auto gap-3 mb-10 hide-scrollbar -mx-6 px-6">
          {GENRE_TAGS.map((tag) => (
            <button
              key={tag}
              className={[
                'flex-shrink-0 px-6 py-2 rounded-full font-medium text-sm',
                tag === 'All'
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant transition-colors',
              ].join(' ')}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Late Night Thrills */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-2xl font-semibold text-on-surface">Late Night Thrills</h2>
            <span className="text-primary text-sm font-medium cursor-pointer">See All</span>
          </div>
          <div className="masonry-grid">
            {LATE_NIGHT_POSTERS.map((poster) => (
              <div
                key={poster.title}
                className="masonry-item relative group rounded-lg overflow-hidden bg-surface-container shadow-2xl"
              >
                <img
                  src={poster.src}
                  alt={poster.title}
                  className="w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-headline text-lg font-bold leading-tight">{poster.title}</p>
                  <p className="text-on-surface-variant text-xs mt-1">{poster.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sunday Morning Vibes */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-headline text-2xl font-semibold text-on-surface">Sunday Morning Vibes</h2>
            <span className="text-primary text-sm font-medium cursor-pointer">See All</span>
          </div>
          <div className="grid grid-cols-1 gap-6">

            {/* Editorial card */}
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcPTPuu9G3RqDD8BipCZ_ICujtKmkA1HxvPzW5m0PC6UzgpDO6M-xadIh_tTc4VldxNBRS8Ze56L2zp8yklTkEZ_MMERfPruk1itPOSOWpNriUZTrZP-LRJ0nKa_gFJwswEcr_Z0Pnp4w89mOu-zeCGeq_S1ZCVQkq_E1v5Tj0LU_16WcU7Qnpswp46Ow_gyKDphpHr8zHn_bDlxZlSeF1OsV2ZmmZqxiKqUCnuCwD9h-9BZunywVIXX2OHnozhjau3GxU2coiF2g"
                alt="Soft morning light"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center p-8">
                <span className="text-tertiary text-xs font-bold uppercase tracking-widest mb-2">
                  Curated Collection
                </span>
                <h3 className="font-headline text-3xl font-bold max-w-[200px] leading-tight mb-4 text-white">
                  Quiet Contemplation
                </h3>
                <button className="w-fit px-6 py-2 rounded-full bg-primary-container text-white font-medium text-sm flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  Watch Now
                </button>
              </div>
            </div>

            {/* Mood grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-high p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-tertiary">coffee</span>
                </div>
                <p className="font-headline font-bold text-on-surface">Feel Good</p>
                <p className="text-on-surface-variant text-xs mt-1">12 Movies</p>
              </div>
              <div className="bg-surface-container-high p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                </div>
                <p className="font-headline font-bold text-on-surface">Indie Gold</p>
                <p className="text-on-surface-variant text-xs mt-1">8 Movies</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Bottom nav */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-surface-container-low/70 backdrop-blur-2xl border border-outline-variant/20 rounded-full px-8 py-4 z-50 shadow-2xl flex justify-between items-center">
        <a href="#" className="flex flex-col items-center gap-1 group">
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">play_circle</span>
          <span className="text-[10px] font-medium text-on-surface-variant group-hover:text-primary tracking-wide">Feed</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 relative">
          <div className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_#ffb1c3]" />
          <span
            className="material-symbols-outlined text-primary"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            explore
          </span>
          <span className="text-[10px] font-medium text-primary tracking-wide">Discover</span>
        </a>
        <a href="#" className="flex flex-col items-center gap-1 group">
          <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">person</span>
          <span className="text-[10px] font-medium text-on-surface-variant group-hover:text-primary tracking-wide">Profile</span>
        </a>
      </nav>

      {/* Floating reaction bar */}
      <div className="fixed right-6 bottom-32 flex flex-col gap-4 z-40">
        {[
          { icon: 'favorite', label: 'Like' },
          { icon: 'add_to_photos', label: 'Save' },
          { icon: 'share', label: 'Share' },
        ].map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <button className="w-12 h-12 rounded-full bg-surface-container-highest/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:text-primary transition-colors border border-outline-variant/10">
              <span className="material-symbols-outlined">{icon}</span>
            </button>
            <span className="text-[10px] text-on-surface-variant font-medium">{label}</span>
          </div>
        ))}
      </div>

    </div>
  )
}
