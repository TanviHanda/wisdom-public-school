import { FiEdit, FiUpload, FiFileText, FiCreditCard, FiCheckCircle } from "react-icons/fi"
export default function Admission() {

  const AdmissionSteps = [
    { step: "01", title: "Apply Online", icon: <FiEdit size={24} />, desc: "Fill out the application form with basic details" },
    { step: "02", title: "Submit Documents", icon: <FiUpload size={24} />, desc: "Upload required certificates and photos" },
    { step: "03", title: "Entrance Test", icon: <FiFileText size={24} />, desc: "Appear for a written test to assess academic level" },
    { step: "04", title: "Fee Payment", icon: <FiCreditCard size={24} />, desc: "Complete the fee payment securely" },
    { step: "05", title: "Admission Confirmed", icon: <FiCheckCircle size={24} />, desc: "Welcome to Wisdom Public School!" },
  ]
  return (
    <div className="min-h-screen bg-teal-900 text-center text-white flex flex-col items-center justify-center gap-6 px-4 w-full py-10">
      <p className="md:text-[15px] text-teal-400">
        Join Our School
      </p>
      <h1 className="md:text-3xl text-2xl font-bold">
        Admission Process
      </h1>

      <div className="w-full max-w-5xl mx-auto mt-10 flex gap-4 md:justify-between overflow-x-auto md:overflow-visible px-2">
        {AdmissionSteps.map((item, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-teal-800/30 p-4 rounded-xl shadow-md 
                   w-56 h-56 flex-shrink-0 md:flex-1"
            >
              <h2 className="md:text-xl font-bold mb-2">
                {item.step}.
              </h2>
              <div className="p-4 rounded-xl bg-gray-200 text-teal-600 mb-3 text-2xl">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
              <p className="text-[12px] text-gray-200 mt-1">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}