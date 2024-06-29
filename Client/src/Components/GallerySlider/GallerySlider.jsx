import React, { useState } from "react";
import { p1, p2, p3, p4, p5 } from "../../assets/index";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

function GallerySlider() {
  const slides = [
    { img: p3 },
    { img: p2 },
    { img: p1 },
    { img: p4 },
    { img: p5 },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="w-full h-full relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover ease-in-out duration-500 "
      ></div>
      {/* left arrow */}
      <div className="absolute top-[40%] md:top-[50%] left-2 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer]">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* right arrow */}
      <div className=" absolute top-[40%] md:top-[50%] right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer]">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
               <GoDotFill color="black"/>
            </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySlider;
