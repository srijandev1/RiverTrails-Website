import React from "react";
import { p1, p2, p3, p4, p5 } from "../../assets";
import PackageCard from "../../Components/PackageCard/PackageCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from './../../Components/Footer/Footer';
import { Link } from 'react-router-dom'

function Packages() {
  return (
    <>
      <Navbar />
      <div className=" px-[2rem] md:px-[3rem] pt-[5rem] md:pt-[7rem]">
        <p className="text-[#005EE6] text-[0.85rem] md:text-[1rem] text-center font-medium">
          PACKAGES
        </p>
        <h1 className="font-bold text-[1.6rem] md:text-[2.5rem] leading-[2rem] md:leading-[2.5rem] text-center text-[#3C3C3C] mb-8">
          Our fishing packages
        </h1>
        <div className="flex justify-center items-center">
          <section className="flex flex-wrap justify-center items-center gap-[1.75rem] md:gap-[3rem] mb-[5rem]">
            <Link to='/package/p1'>
              <PackageCard
                img={p1}
                title="Time-Crunched Angler "
                rating="4.5"
                reviews="12"
                day="9"
                night="8"
                price="$3,200"
              />
            </Link>
            <Link to='/package/p2'>
              <PackageCard
                img={p2}
                title="Easy Going Angler "
                rating="4.8"
                reviews="52"
                day="11"
                night="10"
                price="$2,000"
              />
            </Link>

            <Link to='/package/p3'>
              <PackageCard
                img={p3}
                title="Exploring Angler "
                rating="4.5"
                reviews="12"
                day="14"
                night="13"
                price="$3,200"
              />
            </Link>
            <Link to='/package/p1'>
              <PackageCard
                img={p4}
                title="Time-Crunched Angler"
                rating="4.5"
                reviews="12"
                day="11"
                night="13"
                price="$3,200"
              />
            </Link>
            <Link to='/package/p1'>
              <PackageCard
                img={p5}
                title="Time-Crunched Angler"
                rating="4.5"
                reviews="12"
                day="11"
                night="13"
                price="$3,200"
              />
            </Link>
            <Link to='/package/p1'>
              <PackageCard
                img={p3}
                title="Time-Crunched Angler"
                rating="4.5"
                reviews="12"
                day="11"
                night="13"
                price="$3,200"
              />
            </Link>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Packages;
