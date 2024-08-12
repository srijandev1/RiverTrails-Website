import React from 'react'
import { logoB } from "../../assets/index";
import { FaCalendarCheck, FaImage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BiSolidCustomize } from "react-icons/bi";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-screen p-8 shadow-md">
    <div>
      <img className="mb-10" src={logoB} alt="" />
      <div className="flex flex-col gap-7">
        <div className="flex items-center gap-2 text-[#5e5e5e]">
          <FaCalendarCheck size={22} />
          Booking
        </div>
        <div className="flex items-center gap-2 text-[#5e5e5e]">
          <BiSolidCustomize size={23} />
          Packages
        </div>
        <div className="flex items-center gap-2 text-[#5e5e5e]">
          <FaImage size={22} />
          Content
        </div>
        <div className="flex items-center gap-2 text-[#5e5e5e]">
          <IoMdSettings size={22} />
          Settings
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2 text-[#5e5e5e]">
      <IoLogOut size={30} />
      Log Out
    </div>
  </div>
  )
}

export default Navbar
