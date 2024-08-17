import React from "react";

function Delete({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white  px-10 py-8 rounded-[15px]">
        <h1  className="text-[1.3rem] text-center mb-6">
        Confirm delete ?
        </h1>
      
        <div className="flex gap-6 items-center">
            <button onClick={onClose} className="px-8 py-2 rounded-[7px] border-[1px] border-black">Cancel</button>
            <button onClick={onClose} className="px-8 py-2 rounded-[7px] border-[1px] border-black text-white bg-black">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
