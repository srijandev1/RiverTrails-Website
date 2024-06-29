import React, {useState} from "react";
import {
  logoW,
  logoB,
  tackle,
  shape,
  whatsapp,
  fb,
  insta,
  landing,
  tents,
  meals,
  shop,
  scene,
  custom,
  guide,
  about,
  p1,
  p2,
  p3,
  p4,
  p5,
  bgImg,
  r1,
  r2,
  r3,
} from "../../assets";
import UspCard from "../../Components/UspCard/UspCard";
import PackageCard from "../../Components/PackageCard/PackageCard";
import ReviewCard from "../../Components/ReviewCard/ReviewCard";
import { IoMenu, IoClose } from "react-icons/io5";


function Home() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <div className="bg-black w-full md:h-screen px-[1.5rem] md:px-[3rem] pb-10 py-6">
        <header className="flex items-center justify-between">
          <img  src={logoW} alt="" />
          <nav className="hidden md:flex text-white gap-[4rem] items-center">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Packages</a>
            <a href="#">FAQs</a>
            <div className="flex gap-[1.5rem]">
              <a href="#">
                <img className="w-[1.5rem]" src={insta} alt="" />
              </a>
              <a href="#">
                <img className="w-[1.5rem]" src={fb} alt="" />
              </a>
              <a href="#">
                <img className="w-[1.5rem]" src={whatsapp} alt="" />
              </a>
            </div>
          </nav>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
          {!nav ? <IoClose size={30} color="white"/> :  <IoMenu size={30} color="white"/>}
        </div>
        <nav className={!nav ? "md:hidden shadow-md flex flex-col gap-4 fixed left-0 top-0 w-[60%] bg-white h-screen pt-3 pl-[1.5rem] ease-in-out duration-500" : "fixed left-[-100%]"}>
        <img className="w-[7rem]" src={logoB} alt="" />
        <div className="flex flex-col gap-6 pl-3 pt-4">
        <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Packages</a>
          <a href="#">FAQs</a>
          <div className="flex gap-[1rem]">
            <a href="#">
              <img className="w-[1.5rem]" src={insta} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={fb} alt="" />
            </a>
            <a href="#">
              <img className="w-[1.5rem]" src={whatsapp} alt="" />
            </a>
            </div>
        </div>
       
        </nav>
        </header>
        <section className="flex flex-col-reverse md:flex-row items-start justify-center md:justify-between pt-0 md:pt-[4rem]">
          <div className="text-center md:text-left">
            <h1 className="text-white text-[4.4rem] md:text-[7rem] font-bold mt-0 md:mt-[4rem] relative">
              Ultimate{" "}
              <img
                className="absolute w-[7rem] md:w-[10rem] top-[-3.5rem] left-1 md:top-[-4.5rem] md:left-3"
                src={tackle}
                alt=""
              />
              <img
                className="absolute w-[3rem] md:w-[5rem] right-[-1rem] top-4 md:right-[11.5rem] md:top-6"
                src={shape}
                alt=""
              />
            </h1>
            <h1 className="text-[2.2rem] md:text-[5rem] font-extralight text-white leading-3 md:leading-7">
              Fishing Experience
            </h1>
            <p className="text-[#DADADA] font-extralight w-[full] md:w-[40rem] text-justify mt-[2rem] md:mt-[4rem] text-[0.85rem] md:text-[0.95rem]">
              This fishing journey requires driving on Himalayan switch back
              roads for long hours, fishing and hiking to get to the best waters
              in high temperatures that are ideal for Golden Mahseer fishing. 
            </p>
            <button className="text-black bg-white border-none rounded-[15px] w-full md:w-[20rem] py-4 px-8 text-[1.1rem] font-medium mt-[2rem] md:mt-[4rem]">
              Plan your Dream trip now
            </button>
          </div>
          <div className="">
            <img className="w-[20rem] md:w-[35rem]" src={landing} alt="" />
          </div>
        </section>
      </div>
      {/* Features */}
      <section className="py-[3rem] px-[2rem] md:p-[4rem]">
        <div className="flex flex-col items-center mb-6 md:mb-9">
          <p className="text-[#005EE6] font-medium text-[0.85rem]">FEATURES</p>
          <h2 className="text-[#383838] text-center text-[1.75rem] leading-8 md:text-[1.75rem] font-semibold ">
            What this place offers
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-7">
          <UspCard icon={tents} desc="Luxery Tents" />
          <UspCard icon={custom} desc="Customize Your Itinerary" />
          <UspCard icon={meals} desc="Freshly Prepared Meals" />
          <UspCard icon={shop} desc="One-Stop Shop for Fishing Needs" />
          <UspCard icon={scene} desc="Unwind in a Serene Location" />
          <UspCard icon={guide} desc="Camp Owner as Your Guide" />
        </div>
      </section>
      {/* About us */}
      <section className="p-[3rem] md:p-[3rem] md:relative overflow-hidden">
        <div className="flex flex-col  mb-9">
          <p className="text-[#005EE6] text-center md:text-left font-medium text-[0.85rem]">ABOUT US</p>
          <h2 className="text-[#383838]  text-center md:text-left text-[1.75rem] leading-8 md:text-[1.75rem] font-semibold ">
            Your River Rails
          </h2>
          <p className="text-[#676767] font-light mt-4 w-full md:w-[50%] text-justify	">
            River Trails is more than just a fishing camp; it's the culmination
            of a lifelong passion for the mighty Golden Mahseer and the
            breathtaking beauty of the Pancheshwar region. Founded in 2021 by
            Daniel Abraham, a seasoned angler with over 20 years of experience
            on these very waters, River Trails embodies the spirit of adventure
            and the pursuit of a legendary catch.
            <span className="text-[#005EE6] block mt-2 text-[0.85rem]">
              Learn More {" ->"}
            </span>
          </p>
        </div>
        <img
          className="md:w-[50rem] md:absolute md:top-[6rem] md:right-[-8rem]"
          src={about}
          alt=""
        />
      </section>
      {/* Packages */}
      <section className="py-[4rem] px-0 md:px-[4rem]">
        <div className="flex flex-col items-center mb-9">
          <p className="text-[#005EE6] font-medium text-[0.85rem]">PACKAGES</p>
          <h2 className="text-[#383838]  text-center text-[1.75rem] leading-8 md:text-[1.75rem] font-semibold ">
            Your Dream Tour
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
          <PackageCard
            img={p1}
            title="Time-Crunched Angler "
            rating="4.5"
            reviews="12"
            day="9"
            night="8"
            price="$3,200"
          />
          <PackageCard
            img={p2}
            title="Easy Going Angler "
            rating="4.8"
            reviews="52"
            day="11"
            night="10"
            price="$2,000"
          />
          <PackageCard
            img={p4}
            title="Exploring Angler "
            rating="4.5"
            reviews="12"
            day="11"
            night="13"
            price="$3,200"
          />
          <PackageCard
            img={p3}
            title="Time-Crunched Angler"
            rating="4.5"
            reviews="12"
            day="11"
            night="13"
            price="$3,200"
          />
        </div>
      </section>
      {/* Gallery */}
      <section className="p-[4rem] hidden md:block">
        <div className="flex flex-col items-center mb-9">
          <p className="text-[#005EE6] font-medium text-[0.85rem]">GALLERY</p>
          <h2 className="text-[#383838]  text-center text-[1.75rem] leading-8 md:text-[1.75rem] font-semibold ">
            River Rails’s Gallery
          </h2>
        </div>
        <div className="flex gap-4 w-full">
          <div className="w-[50%] h-[30rem] bg-black rounded-[10px] overflow-hidden">
            <img className="w-full h-full object-cover" src={bgImg} alt="" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-[29rem] h-[14.5rem] bg-black rounded-[10px] overflow-hidden">
                <img className="w-full h-full object-cover" src={p1} alt="" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[14rem] h-[14.5rem] bg-black rounded-[10px] overflow-hidden">
                <img className="w-full h-full object-cover" src={p3} alt="" />
              </div>
              <div className="w-[14rem] h-[14.5rem] bg-black rounded-[10px] overflow-hidden">
                <img className="w-full h-full object-cover" src={p4} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-[14rem] h-[14.5rem] bg-black rounded-[10px] overflow-hidden">
              <img className="w-full h-full object-cover" src={p5} alt="" />
            </div>
            <div className="w-[14rem] h-[14.5rem] rounded-[10px] overflow-hidden">
              <img className="w-full h-full object-cover" src={p2} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section className="p-[4rem] hidden md:block">
        <div className="flex flex-col items-center mb-9">
          <p className="text-[#005EE6] font-medium text-[0.85rem]">REVIEWS</p>
          <h2 className="text-[#383838]  text-center text-[1.75rem] leading-8 md:text-[1.75rem]font-semibold ">
            Our Angler’s kind words
          </h2>
        </div>
        <div className="flex justify-between">
          <button>(</button>
          <div className="flex gap-10">
            <ReviewCard img={r1} name="Srijan Dev" desig="Fullstack developer" review="Thanks to River Rails I can now realize my dream of fishing around the world"/>
            <ReviewCard img={r2} name="Om Sinkar" desig="Fullstack developer" review="Thanks to River Rails I can now realize my dream of fishing around the world"/>
            <ReviewCard img={r3} name="Suresh Raj" desig="UI/UX Designer" review="Thanks to River Rails I can now realize my dream of fishing around the world"/>
          </div>
          <button>)</button>
        </div>
      </section>
    </>
  );
}

export default Home;
