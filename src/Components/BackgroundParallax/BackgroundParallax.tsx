import React, { useState } from "react";

const BackgroundParallax = (props: {
  buttons: React.ReactElement;
  parallaxBgImage?: string;
  pageDescription: string;
}) => {
  const { buttons, parallaxBgImage, pageDescription } = props;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const { x, y } = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - x;
    const mouseY = event.clientY - y;
    setMousePosition({ x: mouseX * 10, y: mouseY * 10 });
  };
  console.log(mousePosition);
  return (
    <div
      onMouseMove={handleMouseMove}
      className="background-parallax-container">
      <div
        style={{
          backgroundPosition: `${mousePosition.x / 500}px ${
            mousePosition.y / 1000
          }px`,
          scale: "1.3",
        }}
        className={`background-parallax flex flex-col justify-center items-center bg-deep-blue text-white transition-all linear duration-75 md:h-[100vh] h-[50vh] w-[50w] md:w-[100vw] bg-[url("${parallaxBgImage}")] bg-fixed bg-cover bg-no-repeat`}>
        <div
          style={{
            position: "relative",
            transform: `translate(-${mousePosition.x / 30}px, -${
              mousePosition.y / 30
            }px)`,
          }}
          className="flex flex-row justify-center items-center absolute">
          <span
            className="font-bold  md:text-[100px] text-[150px] cursor-pointer bg-clip-text "
            style={{
              position: "relative",
              transform: `translate(${mousePosition.x / 31}px,${
                mousePosition.y / 40
              }px)`,
            }}>
            4
          </span>
          <span
            className="font-bold  md:text-[100px] text-[150px] cursor-pointer bg-clip-text "
            style={{
              position: "relative",
              transform: `translate(${mousePosition.x / 29}px,${
                mousePosition.y / 40
              }px)`,
            }}>
            0
          </span>
          <span
            className="font-bold  md:text-[100px] text-[150px] cursor-pointer bg-clip-text "
            style={{
              position: "relative",
              transform: `translate(${mousePosition.x / 28}px,${
                mousePosition.y / 40
              }px)`,
            }}>
            4
          </span>
        </div>
        <div className="font-bold text-[20px] cursor-pointer bg-clip-text capitalize flex flex-col justify-center items-center overflow-hidden hover:">
          <span className="capitalize text-[30px] h-[5rem] w-[20rem] flex flex-row justify-center items-center text-white">
            {pageDescription}
          </span>
          <span className="hover:border-b-white text-[20px] hover:dark:border-b-white hover:border-b-[1px] px-2 h-[3rem] w-[7rem] flex flex-row justify-center items-center rounded-[2px]">
            {buttons}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundParallax;
