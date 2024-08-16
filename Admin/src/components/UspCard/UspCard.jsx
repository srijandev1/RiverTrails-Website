import React from "react";
import { MdDelete } from "react-icons/md";

function UspCard({ icon, title, onClick }) {
  return (
    <div className="flex items-center gap-1">
      <div  
      onClick={onClick}
      className="flex text-[0.9rem] items-center bg-white gap-3 shadow-md px-5 py-2  rounded-[10px] cursor-pointer">
      <img className="w-[1.5rem]" src={icon} alt="" />
      <p className="text-center">{title}</p>
      </div>
     
      <div className=" rounded-[10px] shadow-md bg-[white] hover:bg-[#00000030] cursor-pointer duration-200 p-2"> <MdDelete size={25}/></div>
    </div>
  );
}

export default UspCard;
