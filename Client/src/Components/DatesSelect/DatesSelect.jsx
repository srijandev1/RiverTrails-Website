import React, { useState } from "react";
import { dates } from "./dates";
import { closeB, next } from "../../assets/index";

function DatesSelect({ dateSelect, handleDateSelect }) {
  const [selectedSeason, setSelectedSeason] = useState("Summer");

  const handleSeasonSelect = (season) => {
    setSelectedSeason(season);
  };
  return (
    <div className="">
    <div
      className={
        !dateSelect
          ? "hidden"
          : " fixed z-50  bg-white shadow-lg md:w-[70vw] md:h-[80vh] w-[100vw] h-[100vh] left-0  md:left-1/2 md:transform md:-translate-x-1/2 rounded-[30px] md:rounded-[20px] py-5 px-5 md:px-8"
      }
    >
      <div className="flex justify-between items-center">
        <p className="font-medium text-[1.1rem]">Select Dates</p>{" "}
        <span>
          <img
            onClick={handleDateSelect}
            className="w-4 cursor-pointer"
            src={closeB}
            alt=""
          />
        </span>
      </div>
      <div className="mb-7">
        <p className="text-[#005EE6] text-[0.85rem] mt-4 mb-1">Select Season</p>
        <div className="flex  gap-4">
          <div
            className={`flex md:flex-row flex-col md:items-center md:justify-between w-full border-[1px] border-[#005EE6] px-3 py-[0.35rem] rounded-[5px] cursor-pointer ${
              selectedSeason === "Summer" ? "bg-[#005EE6] text-white" : ""
            }`}
            onClick={() => handleSeasonSelect("Summer")}
          >
            <p className=" text-[0.65rem] md:text-[0.75rem] md:mb-[-0.2rem]">
              Summer
            </p>
            <p className="md:text-[1rem] text-[0.85rem]">
              March 1st - June 30th
            </p>
          </div>
          <div
            className={`flex md:flex-row flex-col md:items-center md:justify-between w-full border-[1px] border-[#005EE6] px-3 py-[0.35rem] rounded-[5px] cursor-pointer ${
              selectedSeason === "Autumn" ? "bg-[#005EE6] text-white" : ""
            }`}
            onClick={() => handleSeasonSelect("Autumn")}
          >
            <p className="text-[0.65rem] md:text-[0.75rem] md:mb-[-0.2rem]">
              Autmn
            </p>
            <p className="md:text-[1rem] text-[0.85rem]">
              March 1st - June 30th
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[27rem] overflow-y-scroll md:px-4">
        {dates.filter((date) => {
           return selectedSeason === "Summer"
           ? date.season === "Summer"
           : date.season === "Autumn";
        }).map((date) => (
          <div className="bg-white border-b-[0.5px] border-[#00000045] w-full flex md:flex-row flex-col justify-between py-5 ">
            <div className="flex gap-[4rem]">
              <div className="md:w-[7rem]">
                <p className="text-[#696969] text-[0.75rem] mb-[-0.2rem]">
                  {date.startDay}
                </p>
                <h4>{date.startDate}</h4>
              </div>
              <img className="w-[1rem]" src={next} alt="" />
              <div className="md:w-[7rem]">
                <p className="text-[#696969] text-[0.75rem] mb-[-0.2rem]">
                  {date.endDay}
                </p>
                <h4>{date.endDate}</h4>
              </div>
            </div>
            <div className="flex md:block gap-1">
              <p className="text-[#696969] text-[0.75rem] md:mb-[-0.2rem]">
                Angler Spaces
              </p>
              <h4 className=" text-[0.75rem] md:text-[1rem]">
                {date.anglerSpaces} left
              </h4>
            </div>
            <button
              onClick={handleDateSelect}
              className="bg-black text-white mt-3 md:mt-0 px-4 py-2 md:py-0 rounded-[7px] md:rounded-[10px]"
            >
              Confirm Dates
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default DatesSelect;
