import React from "react";
import { logoB } from "../../assets/index";
import { FaCalendarCheck, FaImage } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { BiSolidCustomize } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <div className="flex flex-col justify-between h-screen p-8 w-[13vw] shadow-md">
      <div>
        <img className="mb-10" src={logoB} alt="Logo" />
        <div className="flex flex-col gap-7">
          <Link
            to=""
            className={`flex items-center gap-2 cursor-pointer duration-200 ${
              isActive("/booking")
                ? "text-black"
                : "text-[#5e5e5e] hover:text-black"
            }`}
          >
            <FaCalendarCheck size={22} />
            Booking
          </Link>

          <Link
            to="/package"
            className={`flex items-center gap-2 cursor-pointer duration-200 ${
              isActive("/package")
                ? "text-black"
                : "text-[#5e5e5e] hover:text-black"
            }`}
          >
            <BiSolidCustomize size={23} />
            Packages
          </Link>

          <Link
            to="/content"
            className={`flex items-center gap-2 cursor-pointer duration-200 ${
              isActive("/content")
                ? "text-black"
                : "text-[#5e5e5e] hover:text-black"
            }`}
          >
            <FaImage size={22} />
            Content
          </Link>

          <Link
            to="/settings"
            className={`flex items-center gap-2 cursor-pointer duration-200 ${
              isActive("/settings")
                ? "text-black"
                : "text-[#5e5e5e] hover:text-black"
            }`}
          >
            <IoMdSettings size={22} />
            Settings
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[#5e5e5e] hover:text-black cursor-pointer duration-200">
        <IoLogOut size={30} />
        Log Out
      </div>
    </div>
  );
}

export default Navbar;
