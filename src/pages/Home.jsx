export default function Home() {
  return (
<>
  <video
    src="/video.mp4"
    autoPlay
    loop
    muted
    className="fixed top-0 left-0 w-full h-full object-cover -z-10"
  />
      <div className="fixed top-[70px] left-0 w-full h-[100%] bg-black/50 -z-10 text-center " />
  <div className="h-screen w-full flex items-center flex-col justify-center text-white md:text-4xl font-bold relative z-10 p-2 ">
    <h1>More Than Education - A Path to Greatness</h1>

    <h2 className="md:text-2xl font-semibold mt-4 text:xl">
      <i>Turning Wisdom Into Success</i>
    </h2>

    <p className="md:text-lg mt-4 text-center text-sm">
      Where ambition meets opportunity and students rise beyond limits.
    </p>
  </div>
</>
    
  )
}


