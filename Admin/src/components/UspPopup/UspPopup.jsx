import React, { useRef, useEffect } from "react";
import { closeB } from "../../assets";

const UspPopup = ({ data, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-10">
      <div ref={popupRef} className="bg-white p-6 rounded-[15px] shadow-md w-[90vw] md:w-[40rem]">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-3 md:text-[1.1rem]">
            <img src={data.icon} alt="" />
            {data.title}
          </p>
          <img  onClick={onClose} className="w-[1rem] ml-4 cursor-pointer" src={closeB} alt="" />
        </div>
        <p className="text-[#676767] font-light mt-4">{data.desc}</p>
        <div className="flex justify-between mt-4 mb-1">
          <img className="w-[5.3rem] md:w-[11.5rem] h-[4rem] md:h-[8rem] object-cover" src={data.img1} alt="" />
          <img className="w-[5.3rem] md:w-[11.5rem] h-[4rem] md:h-[8rem] object-cover" src={data.img2} alt="" />
          <img className="w-[5.3rem] md:w-[11.5rem] h-[4rem] md:h-[8rem] object-cover" src={data.img3} alt="" />
        </div>
      
      </div>
    </div>
  );
};
export default UspPopup;
