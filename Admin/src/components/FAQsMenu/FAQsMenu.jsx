import React, { useState } from "react";
import { FaQ } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";


function FAQsMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      className={`${
        menuOpen ? "bg-[#005EE6] text-white" : " bg-white"
      } shadow-md text-left w-full md:w-[60%] px-4 md:px-8   rounded-[10px] relative font-medium text-[1.1rem]`}
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex justify-between items-center w-full"
      >
        <span className="py-4 text-left flex gap-3 items-center text-[0.9rem] md:text-[1rem]"><FaQ size={20} color={menuOpen ? "#FFFFFF" : "#005EE6"}/>
        {props.q}</span>
        {menuOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out font-extralight  ${menuOpen ? 'py-4 grid-rows-[1fr] opacity-100 border-t-[0.5px] border-[#ffffff4a]':'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden text-[1rem]">
          {props.a}
        </div>
      </div>
      <div onClick={props.onDelete} className={`${  menuOpen ? " text-black" : " bg-white"} rounded-[10px] shadow-md bg-[white] hover:bg-[#000000] hover:text-white absolute right-[-4rem] cursor-pointer top-0 duration-200 p-4`}> <MdDelete size={25}/></div>
    </div>
  );
}

export default FAQsMenu;
