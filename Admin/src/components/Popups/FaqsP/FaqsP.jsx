import React, { useState, useRef } from "react";
import { closeB } from "../../../assets";


function FaqsP({ onPopup }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white w-[35rem]  px-8 py-6 rounded-[15px]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[1.3rem]">Add FAQs</h1>
        <img
          onClick={onPopup}
          className="w-[1.5rem] cursor-pointer"
          src={closeB}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="question">
        Question
            <input placeholder="Enter question here..." id="question" className="w-full p-2 border-black border-[1.5px] rounded-[5px]" type="text" />
        </label>
        <label htmlFor="answer">
        Answer
            <textarea placeholder="Enter answere here..." id="answer" className="w-full p-2 border-black border-[1.5px] h-[10rem] rounded-[5px] text-[0.9rem]" name=""></textarea>
        </label>
      </div>
    
      <button
        onClick={onPopup}
        className="w-full text-white bg-[#005EE6] p-3 mt-8 rounded-[5px]"
      >
        Save
      </button>
    </div>
  </div>
  )
}

export default FaqsP