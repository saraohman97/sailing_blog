import { BiSearch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#001126] text-white w-full">
      <div className="max-w-screen-lg mx-auto h-[300px] grid grid-cols-3 gap-10 items-center w-full justify-between">
        <p className="font-serif text-sm text-center">
          Det här är en blogg om en nybörjares resa ut till havs. Hur fungerar
          segelbåtar och vilka skötselråd kan jag hitta.{" "}
        </p>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 w-fit">
            <div className="p-4 border-r border-b hover:bg-[#0e243e]">
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
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">Däck</h3>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">Rigg</h3>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">Skrov</h3>
          <h3 className="border-b-2 border-transparent hover:border-[#0e243e]">Motor</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
