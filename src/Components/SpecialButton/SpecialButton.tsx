import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoMdDownload, IoMdPaperPlane } from "react-icons/io";
import Spinner from "../Loader/Spinner/Spinner";

const SpecialButton = (props: {
  itemOne: string | any;
  itemTwo: string | any;
}) => {
  const { itemOne, itemTwo } = props;
  const [mouseOver, setMouseOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <Button
      variant="contained"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      type="submit"
      style={{
        background: "#010026",
        border: "1px solid #ffffff",
        color: "#ffffff",
      }}
      className="h-[3rem] z-[1] w-[20rem] md:w-[25rem] rounded-[2px] overflow-hidden flex flex-row text-[15px] font-semibold tracking-wider capitalize justify-center items-center border-[1px] dark:border-white dark:text-white text-deep-blue bg-white dark:bg-deep-blue">
      {/* buggy---- h-[100%] will displace the content to top---set-- h-[70%] to center the content--text-size,gap,height will di-center the content */}
      {isLoading ? (
        <Spinner type={1} />
      ) : (
        <>
          <div
            className={`submitButton flex flex-col justify-start transition-all linear duration-500 items-center h-[70%] w-[100%] gap-4 ${
              mouseOver && "translate-y-[-2.5rem] delay-200"
            }`}>
            <span className="capitalize">{itemOne}</span>
            <span className="tracking-wider ">{itemTwo}</span>
          </div>
        </>
      )}
    </Button>
  );
};

export default SpecialButton;
