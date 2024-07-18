import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logoB, star } from "../../assets";

function RequestBooking() {
  const location = useLocation();
  const { selectedDateData, selectedAddons, itiData, anglerSpaces } =
    location.state || {};
  const [anglerSpaces1, setAnglerSpaces1] = useState(anglerSpaces);
  const handleIncrement = () => {
    setAnglerSpaces1((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleDecrement = () => {
    setAnglerSpaces1((prev) => (prev > 1 ? prev - 1 : prev));
  };
  return (
    <div className="w-full h-full relative ">
      <div className=" px-[1.5rem] md:px-[3rem] bg-[#ffffff] ">
        <div className="flex items-center justify-between  py-3 border-b-[0.5px] border-solid border-[#0000003a] mb-8">
          <Link to="/">
            <img className="w-[5rem] md:w-[6rem]" src={logoB} alt="" />
          </Link>
        </div>
        <div className="mb-5 md:mb-8">
          {itiData.title && (
            <h1 className="text-[1.5rem] leading-[2rem]  md:text-[2.5rem] md:leading-[3rem] font-bold text-[#3C3C3C]  md:mb-1">
              {itiData.title}
            </h1>
          )}
          {/* <h1 className="text-[1.5rem] leading-[2rem]  md:text-[2.5rem] md:leading-[3rem] font-bold text-[#3C3C3C]  md:mb-1">
            Time-Crunched Angler
          </h1> */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-6">
            <p className="text-[0.85rem] md:text-[1.1rem]">
              <span className="font-bold">7 Days</span> of Fishing{" "}
              <span className="font-light text-[#696969]">
                ({itiData.night && `${itiData.night} Nights`}/{" "}
                {itiData.days && `${itiData.days} Days`})
              </span>
            </p>
            <p className="flex items-center text-[0.85rem] md:text-[1.1rem] font-semibold">
              <img className="w-[1.3rem] mr-[0.45rem]" src={star} alt="" />{" "}
              {itiData.rating && `${itiData.rating}`}{" "}
              <span className="ml-1 md:ml-[1rem] text-[#696969] font-extralight">
                (12 reviews)
              </span>
            </p>
          </div>
        </div>
        <div className="md:absolute md:right-0 md:top-0 bg-white rounded-[10px] md:rounded-none shadow-md md:h-[100vh] md:mb-0 mb-10 md:w-[30vw] px-6 py-4 md:p-8">
          <h2 className="font-medium md:text-[1.2rem] mb-4">
            Package overview
          </h2>
          <div className="md:flex flex-col justify-between md:h-[85vh]">
            <div>
              <div className="mb-8">
                <h3 className="text-[#3C3C3C] text-[0.9rem] md:text-[1rem] flex justify-between items-center mb-2">
                  Total duration{" "}
                  <p className="text-[0.75rem] md:text-[0.85rem] text-[#005EE6] font-light">
                    Change Date
                  </p>
                </h3>
                {selectedDateData && (
                  <div className="bg-[#F2F2F2] flex justify-between p-3 rounded-[10px] mb-2">
                    <p className="">
                      <span className="text-[0.75rem] block mb-[-0.2rem] font-light text-[#858585]">
                        Start
                      </span>
                      {selectedDateData.startDay.substring(0, 3)},{" "}
                      {selectedDateData.startDate}
                    </p>
                    <p className="">
                      <span className="text-[0.75rem] block mb-[-0.2rem] font-light text-[#858585]">
                        End
                      </span>
                      {selectedDateData.endDay.substring(0, 3)},{" "}
                      {selectedDateData.endDate}
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-8">
                <h3 className="text-[#3C3C3C] text-[0.9rem] md:text-[1rem]  mb-2">
                  Angler Spaces
                </h3>
                <div className="mb-2 relative  bg-[#F2F2F2]   rounded-[12px] flex items-center justify-center text-[1.2rem] md:w-[55%] h-[3rem]">
                  {anglerSpaces1}
                  <button
                    onClick={handleDecrement}
                    className="absolute left-[0.2rem]  text-white bg-[#005EE6] w-[2.5rem] h-[2.5rem] rounded-[10px]"
                  >
                    -
                  </button>
                  <button
                    onClick={handleIncrement}
                    className="absolute right-[0.2rem] text-white bg-[#005EE6] w-[2.5rem] h-[2.5rem] rounded-[10px]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-[#3C3C3C] text-[0.9rem] md:text-[1rem]  flex justify-between items-center mb-2">
                  Add Ons selected{" "}
                  <p className="text-[0.75rem] md:text-[0.85rem] text-[#005EE6] font-light">
                    Change selection
                  </p>
                </h3>
                {selectedAddons && (
                  <div className="mb-2 flex flex-col gap-2 text-[0.85rem]">
                    {selectedAddons.map((data) => (
                      <div className="">{data.title}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="">
              <button className="bg-[#005EE6] hidden md:block text-white p-4 rounded-[10px] w-full mt-8">
              Request to Book
              </button>
              <p className="text-[#696969]  text-[0.85rem] text-center font-light mt-4">
                You won’t be charged yet
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[68%]">
          <h2 className=" text-[#3C3C3C] font-medium mb-4">
            Enter your details
          </h2>
          <div className="mb-10">
            <div className="md:flex justify-between md:mb-6">
              <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 md:w-[49%]">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                  type="text"
                  placeholder="e.g. John"
                />
              </div>
              <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 md:w-[49%]">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                  type="text"
                  placeholder="e.g. Smith"
                />
              </div>
            </div>
            <div className="md:flex justify-between">
              <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 md:w-[49%]">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                  type="text"
                  placeholder="e.g. johnsmith@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 md:w-[49%]">
                <label htmlFor="phone">Phone No</label>
                <input
                  id="phone"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                  type="text"
                  placeholder="e.g. +91 9804573245"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="md:flex justify-between md:mb-6">
              <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 md:w-[49%]">
                <label htmlFor="addr">Address</label>
                <input
                  id="addr"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                  type="text"
                  placeholder="e.g. Ratan Apt, S V Rd, Opp Shimpoli Rd, Borivali West"
                />
              </div>
              <div className="flex justify-between md:w-[49%] gap-5 mb-3 md:mb-0">
                <div className="flex flex-col gap-[0.3rem] md:w-[100%]">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                    type="text"
                    placeholder="e.g. Mumbai"
                  />
                </div>
                <div className="flex flex-col gap-[0.3rem] md:w-[100%]">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    id="pincode"
                    className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3 placeholder:text-[#A0A0A0]"
                    type="no"
                    placeholder="e.g. e.g. 400092"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex flex-col gap-[0.3rem] w-[48%] md:w-[23.5%]">
                <label htmlFor="country">Country</label>
                <select
                  name=""
                  id="country"
                  className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-3"
                >
                  <option className="text-[#A0A0A0]" value="India">
                    Select Country
                  </option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button className="bg-[#005EE6]  text-white p-4 rounded-[10px] w-full mb-[4rem] mt-8">
            Request to Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default RequestBooking;
