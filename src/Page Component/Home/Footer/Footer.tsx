import React from "react";
import SocialMediaIcons from "../../../Components/SocialMediaIcons/SocialMediaIcons";
import {
  AiFillGithub,
  GrLinkedinOption,
  AiOutlineInstagram,
  BsFacebook,
  ImTwitter,
} from "react-icons/all";
import { Link } from "react-router-dom";
type FooterProps = {
  footerText: String;
};
const Footer = (props: FooterProps) => {
  const { footerText } = props;
  return (
    <div className="flex flex-col gap-1 border-t-[1px] border-t-gray-300 h-[200px]  w-full justify-center items-center text-[18px] dark:bg-deep-blue bg-white text-deep-blue dark:text-white ">
      <span className="order-2">{footerText}</span>
      <SocialMediaIcons
        // @ts-ignore
        className="order-1"
        socialMediaLinks={
          <>
            <Link to="https://www.github.com" target="_blank">
              <AiFillGithub className=" transition duration-200 " size={35} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <GrLinkedinOption size={32} />
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              <BsFacebook size={32} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <AiOutlineInstagram size={35} />
            </Link>
            <Link to="https://www.LinkedIn.com" target="_blank">
              <ImTwitter size={32} />
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Footer;
