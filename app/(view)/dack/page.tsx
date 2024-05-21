"use client";

import { useState } from "react";
import HeroCarousel from "../(components)/hero-carousel";
import { BiSearch } from "react-icons/bi";
import Post from "@/components/post";

const DackPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <HeroCarousel />

      <div className="max-w-screen-sm mx-auto my-10 px-10">
        <Post />
        <Post />
        <Post />
      </div>

      {/* Search icon */}
      <div
        onClick={() => setOpen(true)}
        className="fixed sm:right-20 right-4 sm:bottom-20 bottom-4 bg-[#001126] text-white p-2 rounded-full sm:w-14 sm:h-14 flex items-center justify-center hover:bg-[#0e243e] cursor-pointer transition duration-300 border border-[#0e243e]"
      >
        <BiSearch className="sm:text-[26px] text-lg" />
      </div>

      {open && (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
          <div className="bg-white sm:w-[450px] sm:h-fit h-full w-full p-10 rounded flex flex-col relative shadow">
            <div
              className="absolute top-4 right-4 p-2 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
            <h2 className="text-center font-serif text-2xl uppercase mb-6">
              Sök
            </h2>

            <div className="flex w-full">
              <input
                type="text"
                className="w-full border px-2"
                placeholder="Däck..."
              />
              <div className="bg-black text-white rounded px-6 py-2 w-full max-w-fit">
                Sök
              </div>
            </div>

            {/* <p className="mt-4 text-red-500">Inga resultat</p> */}
            <p className="mt-2 text-cyan-700 text-sm">2 resultat</p>

            {/* search item */}
            <div className="mt-4 border-t pt-2">
              <h2 className="font-serif text-xl uppercase hover:underline">
                Däck inkluderar en hel del
              </h2>
              <small className="text-xs text-gray-500 font-light">
                08 maj 2024
              </small>
              <p className="uppercase text-[#2c517d] font-bold">Däck</p>
            </div>

            {/* search item */}
            <div className="mt-4 border-t pt-2">
              <h2 className="font-serif text-xl uppercase hover:underline">
                Däck inkluderar en hel del
              </h2>
              <small className="text-xs text-gray-500 font-light">
                08 maj 2024
              </small>
              <p className="uppercase text-[#2c517d] font-bold">Däck</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DackPage;
