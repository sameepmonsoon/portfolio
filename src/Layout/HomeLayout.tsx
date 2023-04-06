import React, { useEffect, useState } from "react";
import Footer from "../Page Component/Home/Footer/Footer";
import Navbar from "../Page Component/Home/Navbar/Navbar";
type HomeTypes = {
  Children: React.ReactElement;
};
const HomeLayout = (props: HomeTypes) => {
  const { Children } = props;
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const NavLinkNames = [
    { label: "Home", link: "/" },
    { label: "projects", link: "/projects" },
    { label: "About", link: "/about" },
    { label: "contact", link: "/contact" },
  ];

  return (
    <div className="flex flex-col overflow-hidden dark:bg-deep-blue bg-white overflow-y-scroll snap-y snap-proximity scroll-smooth">
      <div className="order-1 z-[1]">
        <Navbar LinkName={NavLinkNames} />
      </div>
      <div className="order-2 z-[0] mt-[0rem] snap-start">{Children}</div>
      <div className="order-3 snap-start">
        <Footer footerText={"Sameep@2023"} />
      </div>
    </div>
  );
};

export default HomeLayout;
