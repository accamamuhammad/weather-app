"use client";

//? React & Next
import React, { useState } from "react";
import Image from "next/image";

//? Components
import DropDownC1 from "../ui/DropDownC1";

//? Assets
import GearIcon from "../../../public/images/icon-units.svg";
import DropDownIcon from "../../../public/images/icon-dropdown.svg";

const DropDown = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleOpenDropDown = () => {
    setToggleDropDown(true);
  };

  const handleCloseDropDown = () => {
    setToggleDropDown(false);
  };

  return (
    <section className="relative">
      <div
        onMouseEnter={() => handleOpenDropDown()}
        onMouseLeave={() => handleCloseDropDown()}
        className="py-[7px] px-3 gap-2 rounded-lg bg-neutral-850 flex flex-row justify-between items-center focus:border-2 focus:border-white cursor-pointer"
      >
        <Image src={GearIcon} width={16} height={16} alt="gear-icon" />
        <span className="text-white text-[0.95rem] font-DM-Sans font-medium opacity-95">
          Units
        </span>
        <Image src={DropDownIcon} width={10} height={10} alt="drop-icon" />
      </div>
      {/* Dropdown Component 1 */}
      <div
        onMouseEnter={() => handleOpenDropDown()}
        onMouseLeave={() => handleCloseDropDown()}
        className={`${
          toggleDropDown ? "absolute top-9 right-0 pt-5" : "hidden"
        }`}
      >
        <DropDownC1 />
      </div>
    </section>
  );
};

export default DropDown;
