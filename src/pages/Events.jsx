const upcomingEvents = [
  {
    title: "Parent-Teacher Meeting - September 2026",
    desc: "Discuss student progress and academic performance",
    image: "Ptm.webp",
  },
  {
    title: "Inter-School Quiz Competition - November 2026",
    desc: "Compete with students from top schools across the city",
    image: "quiz.webp",
  },
  {
    title: "Picnic 2026 - December 2026",
    desc: "A fun-filled day out with games, food and unforgettable memories with friends",
    image: "picnic.webp",
  },
];

const pastEvents = [
  {
    title: "Independence Day Celebration 2025",
    desc: "Students performed cultural activities",
    image: "/independenceDay.jpg",
  },
  {
    title: "Science Fair 2025",
    desc: "Innovative student projects displayed",
    image: "scienceFair.jpg",
  },
  {
    title: "Annual Sports Meet 2025",
    desc: "Winners awarded medals & certificates",
    image: "sportsMeet.jpg",
  },
];

export default function Events() {


  return (
    <div className="w-full min-h-screen bg-zinc-50 text-slate-900 px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Events</h1>
        <p className="text-teal-800 mt-2">
          Stay updated with school activities
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
          <h2 className="text-xl font-bold mb-6">
            Upcoming Activities
          </h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                className="bg-teal-50 p-4 rounded-xl hover:scale-[1.02] transition duration-300 border border-zinc-100"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover object-top rounded-xl mb-3 shadow-md"
                />
                <h3 className="font-semibold text-lg">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-zinc-100">
          <h2 className="text-xl font-bold mb-6">
            Past Events
          </h2>
          <div className="space-y-6">
            {pastEvents.map((event, i) => (
              <div
                key={i}
                className="bg-teal-50 p-4 rounded-xl hover:scale-[1.02] transition duration-300 border border-zinc-100"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover object-top rounded-xl mb-3 shadow-md"
                />
                <h3 className="font-semibold text-lg">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};