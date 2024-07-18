import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem] h-[100vh]">
        <p className="text-center text-[#005EE6] text-[0.75rem] md:text-[0.85rem] font-medium">
          CONTACT US
        </p>
        <h1 className="font-bold text-[1.7rem] leading-[2rem]  md:text-[2.5rem] md:leading-[2.5rem] text-center text-[#3C3C3C] mb-1 md:mb-2 ">
          How can I help you?
        </h1>
        <p className="text-[#7A8189] text-[0.75rem] md:text-[0.85rem] text-center mb-3 md:mb-4">
          Or just reach out manually to{" "}
          <span className="text-[#005EE6]">info@rivertrailsindia.com</span>{" "}
        </p>
        <div className="flex flex-col gap-1 md:gap-4 items-center">
          <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 w-[100%] md:w-[40%]">
            <label className="text-[0.85rem]"  htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-2 placeholder:text-[#A0A0A0]"
              type="text"
              placeholder="e.g. John"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 w-[100%] md:w-[40%]">
            <label className="text-[0.85rem]"  htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-2 placeholder:text-[#A0A0A0]"
              type="email"
              placeholder="e.g. johnsmith@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 w-[100%] md:w-[40%]">
            <label className="text-[0.85rem]"  htmlFor="email">Phone No</label>
            <input
              id="phoneno"
              className="w-full border-[1.5px] border-[#005EE6] rounded-[7px] p-2 placeholder:text-[#A0A0A0]"
              type="number"
              placeholder="e.g. +91 9804573245"
            />
          </div>
          <div className="flex flex-col gap-[0.3rem] mb-3 md:mb-0 w-[100%] md:w-[40%]">
            <label className="text-[0.85rem]" htmlFor="email">Message</label>
            <textarea
              id="phoneno"
              className="w-full h-[8rem] border-[1.5px] border-[#005EE6] rounded-[7px] p-2 placeholder:text-[#A0A0A0]"
              type="number"
              placeholder="Enter you message here..."
              name=""
             
            ></textarea>
            <button className="bg-[#005EE6] text-white p-3 text-[1.2rem] mt-8 rounded-[10px]">Send</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
