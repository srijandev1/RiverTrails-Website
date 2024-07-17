import React, { useState, useEffect } from "react";
import { p1, p2, p3, p4, p5 } from "../../assets/index";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { GrGallery } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
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
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-black px-4 relative group">
      <div className="absolute top-4 flex justify-between w-[100vw] px-4 items-center mb-9">
        {/* <p className="text-[#005EE6] font-medium text-[0.85rem]">GALLERY</p> */}
        <h2 className="text-[white] flex items-center gap-3  text-center md:text-left text-[1.75rem] leading-8 md:text-[1.5rem] font-normal ">
          <GrGallery />
          River Rails’s Gallery
        </h2>
        <Link
          onClick={(e) => {
            window.scrollTo(0, 0);
            navigate(-1);
          }}
          to="/home"
        >
          {" "}
          <IoMdClose size={45} color="white" />
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className={`w-[100vw] h-[80vh] bg-center bg-cover`}
      />
      {/* Left arrow */}
      <div
        className="absolute top-[40%] md:top-[50%] left-2 md:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50" // Add hover effect
      >
        <MdKeyboardArrowLeft onClick={prevSlide} size={55} />
      </div>
      {/* Right arrow */}
      <div
        className="absolute top-[40%] md:top-[50%] right-2 md:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50" // Add hover effect
      >
        <MdKeyboardArrowRight onClick={nextSlide} size={55} />
      </div>
      <div className="absolute bottom-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-white" : "text-[#ffffff49]"
            }`}
          >
            <GoDotFill />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
