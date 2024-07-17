import React, { useState } from "react";
import { logoB, instaB, fbB, whatsappB } from "../../assets/index";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <div className="px-[1.5rem] md:px-[3rem] w-full z-10 fixed bg-[#ffffff] 	">
      <header className="flex items-center justify-between  py-3 border-b-[0.5px] border-solid border-[#0000003a]">
      <Link to='/'><img className="w-[5rem] md:w-[6rem]" src={logoB} alt="" /></Link>
        <nav className="md:flex text-black gap-[4rem] items-center hidden">
          <Link onClick={() => window.scrollTo(0, 0)} to='/'>Home</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to='/aboutus'>About Us</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to='/packages'>Packages</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to='/faq'>FAQs</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/gallery">Gallery</Link>
          <div className="flex gap-[1.5rem]">
            <a href="https://www.instagram.com/river__trails/" target="_blank">
              <img className="w-[1.5rem]" src={instaB} alt="" />
            </a>
            <a href="https://www.facebook.com/p/River-Trails-India-100090244353944/" target="_blank">
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
        <Link to='/'>Home</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/packages'>Packages</Link>
          <Link to='/faq'>FAQs</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/gallery">Gallery</Link>
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
