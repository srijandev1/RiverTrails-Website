import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaPlus } from "react-icons/fa6";
import PackageCard from "../../components/PackageCard/PackageCard";
import { PackageData } from "../../components/PackageCard/Package";
import PackagePopup from "../../components/PackagePopup/PackagePopup";

function Package() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  return (
    <div className="flex w-full h-screen">
      <section>
        <Navbar />
      </section>
      <section className="py-8 w-full h-screen relative">
        <div className="flex justify-between items-center px-8">
          <h1 className="font-semibold text-[3rem] text-[#3C3C3C]">Package</h1>
          <button  onClick={togglePopup} className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
            Add Packages <FaPlus size={22} />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-x-8 h-[80vh] py-4 px-8 overflow-auto">
          {PackageData.map((data) => (
            <PackageCard
              img={data.thumbnail}
              title={data.heading}
              rating={data.rating}
              night={data.nights}
              day={data.days}
            />
          ))}
        </div>
        <PackagePopup isOpen={isPopupOpen} onClose={togglePopup}/>
      </section>
    </div>
  );
}

export default Package;
