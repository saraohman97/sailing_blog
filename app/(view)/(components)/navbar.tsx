'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      href: "/dack",
      label: "Däck",
      active: pathname === `/dack`,
    },
    {
      href: "/rigg",
      label: "Rigg",
      active: pathname === `/rigg`,
    },
    {
      href: "/skrov",
      label: "Skrov",
      active: pathname === `/skrov`,
    },
    {
      href: "/motor",
      label: "Motor",
      active: pathname === `/motor`,
    },
  ];
  return (
    <div className="bg-white h-[150px] w-full">
      <div className="pt-8 flex flex-col items-center justify-end gap-2 h-full max-w-screen-xl mx-auto">
        <Link href="/" className="text-[32px] uppercase font-serif">
          Havsben
        </Link>
        <div className="font-serif text-sm flex sm:gap-2 justify-center w-full relative">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`pb-4 border-b-4 px-4 hover:border-black ${
                link.active ? "border-black" : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="bg-black text-white rounded px-6 py-2 w-fit max-sm:hidden absolute right-0 bottom-0 max-xl:mr-4 mb-4">
            Logga in
          </div>
          <div className="p-4 w-fit absolute sm:hidden right-0 bottom-16 max-xl:mr-4 mb-4">
            <CgLogIn size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
