import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const navdata = ["Home", "About", "Admission", "Events", "Contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center md:p-2 sticky top-0 z-50 backdrop-blur-md bg-transparent p-2 px-3">
      <div className="md:w-32 w-28">
        <img src="/Logo.png" alt="logo" className="object-contain h-full w-full" />
      </div>
      <div>
        <ul className="md:flex gap-5 text-lg font-medium hidden">
          {navdata.map((item) => (
            <li key={item} className="hover:text-teal-800 transition duration-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
  <RxHamburgerMenu />
</div>
{open && (
  <ul className="flex flex-col gap-4 absolute top-16 left-0 w-full bg-teal-900 text-white p-4 md:hidden text-center font-medium">
    {navdata.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)}
    </nav>
  )
}