"use client";

import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";

const Post = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <div className="mb-20">
      <h2 className="font-serif uppercase sm:text-5xl text-4xl text-[##222222]">
        Däck inkluderar en hel del
      </h2>
      <h4 className="font-serif uppercase text-lg mb-4">
        Däck inkluderar en hel del
      </h4>
      <p className="text-sm text-gray-500 font-light sm:columns-2">
        Däck inkluderar en hel delDäck inkluderar en hel del. Däck inkluderar en
        hel del. Däck inkluderar en hel del.Däck inkluderar en hel delDäck
        inkluderar en hel del. Däck inkluderar en hel del. Däck inkluderar en
        hel del. Däck inkluderar en hel delDäck inkluderar en hel del. Däck
        inkluderar en hel d el. Däck inkluderar en hel del. Däck inkluderar en
        hel delDäck inkluderar en hel del. Däck inkluderar en hel del. Däck
        inkluderar en hel del.Däck inkluderar en hel delDäck inkluderar en hel
        del. Däck inkluderar en hel del. <br /> <br /> Däck inkluderar en hel
        del.Däck inkluderar en hel delDäck inkluderar en hel del. Däck
        inkluderar en hel del. Däck inkluderar en hel del.Däck inkluderar en hel
        delDäck inkluderar en hel del. Däck inkluderar en hel del. Däck
        inkluderar en hel del. Däck inkluderar en hel delDäck inkluderar en hel
        del. Däck inkluderar en hel del. Däck inkluderar en hel del.Däck
        inkluderar en hel delDäck inkluderar en hel del. Däck inkluderar en hel
        del. Däck inkluderar en hel del. <br /> <br /> Däck inkluderar en hel
        delDäck inkluderar en hel del. Däck inkluderar en hel d el. Däck
        inkluderar en hel del. Däck inkluderar en hel delDäck inkluderar en hel
        del. Däck inkluderar en hel del. Däck inkluderar en hel del.Däck
        inkluderar en hel delDäck inkluderar en hel del. Däck inkluderar en hel
        del. Däck inkluderar en hel del.Däck inkluderar en hel delDäck
        inkluderar en hel del. Däck inkluderar en hel del. Däck inkluderar en
        hel del.Däck inkluderar en hel delDäck inkluderar en hel del. Däck
        inkluderar en hel del. Däck inkluderar en hel del.
      </p>

      <div onClick={() => setOpen(true)} className="max-h-96 max-w-full relative cursor-pointer">
        <Image
          src="/boat.jpg"
          alt=""
          width={500}
          height={500}
          className="object-contain mt-10"
        />
        <div className="absolute left-4 bottom-4 bg-[#001126] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#0e243e] cursor-pointer transition duration-300 border border-[#0e243e]">
          <MdZoomOutMap className="text-lg" />
        </div>
      </div>

      {/* Zoom out map */}
      {open && (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center h-screen">
          <div className="sm:max-w-screen-lg mx-auto relative">
            <Image
              src={`${slides[currentIndex].url}`}
              alt="Roaps in hero"
              width={3000}
              height={500}
              className="object-cover h-[500px]"
            />

            <div
              className="absolute -top-8 -right-8 p-2 cursor-pointer text-white"
              onClick={() => setOpen(false)}
            >
              X
            </div>

            <div className="absolute top-[50%] translate-x-0 -translate-y-[50%] -left-16 p-2 text-white border-black cursor-pointer">
              <BiChevronLeft size={40} onClick={prevSlide} />
            </div>
            <div className="absolute top-[50%] translate-x-0 -translate-y-[50%] -right-16 p-2 text-white border-black cursor-pointer">
              <BiChevronRight size={40} onClick={nextSlide} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
