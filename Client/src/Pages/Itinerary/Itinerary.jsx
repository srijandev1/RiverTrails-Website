import React, { useState } from "react";
import { star, p3, tick } from "../../assets/index";
import ItineraryMenu from "../../Components/ItineraryMenu/ItineraryMenu";
import { itinerary, addOns } from "./constant";
import AddOns from "../../Components/AddOns/AddOns";
import CheckAvailCard from "../../Components/CheckAvailCard/CheckAvailCard";
import GallerySlider from "../../Components/GallerySlider/GallerySlider";

function Itinerary() {
  const [showPop, setShowPop] = useState(false);
  const handlePopup = () => {
    setShowPop(!showPop);
  }
  return (
    <div className="flex px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem] justify-between mb-[4rem] md:mb-[8rem]">
      <section className="md:w-[63%]">
        <div className="text-[#696969] text-[0.75rem] md:text-[1rem] font-extralight ">
          <a href="">Home</a> {" > "} <a href="">Packages</a> {" > "}{" "}
          <a href="">Time-crunched Angler</a>
        </div>
        <h1 className="text-[1.5rem] leading-[2rem]  md:text-[3rem] md:leading-[3rem] font-bold text-[#3C3C3C] mb-2 md:mb-3">
          Time-Crunched Angler
        </h1>
        <div className="flex flex-col md:flex-row gap-0 md:gap-6">
          <p className="text-[0.85rem] md:text-[1.1rem]">
            <span className="font-bold">7 Days</span> of Fishing{" "}
            <span className="font-light text-[#696969]">(8 Nights/9 Days)</span>
          </p>
          <p className="flex items-center text-[0.85rem] md:text-[1.1rem] font-semibold">
            <img className="w-[1.3rem] mr-[0.45rem]" src={star} alt="" /> 4.6{" "}
            <span className="ml-1 md:ml-[1rem] text-[#696969] font-extralight">
              12 reviews
            </span>
          </p>
        </div>
        <div className="w-full h-[12rem] md:h-[25rem] mt-4 md:mt-6 rounded-[15px] overflow-hidden">
          {/* <img className="w-full h-full object-cover" src={p3} alt="" /> */}
          <GallerySlider />
        </div>
        <div className="mt-[2rem]">
          <h3 className="font-semibold text-[1.2rem] md:text-[1.3rem] mb-4">
            Highlights
          </h3>
          <div className="flex flex-col gap-2 text-[0.9rem] md:text-[1rem]">
            <p className="flex items-center gap-3">
              <img className="w-[1.1rem] md:w-[1.75rem]" src={tick} alt="" />{" "}
              Freshly Prepared Meals
            </p>
            <p className="flex gap-3">
              <img className="w-[1.1rem] md:w-[1.75rem]" src={tick} alt="" />{" "}
              Beautiful Scenery
            </p>
            <p className="flex gap-3">
              <img className="w-[1.1rem] md:w-[1.75rem]" src={tick} alt="" />{" "}
              Fish alongside a Seasoned Pro
            </p>
            <p className="flex gap-3">
              <img className="w-[1.1rem] md:w-[1.75rem]" src={tick} alt="" />{" "}
              Luxery tents
            </p>
          </div>
        </div>
        <div className="mt-[2rem]">
          <h3 className="font-semibold text-[1.2rem] md:text-[1.3rem] mb-4">
            Itinerary
          </h3>
          <p className="text-justify text-[0.9rem] md:text-[1rem] text-[#696969] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            pharetra ultrices rutrum. Vivamus quis aliquam sapien, eget commodo
            sapien. Nullam in diam ac lectus gravida sodales et vel ante. Nam in
            suscipit purus. Praesent eleifend tincidunt arcu, id venenatis purus
            gravida sit
          </p>
        </div>
        <div className="mt-8">
          {itinerary.map((iti) => {
            return (
              <ItineraryMenu
                day={iti.day}
                title={iti.title}
                details={iti.details}
              />
            );
          })}
        </div>
        <div className="mt-[4rem]">
          <h3 className="font-semibold text-[1.2rem] md:text-[1.3rem] mb-8">
            Optional Add-Ons to Enhance Your Experience
          </h3>
          <div className="flex flex-col gap-8 md:gap-4">
            {addOns.map((add) => {
              return <AddOns img={add.img} title={add.hed} desc={add.desc} />;
            })}
          </div>
        </div>
      </section>
      <section className= {!showPop ? "hidden md:block" : "block md:block"}>
        <CheckAvailCard
          title="Time-Crunched Angler "
          rating="4.5"
          totaldays="7"
          day="9"
          night="8"
          price="$3,200"
          oldprice="$4,800"
          discount="30"
          onClose={handlePopup}
        />
      </section>
      <div className="md:hidden bg-white shadow-md w-[100vw] fixed bottom-0 left-0 px-4 py-4">
      <div className="flex justify-between">
        <p>
          <span className="text-[#696969] text-[0.85rem]">$ 302.21</span>
          <p className="font-medium leading-[1.75rem] text-[1.5rem]">$ 205.3 <span className="text-[#696969] font-light text-[0.85rem]">per person</span></p>
        </p>
       
        <p onClick={handlePopup} className="px-10 py-3 text-[1.2rem] bg-[#005EE6] text-white rounded-[10px] flex items-center justify-center ">
          Reserve
        </p>
      </div>
      </div>
    </div>
  );
}

export default Itinerary;
