import React from "react";
import FAQsMenu from "../../Components/FAQsMenu/FAQsMenu";
import { QuesAns } from "./constant"
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

function FAQs() {
  return (
    <>
    <Navbar />
    <div className="px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem]">

      <h1 className="font-bold text-[2rem] leading-[2.3rem]  md;text-[2.5rem] md:leading-[2.5rem] text-center text-[#3C3C3C] mb-2 md:mb-4 ">
        Frequently asked questions
      </h1>
      <p className="text-[#696969] text-[0.85rem] md:text-[1rem] text-center font-light mb-10">Everything you need to know about River Trails</p>
      <section className="flex flex-col gap-8 items-center mb-[8rem]">
        {QuesAns.map((faq) => {
          return <FAQsMenu q={faq.ques} a={faq.ans} />
        })}
      </section>
    </div>
    <Footer />
    </>
  );
}

export default FAQs;
