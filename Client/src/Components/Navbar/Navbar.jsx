import React, { useState } from "react";
import { logoB, instaB, fbB, whatsappB } from "../../assets/index";
import { IoMenu, IoClose } from "react-icons/io5";


function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className="px-[1.5rem] md:px-[3rem] w-full z-10 fixed bg-[#ffffff] 	">
      <header className="flex items-center justify-between  py-3 border-b-[0.5px] border-solid border-[#0000003a]">
        <img className="w-[5rem] md:w-[6rem]" src={logoB} alt="" />
        <nav className="md:flex text-black gap-[4rem] items-center hidden">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Packages</a>
          <a href="#">FAQs</a>
          <div className="flex gap-[1.5rem]">
            <a href="#">
              <img className="w-[1.5rem]" src={instaB} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={fbB} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={whatsappB} alt="" />
            </a>
          </div>
        </nav>
        <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? <IoClose size={30}/> :  <IoMenu size={30}/>}
        </div>
        <nav className={!nav ? "md:hidden shadow-md flex flex-col gap-4 fixed left-0 top-0 w-[60%] bg-white h-screen pt-3 pl-[1.5rem] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <img className="w-[5rem] md:w-[6rem]" src={logoB} alt="" />
        <div className="flex flex-col gap-6 pl-3 pt-4">
        <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Packages</a>
          <a href="#">FAQs</a>
          <div className="flex gap-[1rem]">
            <a href="#">
              <img className="w-[1.5rem]" src={instaB} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={fbB} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={whatsappB} alt="" />
            </a>
            </div>
        </div>
       
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
