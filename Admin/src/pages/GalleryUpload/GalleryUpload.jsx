import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { photos } from './Photos';

function GalleryUpload() {
  return (
    <div className="flex w-full h-screen">
    <section>
      <Navbar />
    </section>
    <section className="py-8 w-full h-screen ">
    <div className="flex justify-between items-center px-8 mb-6">
      <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]"><IoArrowBackOutline />
      Gallery Photos</h1>
      <button className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
            Add Photos <FaPlus size={22} />
          </button>
    </div>
    <div className='px-8 flex flex-wrap gap-6 w-full h-[80vh] overflow-auto'>
        {
            photos.map((photo => (
                <div className='w-[14rem] h-[9rem] rounded-[7px] relative overflow-hidden'>
                    <img className='object-cover w-full h-full' src={photo.img} alt="" />
                    <div className="absolute bg-white rounded-[50%] p-2 right-3 bottom-3">
                        <MdDelete size={25}/>
                    </div>
                </div>
            )))
        }
    </div>
  
    </section>
  </div>
  )
}

export default GalleryUpload