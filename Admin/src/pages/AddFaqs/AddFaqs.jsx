import React, {useState} from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { faqs } from "./FAQs";
import FAQsMenu from "../../components/FAQsMenu/FAQsMenu";
import { Link } from "react-router-dom";
import Delete from "../../components/Delete/Delete";

function AddFaqs() {
  const [isDelete, setIsDelete] = useState(false);
  const toggleDelete = () => {
    setIsDelete(!isDelete);
  };
  return (
    <section className="py-8 w-full h-screen ">
      <div className="flex justify-between items-center px-8 ">
        <h1 className="font-semibold flex items-center gap-4 text-[3rem] text-[#3C3C3C]">
          <Link  to="/content">
            <IoArrowBackOutline />
          </Link>
          Add FAQs
        </h1>
        <button className="text-white flex items-center gap-3 bg-[#005EE6] rounded-[10px] py-3 px-5">
          Add FAQs <FaPlus size={22} />
        </button>
      </div>
      <div className="flex p-8 flex-col gap-8 h-[80vh] overflow-auto">
        {faqs.map((faq) => {
          return <FAQsMenu q={faq.ques} a={faq.ans} onDelete={toggleDelete} />;
        })}
      </div>
      {isDelete && <Delete onClose={toggleDelete} />};
    </section>
  );
}

export default AddFaqs;
