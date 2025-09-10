import DropDown from "../primary/DropDown";
import Image from "next/image";
import Logo from "../../../public/images/logo.svg";

const Navigation = () => {
  return (
    <nav className="w-full pt-5 px-6 flex flex-row items-center justify-between">
      <Image src={Logo} alt="logo" width={160} height={160} />
      <DropDown />
    </nav>
  );
};

export default Navigation;
