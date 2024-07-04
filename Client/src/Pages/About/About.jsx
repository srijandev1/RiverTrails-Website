import React from "react";
import { bgImg, about, p5, p3 } from "../../assets";
import Navbar from './../../Components/Navbar/Navbar';
import Footer from './../../Components/Footer/Footer';

function About() {
  return (<>
    <Navbar />
    <div className="px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem]">
      <h1 className="px-[1rem] md:px-[0] text-center md:text-left font-bold text-[2.75rem] md:text-[3.5rem] leading-[2.85rem] md:leading-[3.5rem] text-[#3C3C3C]">
        A Dream Realized by <br />{" "}
        <span className="text-[#005EE6]">the River</span>
      </h1>
      <div className="w-full h-[17rem] md:h-[30rem] mt-4 bg-black relative mb-[17rem] md:mb-10">
        <img className="w-full h-full object-cover" src={bgImg} alt="" />
        <div className="bg-white shadow-md w-[80vw] md:w-[40rem] py-4 flex flex-col items-center absolute bottom-[-25rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:bottom-[-5rem] md:left-[3rem] rounded-[20px]">
          <img className="w-[90%]" src={about} alt="" />
          <p className="text-justify text-[#7A8189] font-light text-[0.85rem] w-[90%] mt-2 md:mt-0 md:mb-3">
            River Trails is more than just a fishing camp; it's the culmination
            of a lifelong passion for the mighty Golden Mahseer and the
            breathtaking beauty of the Pancheshwar region. Founded in 2021 by
            Daniel Abraham, a seasoned angler with over 20 years of experience
            on these very waters, River Trails embodies the spirit of adventure
            and the pursuit of a legendary catch.
          </p>
        </div>
      </div>
      <section className="">
        <h2 className="text-left md:text-right text-[1.75rem] md:text-[2.5rem] leading-[2rem] md:leading-[2.75rem] font-bold text-[#3C3C3C] mb-4">
          A Haven for Anglers and <br /> Foodies Alike
        </h2>
        <p className="text-justify text-[#7A8189] font-light">
          <span className="text-[#005EE6] font-normal">At River Trails</span>, we understand
          that a successful fishing adventure is fuelled not just by adrenaline,
          but also by delicious and satisfying meals. Our chefs prepare a
          delectable spread that caters to all dietary preferences, from
          vegetarian delights to mouthwatering non-vegetarian options. Imagine
          indulging in fresh pizzas, succulent BBQ, and a variety of other
          dishes, all culminating in a delightful dessert to top off each meal.
        </p>
      </section>
      <section className="flex flex-col md:flex-row gap-[2rem] md:gap-[4rem] my-[2rem] md:my-[5rem]">
        <div className="flex flex-col-reverse md:flex-col gap-6 md:w-[70rem]">
          <div className="w-full">
            <h2 className="text-[1.75rem] md:text-[2.5rem] leading-[2rem] md:leading-[2.75rem]  font-bold text-[#3C3C3C] mb-4">
              Following a Passion, Sharing an Experience
            </h2>
            <p className="text-justify text-[#7A8189] font-light">
              Driven by his own love for the sport, <span className="text-[#005EE6] font-normal">Daniel</span> envisioned a space
              where anglers could share his passion for <span className="text-[#005EE6] font-normal">The Golden Mahseer and
                the magic of the Pancheshwar.</span> Leaving behind the corporate world,
              he embraced the opportunity to follow his dream and create an
              unforgettable experience for fellow fishing enthusiasts.
            </p>
          </div>
          <div className="w-full h-[20rem] md:h-[40rem]">
            <img className="w-full h-full object-cover" src={p5} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:w-[70rem]">
          <div className="w-full h-[20rem] md:h-[40rem]">
            <img className="w-full h-full object-cover" src={p3} alt="" />
          </div>
          <div className="w-full">
            <h2 className="text-[1.75rem] md:text-[2.5rem] leading-[2rem] md:leading-[2.75rem]  font-bold text-[#3C3C3C] mb-4">
              From Pop-Up Camps to a Permanent Home
            </h2>
            <p className="text-justify text-[#7A8189] font-light">
              Daniel's journey began with hosting successful Golden Mahseer
              expeditions through a series of satellite camps. His dedication
              and expertise attracted a team of exceptional guides who possess
              an unparalleled understanding of the Pancheshwar's currents and
              secrets. This deep knowledge of the river ensures you'll be
              strategically positioned for the ultimate fishing experience.
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </>
  );
}

export default About;
