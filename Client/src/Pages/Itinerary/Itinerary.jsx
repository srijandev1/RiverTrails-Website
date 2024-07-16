import React, { useState, useEffect } from "react";
import { star, p3, tick, closeB, next } from "../../assets/index";
import ItineraryMenu from "../../Components/ItineraryMenu/ItineraryMenu";
import { itinerary1, addOns1, Name1 } from "./constant1";
import { itinerary2, addOns2, Name2 } from "./constant2";
import { itinerary3, addOns3, Name3 } from "./constant3";
import AddOns from "../../Components/AddOns/AddOns";
import CheckAvailCard from "../../Components/CheckAvailCard/CheckAvailCard";
import GallerySlider from "../../Components/GallerySlider/GallerySlider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import DatesSelect from "../../Components/DatesSelect/DatesSelect";

function Itinerary() {
  const [showPop, setShowPop] = useState(false);
  const handlePopup = () => {
    setShowPop(!showPop);
  };
  const { id } = useParams();
  console.log(id);
  let itineraryMain, addOnsMain, nameMain;
  if (id == "p1") {
    itineraryMain = itinerary1;
    addOnsMain = addOns1;
    nameMain = Name1;
  }
  if (id == "p2") {
    itineraryMain = itinerary2;
    addOnsMain = addOns2;
    nameMain = Name2;
  }
  if (id == "p3") {
    itineraryMain = itinerary3;
    addOnsMain = addOns3;
    nameMain = Name3;
  }
  const [datePopup, setDatePopup] = useState(false);
  useEffect(() => {
    if (datePopup) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [datePopup]);
  const handleDatePopup = () => {
    setDatePopup(!datePopup);
  }

  return (
    <>
      <Navbar />
      <div className="flex px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem] justify-between mb-[4rem] md:mb-[8rem] relative">
        <section className="md:w-[63%]">
          <div className="text-[#696969] text-[0.75rem] md:text-[1rem] font-extralight md:mb-2">
            <a href="">Home</a> {" > "}
            <Link to="">Packages</Link>
            {" > "} <Link> {nameMain.name}</Link>
          </div>
          <h1 className="text-[1.5rem] leading-[2rem]  md:text-[2.5rem] md:leading-[3rem] font-bold text-[#3C3C3C]  md:mb-1">
            {nameMain.name}
          </h1>
          <div className="flex flex-col md:flex-row gap-0 md:gap-6">
            <p className="text-[0.85rem] md:text-[1.1rem]">
              <span className="font-bold">{nameMain.duration} Days</span> of
              Fishing{" "}
              <span className="font-light text-[#696969]">
                ({nameMain.nights} Nights/{nameMain.days} Days)
              </span>
            </p>
            <p className="flex items-center text-[0.85rem] md:text-[1.1rem] font-semibold">
              <img className="w-[1.3rem] mr-[0.45rem]" src={star} alt="" />{" "}
              {nameMain.rating}{" "}
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
              pharetra ultrices rutrum. Vivamus quis aliquam sapien, eget
              commodo sapien. Nullam in diam ac lectus gravida sodales et vel
              ante. Nam in suscipit purus. Praesent eleifend tincidunt arcu, id
              venenatis purus gravida sit
            </p>
          </div>
          <div className="mt-8">
            {itineraryMain.map((iti) => {
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
              {addOnsMain.map((add) => {
                return <AddOns img={add.img} title={add.hed} desc={add.desc} />;
              })}
            </div>
          </div>
        </section>
        <section className={!showPop ? "hidden md:block" : "block md:block"}>
          <CheckAvailCard
            title={nameMain.name}
            rating={nameMain.rating}
            totaldays={nameMain.duration}
            night={nameMain.nights}
            day={nameMain.days}
            onClose={handlePopup}
            datePopup={handleDatePopup}
          />
        </section>
        <div className="md:hidden bg-white shadow-md w-[100vw] fixed bottom-0 left-0 px-8 pb-3 pt-2">
          <div className="flex justify-between items-end">
            {/* pricing */}
            {/* <p>
              <span className="text-[#696969] text-[0.75rem] line-through">
                $ 302.21
              </span>
              <p className="font-medium leading-[1.75rem] text-[1.3rem]">
                $ 205.3{" "}
                <span className="text-[#696969] font-light text-[0.65rem]">
                  per person
                </span>
              </p>
            </p> */}
            <div>
              <h1 className="text-[0.85rem] leading-[1rem] font-semibold text-[#3C3C3C]">
                Time Crunched Package
              </h1>
              <p className="flex items-center gap-1 text-[0.85rem] font-semibold">
                <img className="mb-[0.1rem] w-[1rem]" src={star} alt="" /> 4.6{" "}
              </p>
            </div>
            <p
              onClick={handlePopup}
              className="px-8 py-0 h-[3rem] text-[1rem] bg-[#005EE6] text-white rounded-[10px] flex items-center justify-center "
            >
              Reserve
            </p>
          </div>
        </div>
      <DatesSelect dateSelect = {datePopup} handleDateSelect = {handleDatePopup}/>
      </div>

      <Footer />
    </>
  );
}

export default Itinerary;
