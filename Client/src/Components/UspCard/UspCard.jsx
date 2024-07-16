import React from "react";

function UspCard({ icon, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col md:flex-row text-[0.9rem] items-center w-[8rem] md:w-auto bg-white gap-3 shadow-md px-5 py-4 md:py-2 rounded-[10px] cursor-pointer"
    >
      <img src={icon} alt="" />
      <p className="text-center">{title}</p>
    </div>
  );
}

export default UspCard;
