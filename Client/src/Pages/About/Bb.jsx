import React from "react";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";

function Bb() {
  let box = document.querySelector(".container");
  const prev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  const next = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
  };
  return (
    <div className="relative overflow-hidden p-6">
      <button
        onClick={prev}
        className="text-black absolute left-0 bg-[#0000004c]"
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="text-black absolute right-0 bg-[#0000004c]"
      >
        {">"}
      </button>
      <div className="flex gap-3 w-[90vw]  overflow-x-hidden scroll-smooth container">
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
        <div className="w-[15rem] h-[20rem] bg-black flex-shrink-0"></div>
      </div>
    </div>
  );
}

export default Bb;
