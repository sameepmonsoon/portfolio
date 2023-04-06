import React from "react";
import SocialMediaIcons from "../../../Components/SocialMediaIcons/SocialMediaIcons";
type FooterProps = {
  footerText: String;
};
const Footer = (props: FooterProps) => {
  const { footerText } = props;
  return (
    <div className="flex flex-col gap-1 min-h-[12rem] w-full justify-center items-center text-[18px] font-bold relative dark:bg-deep-blue bg-white text-deep-blue dark:text-white ">
      {footerText}
      <SocialMediaIcons
        // @ts-ignore
        className="order-2"
      />
    </div>
  );
};

export default Footer;
