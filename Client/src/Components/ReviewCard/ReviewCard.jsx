import React from "react";
import quotes from "../../assets/quotes.svg";
import star from "../../assets/star.svg";

function ReviewCard(props) {
  return (
    <div className="bg-white w-[37rem] my-4  mx-[3.75rem] flex-shrink-0 py-7 px-8 shadow-md rounded-[10px] flex flex-col items-center">
      {/* <img clxassName="w-[5rem] h-[5rem] rounded-[50%] mb-3" src={props.img} alt="" /> */}
      <h3 className="font-medium text-[1.2rem] leading-56">{props.name}</h3>
      {/* <p className="font-light text-[#696969] text-[0.85rem]">{props.desig}</p> */}
      <img className="mt-6 mb-3" src={quotes} alt="" />
      <p className="text-center text-[#4D4C4C] h-[12rem] mb-4 overflow-scroll">"{props.review}"</p>
      <span className="flex gap-2">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </span>
    </div>
  );
}

export default ReviewCard;
