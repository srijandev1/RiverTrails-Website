import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { IoArrowBackOutline } from "react-icons/io5";


function LandingDesc() {
  return (
    <div className='flex w-full h-screen'>
        <section>
            <Navbar/>
        </section>
        <section className='py-8 w-full h-screen'>
        <div className="flex justify-between items-center px-8 mb-6">
          <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]"><IoArrowBackOutline />
          Landing Desc</h1>

        </div>
        <div className='p-8 flex flex-col gap-4'>
            <textarea className='w-[50rem] border-[black] rounded-[5px] border-[2px] h-[10rem] p-4' placeholder='Enter you content here...' name="" id=""></textarea>
            <button className='bg-[#005EE6] text-white rounded-[10px] w-[8rem] py-2'>Save</button>
        </div>
        </section>
    </div>
  )
}

export default LandingDesc