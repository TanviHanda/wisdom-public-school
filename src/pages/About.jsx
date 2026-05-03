import Cards from "../components/Cards";

const leftImages = [
  { image: "/eduAchive.webp", altText: "Education", title: "Education" },
  { image: "/scienceAchieve.jpg", altText: "Science", title: "Science" },
  { image: "/classroom.jpg", altText: "Classroom", title: "Classroom" }
];

const rightImages = [
  { image: "/sportsAcheive.avif", altText: "Sports", title: "Sports" },
  { image: "/library.jpg", altText: "Library", title: "Library" },
  { image: "/computerLab.webp", altText: "Computer Lab", title: "Computer Lab" }
];

export default function About() {
  return (
    <div className="w-full bg-zinc-200 px-4 py-10 sm:px-8 md:py-14">
      <div className="mx-auto flex flex-col sm:flex-row w-full max-w-5xl bg-white p-4 gap-4 shadow-sm">

        <div className="flex flex-row sm:flex-col gap-3 sm:w-[25%] w-full bg-zinc-200 p-3">
          {leftImages.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>

        <div className="flex flex-col justify-center gap-6 sm:w-[50%] w-full bg-zinc-200 p-3">

          <div className="flex items-center justify-center bg-white p-4 rounded-lg border border-zinc-100">
            <div className="text-center text-zinc-900">
              <h2 className="text-2xl font-medium">Our Vision</h2>
              <p className="mt-2 text-sm">
                To empower students with knowledge, skills, and values that shape responsible global citizens.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white p-4 rounded-lg border border-zinc-100">
            <div className="text-center text-zinc-900">
              <h2 className="text-2xl font-medium">About Us</h2>
              <p className="mt-2 text-sm">
                Wisdom Public School nurtures academic excellence, creativity, and character in a disciplined environment.
              </p>
            </div>
          </div>

        </div>

        <div className="flex flex-row sm:flex-col gap-3 sm:w-[25%] w-full bg-zinc-200 p-3">
          {rightImages.map((item, i) => (
            <Cards key={i} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}