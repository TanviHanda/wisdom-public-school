import { FaEnvelope, FaMapMarker, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center p-4">
      <div className="flex flex-col md:flex-row border-4 border-teal-900 rounded-xl overflow-hidden">
        <div className="flex flex-col items-center justify-center p-6 h-[400px] w-full md:w-[450px] bg-teal-900">
          <h1 className="text-white font-bold text-center text-xl">
            Contact Us For Your Bright Future
          </h1>
          <ul className="flex flex-col gap-4 text-base mt-6 font-semibold text-teal-200">
            <li className="flex gap-2 items-center">
              <FaPhoneAlt /> Phone: 123-456-7890
            </li>
            <li className="flex gap-2 items-center">
              <FaEnvelope /> Email: info@wisdom.com
            </li>
            <li className="flex gap-2 items-center">
              <FaMapMarker /> Address: 123 Main St, City
            </li>
          </ul>
        </div>
        <div className="h-[400px] w-full md:w-[350px] flex items-center justify-center ">
          <form className="flex flex-col gap-4 p-6 w-full">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" className="border p-2 rounded-lg text-sm" />
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" className="border p-2 rounded-lg text-sm" />
            <label>Mobile:</label>
            <input type="text" placeholder="Enter your mobile number" className="border p-2 rounded-lg text-sm" />
            <button type="submit" className="bg-teal-900 text-white p-2 rounded-lg text-sm">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}