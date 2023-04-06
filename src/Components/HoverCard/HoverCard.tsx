import React, { useState } from "react";
type HoveCard = {
  //to reuse this card in other pages
  otherSection?: boolean;
  hoverTransitionTitle: string;
  subTitle: string;
  progressBar: React.ReactElement;
  transitionTitleColor?: any;
};
const HoverCard = (props: HoveCard) => {
  const {
    hoverTransitionTitle,
    subTitle,
    progressBar,
    transitionTitleColor,
    otherSection,
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className={
        otherSection
          ? ` md:min-h-[28.8rem] md:w-[25rem] md:h-auto lg:h-auto lg:min-h-[33.8rem] lg:min-w-[35rem] min-h-[19rem] h-auto w-[22rem] rounded-[5px]  bg-white dark:bg-deep-blue overflow-hidden cursor-pointer border-[1px] border-deep-blue dark:border-white `
          : ` md:min-h-[16rem] md:w-[15rem] lg:w-20rem lg:w-[20rem] lg:min-h-[20rem] md:h-auto min-h-[19rem] h-auto w-[17rem] rounded-[5px]  bg-white dark:bg-deep-blue    overflow-hidden cursor-pointer border-[1px] border-deep-blue dark:border-white`
      }
      onMouseOver={() => {
        setHover(true);
        console.log("onOver", hover);
      }}
      onMouseLeave={() => {
        setHover(false);
        console.log("onLeave", hover);
      }}>
      <div className="relative z-[1] md:h-[8rem] lg:h-[11rem] h-[9rem] flex flex-row justify-around items-center overflow-hidden gap-10 text-deep-blue dark:text-white ">
        <h1
          className={
            otherSection
              ? `text-deep-blue font-bold dark:text-white background-title  relative font-[fantasy,sans] lg:font-[1000] w-[500px] h-[80%] whitespace-nowrap z-[0] md:text-8xl lg:text-8xl text-[5.5rem] left-[10rem] uppercase ${
                  hover && "translate-x-[-31rem]"
                } transition ease-in-out duration-[2.5s] text-[${transitionTitleColor}] `
              : `text-deep-blue dark:text-white background-title  relative font-[fantasy,sans] font-bold w-auto h-[80%] z-[0] whitespace-nowrap md:text-8xl text-9xl lg:text-9xl lg:font-[1000] left-[10rem] uppercase ${
                  hover && "translate-x-[-32rem]"
                } transition ease-in-out duration-[2.5s] text-[${transitionTitleColor}] `
          }>
          {hoverTransitionTitle}
        </h1>

        <h1
          className={
            otherSection
              ? `hidden `
              : `relative text-deep-blue font-bold dark:text-white background-title font-[fantasy,sans] w-auto h-[80%] z-[0] whitespace-nowrap md:text-8xl text-9xl lg:text-9xl lg:font-[1000]  left-[14rem] uppercase ${
                  hover && "translate-x-[-32rem]"
                } transition ease-in-out duration-[2.5s] text-[${transitionTitleColor}] `
          }>
          {hoverTransitionTitle}
        </h1>
      </div>
      <div className="px-3">
        <span
          className={
            otherSection
              ? `
        
        title relative z-[1] bg-transparent md:text-[25px]text-[25px] lg:text-[30px] font-bold uppercase whitespace-nowrap text-deep-blue dark:text-white`
              : `
        
        title relative z-[1] bg-transparent md:text-[20px] text-[25px] lg:text-[30px] font-bold font-[fantasy,sans] uppercase whitespace-nowrap text-deep-blue dark:text-white`
          }>
          {subTitle}
        </span>
        <div
          className={
            otherSection
              ? `progress-bar  relative z-[1] bg-transparent text-[20px] py-5 text-deep-blue dark:text-white`
              : `progress-bar relative z-[1] bg-transparent text-[20px] py-3 text-deep-blue dark:text-white`
          }>
          {progressBar}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
