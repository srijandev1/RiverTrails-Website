import React, { useState, useEffect } from "react";
import { addonsData } from "./addons";
import { close } from "../../assets";

function SelectAddons({ togglePopup, handleSave, selectedAddons }) {
  const [currentSelectedAddons, setCurrentSelectedAddons] = useState([]);
  useEffect(() => {
    setCurrentSelectedAddons(selectedAddons);
  }, [selectedAddons]);

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const addon = addonsData.find((addon) => addon.id === id);

    setCurrentSelectedAddons((prevSelected) =>
      checked
        ? [...prevSelected, addon]
        : prevSelected.filter((selectedAddon) => selectedAddon.id !== id)
    );
  };

  const handleSaveClick = () => {
    handleSave(currentSelectedAddons);
  };
  return (
    <div className="absolute  inset-0 z-40 flex items-center justify-center ">
      <div className="bg-white flex flex-col items-center shadow-md  p-6 rounded-[15px]  w-[19rem] md:w-[20rem]">
        <p className="flex w-full justify-between items-center mb-4 font-medium text-[0.9rem] text-[#005EE6]">
          Select Addons{" "}
          <img
            onClick={togglePopup}
            className="cursor-pointer"
            src={close}
            alt=""
          />
        </p>
        <div className="flex flex-col gap-2">
          {addonsData.map((data) => (
            <label
              className="cursor-pointer text-black"
              htmlFor={data.id}
              key={data.id}
            >
              <input
                onChange={handleCheckboxChange}
                type="checkbox"
                name=""
                checked={currentSelectedAddons.some(
                  (addon) => addon.id === data.id
                )}
                id={data.id}
              />{" "}
              {data.title}
            </label>
          ))}
        </div>
        <button
          onClick={() => {
            handleSaveClick();
            togglePopup();
          }}
          className="bg-[#005EE6]  text-white py-2 px-6 cursor-pointer rounded-[10px] mt-6"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SelectAddons;
