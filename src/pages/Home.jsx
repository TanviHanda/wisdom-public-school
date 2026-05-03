export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 pt-24 text-center text-white font-bold md:text-4xl">
        <h1>More Than Education - A Path to Greatness</h1>

        <h2 className="mt-4 font-semibold md:text-2xl text-xl">
          <i>Turning Wisdom Into Success</i>
        </h2>

        <p className="mt-4 text-center text-sm md:text-lg max-w-2xl">
          Where ambition meets opportunity and students rise beyond limits.
        </p>

        <button className="mt-8 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-teal-900 md:text-base">
          Explore School →
        </button>
      </div>
    </section>
  )
}


