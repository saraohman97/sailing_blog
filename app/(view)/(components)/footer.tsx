"use client";

import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="bg-[#001126] text-white w-full">
      <div className="max-w-screen-lg mx-auto md:h-[300px] grid md:grid-cols-3 gap-10 items-center w-full justify-between p-10">
        <p className="font-serif text-sm text-center">
          Det här är en blogg om en nybörjares resa ut till havs. Hur fungerar
          segelbåtar och vilka skötselråd kan jag hitta.{" "}
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 w-fit">
            <div
              onClick={() => setOpen(true)}
              className="p-4 border-r border-b hover:bg-[#0e243e]"
            >
              <BiSearch size={30} />
            </div>
            <div className="p-4 border-b hover:bg-[#0e243e]">
              <FaLinkedin size={30} />
            </div>
            <div className="p-4 border-r hover:bg-[#0e243e]">
              <FaFacebook size={30} />
            </div>
            <div className="p-4 hover:bg-[#0e243e]">
              <BsGithub size={30} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 font-serif text-center">
          <Link href='/dack' className="border-b-2 border-transparent hover:border-[#0e243e]">
            Däck
          </Link>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">
            Rigg
          </h3>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">
            Skrov
          </h3>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">
            Motor
          </h3>
        </div>
      </div>
    </div>

      {open && (
        <div className="bg-black/50 fixed inset-0 flex items-center justify-center">
          <div className="bg-white w-[450px] h-fit p-10 rounded flex flex-col relative shadow">
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
              <input type="text" className="w-full border" />
              <div className="bg-black text-white rounded px-6 py-2 w-full max-w-fit">
                Sök
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
