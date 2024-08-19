import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import UspCard from "../../components/UspCard/UspCard";
import { UspData } from "../../components/UspCard/UspData";
import UspPopup from "../../components/UspPopup/UspPopup";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Delete from "../../components/Delete/Delete";
import FeaturesP from "../../components/Popups/FeaturesP/FeaturesP";

function FeaturesAdd() {
  const [isDelete, setIsDelete] = useState(false);
  const toggleDelete = () => {
    setIsDelete(!isDelete);
  };
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [popupData, setPopupData] = useState(null);

  const handleCardClick = (data) => {
    setPopupData(data);
  };

  const closePopup = () => {
    setPopupData(null);
  };
  useEffect(() => {
    if (popupData) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [popupData]);
  return (
    <section className="py-8 w-full h-screen">
      <div className="flex justify-between items-center px-8 ">
        <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]">
          {" "}
          <Link to="/content">
            <IoArrowBackOutline />
          </Link>
          Add Features
        </h1>
        <button onClick={togglePopup} className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
          Add Features <FaPlus size={22} />
        </button>
      </div>
      <div className="flex flex-wrap gap-8 p-8">
        {UspData.map((usp, index) => (
          <UspCard
            key={index}
            icon={usp.icon}
            title={usp.title}
            onDelete={toggleDelete}
            onClick={() =>
              handleCardClick({
                icon: usp.icon,
                title: usp.title,
                desc: usp.desc,
                img1: usp.img1,
                img2: usp.img2,
                img3: usp.img3,
              })
            }
          />
        ))}
        {popupData && <UspPopup data={popupData} onClose={closePopup} />}
      </div>
      {isDelete && (
        <Delete onClose={toggleDelete}/>
      )}
      {isOpen && (
        <FeaturesP onPopup={togglePopup}/>
      )}
    </section>
  );
}

export default FeaturesAdd;
