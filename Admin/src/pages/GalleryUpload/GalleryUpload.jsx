import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { photos } from "./Photos";
import { Link } from "react-router-dom";
import Delete from "../../components/Delete/Delete";

function GalleryUpload() {
  const [isDelete, setIsDelete] = useState(false);
  const toggleDelete = () => {
    setIsDelete(!isDelete);
  };
  return (
    <section className="py-8 w-full h-screen ">
      <div className="flex justify-between items-center px-8 mb-6">
        <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]">
          <Link to="/content">
            <IoArrowBackOutline />
          </Link>
          Gallery Photos
        </h1>
        <button className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
          Add Photos <FaPlus size={22} />
        </button>
      </div>
      <div className="px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full h-[80vh] overflow-auto">
        {photos.map((photo) => (
          <div className="w-full h-[9rem] rounded-[7px] relative overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={photo.img}
              alt=""
            />
            <div
              onClick={toggleDelete}
              className="absolute right-3 bottom-3 rounded-[10px] shadow-md bg-[white] hover:bg-[black] hover:text-[white] cursor-pointer duration-200 p-2"
            >
              <MdDelete size={25} />
            </div>
          </div>
        ))}
      </div>
      {isDelete && <Delete onClose={toggleDelete} />}
    </section>
  );
}

export default GalleryUpload;
