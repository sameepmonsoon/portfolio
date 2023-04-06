import React from "react";

import { Link } from "react-router-dom";

const SocialMediaIcons = (props: { socialMediaLinks: React.ReactElement }) => {
  const { socialMediaLinks } = props;
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 min-w-[20rem] items-center dark:bg-deep-blue bg-white bg-clip-text ">
      {/* <span className="hover:bg-dark-grey/30 p-1 rounded-full  "></span> */}
      {socialMediaLinks &&
        socialMediaLinks.props &&
        socialMediaLinks.props.children &&
        socialMediaLinks.props.children.map(
          (Link: React.ReactElement, index: number) => (
            <span key={index} className="group flex justify-center">
              <span className="absolute rounded-full group-hover:bg-dark-grey/30 h-[2.8rem] w-[2.8rem] z-[-1] top-[31%]"></span>
              {Link}
            </span>
          )
        )}
    </div>
  );
};

export default SocialMediaIcons;
