import React, { useState, useEffect, useRef } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiEvilMoon, GiMoonOrbit } from "react-icons/gi";
import { CgDarkMode } from "react-icons/cg";

const ToggleButton = () => {
  const [toggle, setToggle] = useState(
    localStorage.getItem("toggle") === "true"
  );
  const prevToggleRef = useRef(toggle);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggle = () => {
    const newToggle = !toggle;
    prevToggleRef.current = toggle;
    setToggle(newToggle);
    localStorage.setItem("toggle", `${newToggle}`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onClick={() => {
        handleThemeToggle();
        handleToggle();
      }}
      className="cursor-pointer w-[3.3rem] h-[2.5rem] flex flex-row md:justify-end md:items-center justify-start items-center">
      {theme === "dark" ? (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover:animate-spin">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}>
            <FaSun size={30} />
          </motion.div>
        </span>
      ) : (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover:animate-spin">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.3 }}>
            <GiEvilMoon size={30} />
          </motion.div>
        </span>
      )}
    </div>
  );
};

export default ToggleButton;
