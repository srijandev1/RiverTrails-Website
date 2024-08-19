import React, { useState, useRef } from "react";
import { closeB } from "../../../assets";

function FeaturesP({ onPopup }) {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[25rem]  px-8 py-6 rounded-[15px]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[1.3rem]">Add Features</h1>
          <img
            onClick={onPopup}
            className="w-[1.5rem] cursor-pointer"
            src={closeB}
            alt=""
          />
        </div>

        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 border-black border-[1px] rounded-[5px] cursor-pointer"
            ref={fileInputRef}
          />

          {image && (
            <div className="relative">
              <img
                src={image}
                alt="Uploaded"
                className="w-[7rem]  rounded shadow-lg"
              />
              <button
                onClick={handleRemoveImage}
                className="absolute top-0 right-[-2rem] bg-white text-black  rounded-[5px] p-2 hover:bg-[#ffffffb5]"
              >
                <img className="w-[0.75rem]" src={closeB} alt="" />
              </button>
            </div>
          )}
          <label className="flex flex-col w-full" htmlFor="" id="">
            Add title
            <input
              className="border-black border-[1.5px] p-2 rounded-[5px]"
              type="text"
            />
          </label>
          <button
            onClick={onPopup}
            className="w-full text-white bg-[#005EE6] p-3 mt-8 rounded-[5px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesP;
