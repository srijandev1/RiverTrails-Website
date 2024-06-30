import React, { useState } from "react";
import star from "../../assets/star.svg";
import left from "../../assets/left.svg"
import { IoIosAddCircle } from "react-icons/io";
import Itinerary from "../../Pages/Itinerary/Itinerary";

function CheckAvailCard(props) {

  return (
    <div className={"bg-white shadow-md w-[100vw] h-[100svh] md:w-[30vw] md:h-auto md:sticky top-0 z-20 md:z-0 left-0 w- md:top-[7rem] fixed md:rounded-[30px] px-8 py-6"}>
        <p onClick={props.onClose}  className={"md:hidden sticky flex items-center text-[1rem] font-semibold gap-4 mb-6 text-center"}><img width={10} src={left} alt="" /> Confirm you reservation
        </p>
      <div className="flex justify-between items-end border-b-[0.5px] border-[#00000030] pb-3">
        <p>
          <span className="text-[#696969] text-[0.85rem]">{props.oldprice}</span>
          <p className="font-medium leading-[1.75rem] text-[1.5rem]">{props.price}</p>
        </p>
        <p className="px-2 py-1 text-[0.85rem] bg-[#005EE6] text-white rounded-[10px] flex items-center justify-center ">
          -{props.discount}%
        </p>
      </div>
      <div className="pt-4">
        <h1 className="text-[1.3rem] leading-[1rem] font-semibold text-[#3C3C3C] mb-2">
          {props.title}
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-[0.85rem]">
            <span className="font-bold"> {props.totaldays} Days</span> of Fishing{" "}
            <span className="font-light text-[#696969]">({props.night} Nights/{props.days} Days)</span>
          </p>
          <p className="flex items-center gap-1 text-[0.85rem] font-semibold">
            <img className="mb-[0.1rem] w-[1rem]" src={star} alt="" /> {props.rating}{" "}
          
          </p>
        </div>
        <div className="flex mt-6 justify-between">
          <select
            className="bg-[#F2F2F2] px-4 py-3 rounded-[10px] w-[30%]"
            name=""
            id=""
          >
            <option value="Year">Year</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
          <select
            className="bg-[#F2F2F2] px-4 py-3 rounded-[10px] w-[66%]"
            name=""
            id=""
          >
            <option value="2024">Add no of guest</option>
            <option value="2025">1</option>
            <option value="2026">2</option>
            <option value="2027">3</option>
          </select>
        </div>
        <div className="bg-[#F2F2F2]  px-4 py-3 rounded-[10px] w-[100%] mt-4 flex justify-between cursor-pointer">
          Select Date
          <span>{" >"}</span>
        </div>
        <div>
        <a href="" className="text-[#005EE6] text-[1rem] md:text-[0.85rem] items-center flex justify-between mt-6 mb-2">Select Addons <span><IoIosAddCircle size={35}/>
        </span></a>
        <p className="flex justify-between">Experience Local Culture <span className="text-[1.5rem]">-</span></p>
        </div>
        <button className="bg-[#005EE6] text-white p-4 rounded-[10px] w-full mt-8">Check availability</button>
        <p className="text-[#696969]  text-[0.85rem] text-center font-light mt-4">You won’t be charged yet</p>
      </div>
    </div>
  );
}

export default CheckAvailCard;

