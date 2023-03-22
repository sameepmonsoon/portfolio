import React, { useState } from "react";
type InnerDivSlider = {
  aboutMeTitle: Array<{
    title: string;
    details: Array<{ detailTitle: string; detailList: React.ReactElement }>;
  }>;
};
const InnerDivSlider = (props: InnerDivSlider) => {
  const { aboutMeTitle } = props;
  const [details, setDetails] = useState<any>(null);
  const [visible, setVisible] = useState<number>();
  const [click, setClick] = useState<boolean>(false);
  console.log(click);
  function handleClick(index: number) {
    if (index === visible) {
      setClick(!click);
    }
  }
  return (
    <div className="h[100%] w-[100%] bg-red-300 flex flex-row gap-3 overflow-hidden transition-all ease-in duration-[2s] ">
      {aboutMeTitle.map((item, index) => (
        <div className="overflow-hidden">
          <span
            key={index}
            onClick={() => {
              setDetails(item.details);
              setVisible(index);
            }}
            className={`bg-red-500 z-10 cursor-pointer flex flex-row text-white hover:bg-slate-400 ${
              visible == index && "bg-slate-400 border-red-900"
            } rounded-[5px] sm:w-[5rem] lg:w-[7rem] h-[2rem] justify-center items-center `}>
            {item.title}
          </span>
          <ul
            className={`${
              visible === index ? "opacity-1" : "opacity-0"
            } transition-opacity duration-[1s] ease-in absolute py-10 h-[80%] w-[93%] left-2 sm:left-[1.4rem]`}>
            {visible == index && (
              <li key={index} className=" text-white flex flex-col gap-5">
                {item.details.map((detail, detailIndex) => (
                  <div className=" flex flex-col gap-2 capitalize">
                    <span key={index}>{detail.detailTitle}</span>
                    <span key={index}>{detail.detailList}</span>
                  </div>
                ))}
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InnerDivSlider;
