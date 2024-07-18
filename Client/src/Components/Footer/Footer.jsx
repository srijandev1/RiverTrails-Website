import React from "react";
import footer from "../../assets/footer.svg";
import boat from "../../assets/boat.svg";
import { logoW, fb, whatsapp, insta } from "../../assets/index";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white Z-20 relative ">
      <img className="mb-[-1rem] w-[170rem]" src={footer} alt="" />
      <div className="bg-[#005EE6]  px-[2rem] md:px-[4rem] py-[2rem] md:py-0 md:pb-[2rem] ">
        <div className="flex flex-col-reverse gap-[2.5rem] md:gap-0 md:flex-row items-center md:items-start md:justify-between mb-[2rem]">
          <div className="flex flex-col items-center md:items-start">
            <img className="w-[10rem]" src={logoW} alt="" />
            <p className="mt-4 font-light">Ultimate Fishing Experience</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-3 font-medium">Contacts</h4>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-3">
              <a className="font-extralight" href="">
                info@rivertrails.com
              </a>
              <p className="font-extralight text-center md:text-left">
                Kumaon, Uttarakhand <br /> (Northern India)
              </p>
              <div className="flex gap-[1.1rem] mt-[1rem]">
                <a href="https://www.instagram.com/river__trails/">
                  <img className="w-[1.5rem]" src={insta} alt="" />
                </a>
                <a href="https://www.facebook.com/p/River-Trails-India-100090244353944/">
                  <img className="w-[1.5rem]" src={fb} alt="" />
                </a>
                <a href="#">
                  <img className="w-[1.5rem]" src={whatsapp} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-3 font-medium">Quick Links</h4>
            <div className="flex flex-col items-center md:items-start gap-1 md:gap-2">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/aboutus"
              >
                About Us
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/faq"
              >
                FAQs
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/packages"
              >
                Packages
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/gallery"
              >
                Gallery
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="font-extralight"
                to="/contactus"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-center md:text-left font-medium">
              Subscribe to newsletter
            </h4>
            <form action="">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  className="bg-[#4D8EEE] placeholder:text-white px-4 py-3 rounded-[25px] w-[16rem]"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="bg-[#4D8EEE] placeholder:text-white px-4 py-3 rounded-[25px] w-[16rem]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <button className="bg-white w-[16rem] px-4 py-3 rounded-[25px] text-black mt-6">
                Subsribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-[0.5px] border-[#ffffff21] pt-[2rem]">
          <p className="text-center text-[0.85rem] font-thin">
            © Copyright River Trails. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
