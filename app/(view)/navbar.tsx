const Navbar = () => {
  return (
    <div className="bg-white h-[150px] w-full">
      <div className="pt-8 flex flex-col items-center justify-center gap-2 h-full max-w-screen-xl mx-auto">
        <h1 className="text-[32px] uppercase font-serif">Havsben</h1>
        <div className="font-light text-sm flex gap-10 justify-center w-full relative">
          <h3>Däck</h3>
          <h3>Rigg</h3>
          <h3>Skrov</h3>
          <h3>Motor</h3>

          <div className="bg-black text-white rounded px-6 py-2 w-fit absolute right-0 bottom-0 max-xl:mr-4">
            Logga in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
