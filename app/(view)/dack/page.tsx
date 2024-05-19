import Image from "next/image";
import HeroCarousel from "../(components)/hero-carousel";
import { BiSearch } from "react-icons/bi";
import Post from "@/components/post";

const DackPage = () => {
  return (
    <div className="relative">
      <HeroCarousel />

<div className="max-w-screen-sm mx-auto my-10 px-10">
      <Post />
      <Post />
      <Post />
</div>

      <div className="fixed right-20 bottom-20 bg-[#001126] text-white p-2 rounded-full w-14 h-14 flex items-center justify-center hover:bg-[#0e243e] cursor-pointer transition duration-300">
        <BiSearch size={26} />
      </div>
    </div>
  );
};

export default DackPage;
