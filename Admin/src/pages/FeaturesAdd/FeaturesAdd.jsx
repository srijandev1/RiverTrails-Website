import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { IoArrowBackOutline } from "react-icons/io5";
import UspCard from '../../components/UspCard/UspCard'
import { UspData } from '../../components/UspCard/UspData';
import UspPopup from '../../components/UspPopup/UspPopup'
import { FaPlus } from "react-icons/fa6";

function FeaturesAdd() {
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
    <div className='flex w-full h-screen'>
    <section>
        <Navbar/>
    </section>
    <section className='py-8 w-full h-screen'>
    <div className="flex justify-between items-center px-8 mb-6">
      <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]"><IoArrowBackOutline />
      Add Features</h1>
      <button className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
            Add Features <FaPlus size={22} />
          </button>
    </div>
    <div className="flex flex-wrap gap-8 px-8">
          {UspData.map((usp, index) => (
            <UspCard
              key={index}
              icon={usp.icon}
              title={usp.title}
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
    </section>
</div>
  )
}

export default FeaturesAdd