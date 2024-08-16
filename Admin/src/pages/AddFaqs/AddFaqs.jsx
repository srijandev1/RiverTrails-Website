import React from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { faqs } from './FAQs';
import FAQsMenu from '../../components/FAQsMenu/FAQsMenu'

function AddFaqs() {
  return (
    <div className="flex w-full h-screen">
    <section>
      <Navbar />
    </section>
    <section className="py-8 w-full h-screen ">
    <div className="flex justify-between items-center px-8 mb-6">
      <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]"><IoArrowBackOutline />
      Add FAQs</h1>
      <button className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
            Add FAQs <FaPlus size={22} />
          </button>
    </div>
    <div className="flex px-8 flex-col gap-8 h-[80vh] overflow-auto">
        {faqs.map((faq) => {
          return <FAQsMenu q={faq.ques} a={faq.ans} />
        })}
      </div>
   
  
    </section>
  </div>
  )
}

export default AddFaqs