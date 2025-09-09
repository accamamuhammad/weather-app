import React from "react";
import NavigationDropDown from "../secondary/navigationDropDown";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.svg";

const navigation = () => {
  return (
    <nav className="w-full flex flex-row items-center justify-between">
      <Image src={Logo} alt="logo" width={100} height={100} />
      <NavigationDropDown />
    </nav>
  );
};

export default navigation;
