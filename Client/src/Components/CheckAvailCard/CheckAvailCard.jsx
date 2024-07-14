import React, { useState } from "react";
import { star, left, close, minus } from "../../assets/index";
import { IoIosAddCircle } from "react-icons/io";
import Itinerary from "../../Pages/Itinerary/Itinerary";

function CheckAvailCard(props) {
  const [selectAddons, setSelectAddons] = useState(false);
  const handleSelectAddons = () => {
    setSelectAddons(!selectAddons);
  }
  return (
    <div
      className={
        "bg-white shadow-md w-[100vw] h-[100svh] md:w-[30vw] md:h-auto md:sticky top-0 z-20 md:z-0 left-0 w- md:top-[7rem] fixed md:rounded-[30px] px-8 py-6"
      }
    >
      <p
        className={
          "md:hidden sticky flex items-center text-[1rem] font-semibold gap-4 mb-6 text-center"
        }
      >
        <img onClick={props.onClose} width={10} src={left} alt="" /> Confirm you
        reservation
      </p>
      {/* pricing section */}
      {/* <div className="flex justify-between items-end border-b-[0.5px] border-[#00000030] pb-3">
        <p>
          <span className="text-[#696969] text-[0.85rem] line-through	">
            {props.oldprice}
          </span>
          <p className="font-medium leading-[1.75rem] text-[1.5rem]">
            {props.price}
          </p>
        </p>
        <p className="px-2 py-1 text-[0.85rem] bg-[#005EE6] text-white rounded-[10px] flex items-center justify-center ">
          -{props.discount}%
        </p>
      </div> */}
      <div className="pt-4">
        <h1 className="text-[1.3rem] leading-[1rem] font-semibold text-[#3C3C3C] mb-2">
          {props.title}
        </h1>
        <div className="flex items-center gap-4">
          <p className="text-[0.85rem]">
            <span className="font-bold"> {props.totaldays} Days</span> of
            Fishing{" "}
            <span className="font-light text-[#696969]">
              ({props.night} Nights/{props.day} Days)
            </span>
          </p>
          <p className="flex items-center gap-1 text-[0.85rem] font-semibold">
            <img className="mb-[0.1rem] w-[1rem]" src={star} alt="" />{" "}
            {props.rating}{" "}
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
            <option value="2027">4</option>
          </select>
        </div>
        <div onClick={props.datePopup} className="bg-[#F2F2F2]  px-4 py-3 rounded-[10px] w-[100%] mt-4 flex justify-between cursor-pointer">
          Select Date
          <span>{" >"}</span>
        </div>
        <div>
          <div className=" mt-6 mb-2 text-[#005EE6] ">
            <p className="text-[1rem] flex items-center  justify-between md:text-[0.85rem] mb-3">Select Addons  <span onClick={handleSelectAddons} className="cursor-pointer">
              <IoIosAddCircle  size={35} />
            </span></p>
           <div>
            <p className="flex justify-between items-center text-black pr-2">Experience local culture <span><img src={minus} alt="" /></span>
            </p>
           </div>
          </div>
        </div>
        <button className="bg-[#005EE6] text-white p-4 rounded-[10px] w-full mt-8">
          Reserve
        </button>
        <p className="text-[#696969]  text-[0.85rem] text-center font-light mt-4">
          You won’t be charged yet
        </p>
      </div>
      <div className={!selectAddons ? "hidden" : "bg-white w-[20rem] flex flex-col items-center shadow-md  px-4 py-3  absolute left-1/2 transform -translate-x-1/2 top-[5rem] rounded-[15px]"}>
        <p className="flex w-full justify-between items-center mb-4 font-medium text-[0.9rem] text-[#005EE6]">
          Select Addons <img className="cursor-pointer" onClick={handleSelectAddons} src={close} alt="" />
        </p>
        <div className="flex flex-col gap-2">
          <label className="cursor-pointer" htmlFor="local">
            <input type="checkbox" name=""  id="local" />{" "}
            Experience local culture
          </label>
          <label className="cursor-pointer" htmlFor="taj">
            <input type="checkbox" name="" id="taj" /> Witness
            The Marvelous Taj Mahal
          </label>
          <label className="cursor-pointer" htmlFor="golden">
            <input type="checkbox" name="" id="golden" /> Golden
            Triangle Tour{" "}
          </label>
          <label className="cursor-pointer" htmlFor="safari">
            <input type="checkbox" name=""  id="safari" />{" "}
            Ranthambore Tiger Safari
          </label>
          <label className="cursor-pointer" htmlFor="delhi">
            <input type="checkbox" name=""  id="delhi" />{" "}
            Explore Vibrant Delhi
          </label>
        </div>
        <button onClick={handleSelectAddons} className="bg-[#005EE6] text-white py-2 px-6 cursor-pointer rounded-[10px] mt-6 mb-4">Save</button>
      </div>
    </div>
  );
}

export default CheckAvailCard;
