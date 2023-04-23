import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../Components/LogoContainer/Logo";
import ToggleButton from "../../../Components/ToggleButton/ToggleButton";
import { RiMenuLine, IoCloseSharp } from "react-icons/all";
type NavLinks = {
  LinkName: Array<any>;
};
const Navbar = (props: NavLinks) => {
  const { LinkName } = props;
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const location = useLocation();
  return (
    <div className="fixed z-[10] border-b-[1px] bg-b-[0px 1px 2px fixed rgba(0, 0, 0, 0.1)] h-[64px] w-[100vw] overflow-hidden flex font-bold flex-row px-[2rem] items-center justify-center bg-white ">
      <Logo />
      <div className=" flex h-[100%] flex-row flex-1 justify-end items-center gap-5 text-[16px] text-deep-blue font-[400] font-sans">
        <div className="hidden relative uppercase md:flex  justify-center items-center gap-1">
          {LinkName.map((name, index) => (
            <Link
              key={index}
              to={name.link}
              className={`px-4
              hover:bg-deep-blue/10  hover:text-deep-blue h-10 flex justify-center items-center rounded-[4px] ${
                // If the name.link has an extra whitespace, it won't retain the selected link. -- bg-color

                location.pathname == name.link &&
                "bg-deep-blue/10  text-deep-blue"
              }`}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}>
              {name.label}
            </Link>
          ))}

          <ToggleButton />
        </div>
      </div>
      <div className="flex md:hidden text-deep-blue cursor-pointer items-center justify-center">
        <span>
          <ToggleButton />
        </span>
        <span onClick={handleNav}>
          {nav ? <IoCloseSharp size={27} /> : <RiMenuLine size={27} />}
        </span>
      </div>
      <div
        className={
          nav
            ? "fixed md:hidden left-0 top-0 transition-left ease-in-out duration-[600ms] flex flex-col justify-start items-start shadow-[-1px_0px_1px_1px_grey] dark:border-r-white min-w-[12rem] h-full bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden"
            : "fixed md:hidden left-[-150%] top-0 transition-left ease-in-out duration-[1000ms] flex flex-col justify-start items-start shadow-[-1px_0px_1px_1px_grey] dark:border-r-white min-w-[12rem] h-full bg-white dark:bg-deep-blue text-deep-blue  dark:text-white pl-5 pt-1 gap-3 uppercase overflow-hidden"
        }>
        <Logo otherSection={true} />
        {LinkName.map((name, index) => (
          <Link
            key={index}
            to={name.link}
            className={`pt-[0px] max-w-[150px] w-[100px] h-[2rem] flex flex-row justify-start items-center border-b-[rgba(255,255,255,0.9)] text-[17px]  pl-1 hover:bg-dark-grey/20 rounded-[1px] ${
              location.pathname == name.link && "bg-dark-grey/20"
            }`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}>
            {name.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
