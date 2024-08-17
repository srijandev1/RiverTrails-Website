import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { MdDescription, MdFeaturedPlayList } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

function Content() {
  return (
    <section className="py-8 w-full h-screen">
      <div className="flex justify-between items-center px-8 mb-6">
        <h1 className="font-semibold text-[3rem] text-[#3C3C3C]">
          Content Manage
        </h1>
      </div>
      <div className="flex flex-wrap gap-4 px-8">
        <Link
          to="landingdesc"
          className="bg-[#005EE6] text-white cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex flex-col items-center justify-center gap-3 text-[1.1rem]  py-8 w-[13rem]"
        >
          <MdDescription size={50} />
          Landing desc
        </Link>
        <Link
          to="features"
          className="bg-[#005EE6] text-white cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex flex-col items-center justify-center gap-3 text-[1.1rem]  py-8 w-[13rem]"
        >
          <MdFeaturedPlayList size={50} />
          Add features
        </Link>
        <Link
          to="aboutdesc"
          className="bg-[#005EE6] text-white cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex flex-col items-center justify-center gap-3 text-[1.1rem]  py-8 w-[13rem]"
        >
          <MdDescription size={50} />
          About desc
        </Link>
        <Link
          to="gallery"
          className="bg-[#005EE6] text-white cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex flex-col items-center justify-center gap-3 text-[1.1rem]  py-8 w-[13rem]"
        >
          <IoMdPhotos size={50} />
          Gallery Upload
        </Link>
        <Link
          to="faqs"
          className="bg-[#005EE6] text-white cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex flex-col items-center justify-center gap-3 text-[1.1rem]  py-8 w-[13rem]"
        >
          <FaQuestion size={50} />
          Add FAQs
        </Link>
      </div>
    </section>
  );
}

export default Content;
