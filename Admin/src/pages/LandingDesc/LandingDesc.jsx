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
        <div className='p-8'>
            <textarea className='w-[40rem]' name="" id=""></textarea>
        </div>
        </section>
    </div>
  )
}

export default LandingDesc