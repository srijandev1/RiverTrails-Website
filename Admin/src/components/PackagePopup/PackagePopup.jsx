import React from "react";
import { closeB } from "../../assets";

function PackagePopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70vw] h-[85vh] px-8 py-6 rounded-[15px]">
        {/* heading */}
        <div className="flex justify-between items-center">
          <h1 className="text-[1.3rem]">Add Packages</h1>
          <img onClick={onClose} className="w-[1.5rem] cursor-pointer" src={closeB} alt="" />
        </div>
        {/* content */}
        
      </div>
    </div>
  );
}

export default PackagePopup;
