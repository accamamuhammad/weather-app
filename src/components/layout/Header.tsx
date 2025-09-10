import React from "react";
import Image from "next/image";

//? Assets
import searchIcon from "../../../public/images/icon-search.svg";

const Header = () => {
  return (
    <header className="w-full px-6 mt-14 gap-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-white font-Grotesque text-5xl lg:text-6xl xl:text-7xl leading-16 font-bold">
        How&apos;s the sky looking today
      </h1>
      <section className="w-full gap-3 flex flex-col md:flex-row">
        {/* Search box */}
        <div className="w-full pl-4 h-14 cursor-pointer rounded-xl bg-neutral-850 flex flex-row items-center justify-start">
          <Image src={searchIcon} width={22} height={22} alt="search-icon" />
          <input
            type="text"
            placeholder="Search for a place..."
            className="pl-4 text-lg text-white font-DM-Sans w-full border-0 outline-none"
          />
        </div>
        {/* search Button */}
        <button className="w-full md:w-32 h-14 text-white font-DM-Sans cursor-pointer text-lg bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center">
          Search
        </button>
      </section>
    </header>
  );
};

export default Header;
