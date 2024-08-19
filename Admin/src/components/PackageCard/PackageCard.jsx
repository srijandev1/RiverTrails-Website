import React from "react";
import star from "../../assets/star.svg";
import { MdDelete } from "react-icons/md";

function PackageCard(props) {
  return (
    <div className="bg-white p-3 shadow-md w-[17rem] h-[16rem] rounded-[15px] overflow-hidden relative">
      <img
        className="w-full h-[9rem] object-cover rounded-[15px] mb-2"
        src={props.img}
        alt=""
      />
      <div className="">
        <h1 className="font-medium text-[#232323] mb-1 text-[1.1rem] leading-5">
          {props.title}
        </h1>
        <p className="flex items-center font-medium leading-5">
          <img className="mr-1" src={star} alt="" /> {props.rating}{" "}
          {/* <span className="text-[#696969] text-[0.75rem] font-extralight ml-2">
            {props.reviews} reviews
          </span> */}
        </p>
        <div className="flex justify-between items-end mt-auto">
          <p className="text-[#696969] mt-3 text-[0.75rem]">
            {props.night} nights / {props.day} days
          </p>
        </div>
      </div>
      <div onClick={props.onDelete} className="absolute right-3 bottom-5 rounded-[10px] shadow-md bg-[white] hover:bg-[black] hover:text-[white] cursor-pointer duration-200 p-2">
        <MdDelete size={25}/>
      </div>
    </div>
  );
}

export default PackageCard;
