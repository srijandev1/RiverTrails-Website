import React from "react";
import star from "../../assets/star.svg";
function PackageCard(props) {
  return (
    <div className="bg-white p-3 shadow-md w-[19rem] h-[18rem] rounded-[15px] overflow-hidden">
      <img
        className="w-full h-[11rem] object-cover rounded-[15px] mb-2"
        src={props.img}
        alt=""
      />
      <div className="">
        <h1 className="font-medium text-[#232323] mb-1 text-[1.1rem] leading-5">{props.title}</h1>
        <p className="flex items-center font-medium leading-5">
          <img className="mr-1" src={star} alt="" /> {props.rating}{" "}
          <span className="text-[#696969] text-[0.75rem] font-extralight ml-2">
            {props.reviews} reviews
          </span>
        </p>
        <div className="flex justify-between items-end mt-auto">
          <p className="text-[#696969] mt-3 text-[0.75rem]">
            {props.night} nights / {props.day} days
          </p>
          {/* <div className="flex flex-col items-end">
            <span className="text-[#696969] text-[0.6rem] font-extralight">from</span>
            <p className="text-[1.4rem] font-semibold leading-6">{props.price}</p>
            <span className="text-[#696969] text-[0.6rem] font-extralight">per person</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
