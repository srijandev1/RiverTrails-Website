import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { FaQuestion } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";




function Content() {
  return (
    <div className='flex w-full h-screen'>
      <section>
      <Navbar />
      </section>
      <section className='py-8 w-full h-screen'>
      <div className="flex justify-between items-center px-8 mb-6">
          <h1 className="font-semibold text-[3rem] text-[#3C3C3C]">Content Manage</h1>
        </div>
        <div className='flex flex-wrap gap-4 px-8'>
        <div className='bg-[#005EE6] text-[white] cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex items-center  justify-center gap-3 text-[1.1rem] h-[4rem] w-[13rem]'><MdDescription size={25}/>

        Landing desc</div>
        <div className='bg-[#005EE6] text-[white] cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex items-center  justify-center gap-3 text-[1.1rem] h-[4rem] w-[13rem]'><MdFeaturedPlayList size={25}/>
        Add features</div>
        <div className='bg-[#005EE6] text-[white] cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex items-center  justify-center gap-3 text-[1.1rem] h-[4rem] w-[13rem]'><MdDescription size={25}/>

        About desc</div>
        <div className='bg-[#005EE6] text-[white] cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex items-center justify-center gap-3 text-[1.1rem] h-[4rem] w-[13rem]'><IoMdPhotos size={25}/>
        Gallery Upload</div>
        <div className='bg-[#005EE6] text-[white] cursor-pointer duration-200 shadow-md rounded-[15px] text-center flex items-center  justify-center gap-3 text-[1.1rem] h-[4rem] w-[13rem]'>
        <FaQuestion size={25}/>
        Add FAQs</div>
        </div>
       
      </section>
    </div>
  )
}

export default Content