import Image from "next/image";
import HeroCarousel from "./(components)/hero-carousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-10 py-10">
        <Image
          src="/clifs.jpg"
          alt="Roaps in hero"
          width={2000}
          height={500}
          className="rounded-lg h-[300px] object-cover"
        />
        <Image
          src="/boat.jpg"
          alt="Roaps in hero"
          width={2000}
          height={500}
          className="rounded-lg h-[300px] object-cover"
        />
      </div>
    </>
  );
}
