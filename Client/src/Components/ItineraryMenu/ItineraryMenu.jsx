import { list } from "postcss";
import React, { useState } from "react";

function ItineraryMenu(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const details = props.details;
  return (
    <div className="w-[100%] font-medium text-[1rem] md:text-[1.1rem]">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex justify-between md:items-center w-full py-4 border-b-[0.5px] border-[#00000048]"
      >
        <span className="text-left w-[90%] md:w-full">
          <span className="text-[#005EE6] font-semibold mr-3">{props.day}</span>
          {props.title}
        </span>
        {menuOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out font-extralight  ${
          menuOpen
            ? "py-4 grid-rows-[1fr] opacity-100 border-t-[0.5px] border-[#ffffff4a]"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
  
          <ul className="flex flex-col list-disc gap-3 pl-8">
        {details.map((d) => (
          <li className="font-light text-[0.9rem] md:text-[1rem]">{d}</li>
        ))}
      </ul>
        </div>
      </div>
    </div>
  );
}

export default ItineraryMenu;
