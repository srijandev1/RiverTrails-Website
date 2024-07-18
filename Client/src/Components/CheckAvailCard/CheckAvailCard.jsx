import React, { useState } from "react";
import { star, left, close, minus } from "../../assets/index";
import { IoIosAddCircle } from "react-icons/io";
import Itinerary from "../../Pages/Itinerary/Itinerary";
import { FaCalendar } from "react-icons/fa";
import { next } from "../../assets/index";
import { Link, useNavigate } from "react-router-dom";
import SelectAddons from "../SelectAddons/SelectAddons";

function CheckAvailCard(props) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [anglerSpaces, setAnglerSpaces] = useState(1); 
  const handleIncrement = () => {
    setAnglerSpaces((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setAnglerSpaces((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const handleSave = (selectedAddons) => {
    setSelectedAddons(selectedAddons);
  };

  const itiData = {
    title: props.title,
    duration: props.totaldays,
    days: props.day,
    night: props.night,
    rating: props.rating,
  };

  const handleReserveClick = () => {
    navigate("/requestbooking", {
      state: {
        itiData: itiData,
        selectedDateData: props.selectedDateData,
        selectedAddons: selectedAddons,
        anglerSpaces: anglerSpaces,
      },
    });
  };

  return (
    <div className="bg-white shadow-md w-[100vw] h-[100svh] md:w-[30vw] md:h-auto md:sticky top-0 z-20 md:z-0 left-0 w- md:top-[7rem] fixed md:rounded-[30px] ">
      <div className="relative px-8 py-6 ">
        <p
          className={
            "md:hidden sticky flex items-center text-[1rem] font-semibold gap-4 mb-6 text-center"
          }
        >
          <img onClick={props.onClose} width={10} src={left} alt="" /> Confirm
          you reservation
        </p>
  
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
          <div className="flex items-end mt-6 w-full justify-between">
            <div className="">
              <h3 className="text-[#3C3C3C] text-[0.9rem] md:text-[0.85rem]  mb-1">
                Angler Spaces
              </h3>
              <div className=" relative  bg-[#F2F2F2]   rounded-[12px] flex items-center justify-center text-[1.2rem] w-[9rem] md:w-[10rem] h-[3rem]">
              {anglerSpaces}
                <button onClick={handleDecrement} className="absolute left-[0.25rem]  text-white bg-[#005EE6] w-[2.5rem] h-[2.5rem] rounded-[10px]">
                  -
                </button>
                <button onClick={handleIncrement} className="absolute right-[0.25rem] text-white bg-[#005EE6] w-[2.5rem] h-[2.5rem] rounded-[10px]">
                  +
                </button>
              </div>
            </div>
            <select
              className="bg-[#F2F2F2] px-4 h-[3rem] rounded-[10px] w-[45%] md:w-[50%]"
              name=""
              id=""
            >
              <option value="Year">Year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
          </div>
          <div
            onClick={props.datePopup}
            className="bg-[#F2F2F2]  px-4 py-3 rounded-[10px] h-[3.5rem] w-[100%] mt-4 flex gap-2 items-center cursor-pointer"
          >
            {props.selectedDateData ? (
              <div className="w-full flex justify-between">
                <div className="">
                  <p className="text-[#696969] text-[0.75rem] mb-[-0.2rem]">
                    {props.selectedDateData.startDay}
                  </p>
                  <h4>{props.selectedDateData.startDate}</h4>
                </div>
                <img className="w-[1rem]" src={next} alt="" />
                <div className="">
                  <p className="text-[#696969] text-[0.75rem] mb-[-0.2rem]">
                    {props.selectedDateData.endDay}
                  </p>
                  <h4>{props.selectedDateData.endDate}</h4>
                </div>
              </div>
            ) : (
              <>
                <FaCalendar />
                <span>Select Date</span>
              </>
            )}
          </div>
          <div>
            <div className=" mt-6 mb-2 text-[#005EE6] ">
              <p className="text-[1rem] flex items-center  justify-between md:text-[0.85rem] mb-3">
                Select Addons{" "}
                <span onClick={togglePopup} className="cursor-pointer">
                  <IoIosAddCircle size={35} />
                </span>
              </p>
              {isPopupVisible && (
                <SelectAddons
                  handleSave={handleSave}
                  selectedAddons={selectedAddons}
                  togglePopup={togglePopup}
                />
              )}
              <div className="">
                <ul className="flex flex-col gap-1">
                  {selectedAddons.map((addon) => (
                    <li
                      className="text-black text-[0.85rem]"
                      key={addon.id}
                    >
                      {addon.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            onClick={handleReserveClick}
            className="bg-[#005EE6] text-white p-4 rounded-[10px] w-full mt-8"
          >
           Request to Book
          </button>

          <p className="text-[#696969]  text-[0.85rem] text-center font-light mt-4">
            You won’t be charged yet
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckAvailCard;
