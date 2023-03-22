import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 min-w-[20rem] items-center dark:bg-deep-blue bg-white bg-clip-text">
      {/* <span className="hover:bg-dark-grey/30 p-1 rounded-full  "></span> */}

      <Link to="https://www.github.com">
        <AiFillGithub className=" transition duration-200 " size={35} />
      </Link>

      <Link to="https://www.LinkedIn.com">
        <AiFillLinkedin size={35} />
      </Link>
      <Link to="https://www.facebook.com">
        <AiFillFacebook size={35} />
      </Link>
      <Link to="https://www.LinkedIn.com">
        <AiOutlineInstagram size={35} />
      </Link>
      <Link to="https://www.LinkedIn.com">
        <AiFillTwitterSquare size={35} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
