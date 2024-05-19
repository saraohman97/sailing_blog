"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function HeroCarousel() {
  const slides = [
    {
      url: "/roap.jpg",
    },
    {
      url: "/boat.jpg",
    },
    {
      url: "/clifs.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

//   useEffect(() => {
//     setTimeout(() => {
//       setCurrentIndex((currentIndex) =>
//         currentIndex === slides.length - 1 ? 0 : currentIndex + 1
//       );
//     }, 50000);
//   }, [slides]);

  return (
    <div className="w-full h-[340px] relative">
      <Image
        src={`${slides[currentIndex].url}`}
        alt="Roaps in hero"
        width={3000}
        height={500}
        className="h-full object-cover"
      />
      {/* <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full bg-cover bg-center duration-300"></div> */}

      <div className="absolute top-[50%] translate-x-0 -translate-y-[50%] left-5 p-2 text-white border-black cursor-pointer">
        <BiChevronLeft size={40} onClick={prevSlide} />
      </div>
      <div className="absolute top-[50%] translate-x-0 -translate-y-[50%] right-5 p-2 text-white border-black cursor-pointer">
        <BiChevronRight size={40} onClick={nextSlide} />
      </div>
    </div>
  );
}
