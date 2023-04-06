import React from "react";
import { RiLoader2Line } from "react-icons/ri";

const Spinner = (props: { type: number }) => {
  const { type } = props;
  if (type == 1) {
    return (
      <RiLoader2Line size={25} className="animate-[spin_1.5s_linear_infinite]" />
    );
  } else
    return (
      <span
        className={`absolute m-0 p-0 items-center bg-clip-text h-[1.5rem] w-[1.5rem] border-[0.2rem] border-b-[transparent] rounded-[50%] animate-[spin_800ms_linear_infinite] `}></span>
    );
};

export default Spinner;
