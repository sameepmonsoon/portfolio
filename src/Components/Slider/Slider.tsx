import React, { useState } from "react";

const Slider = () => {
  const slide = [1, 2, 3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidePrev = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const slideNext = () => {
    const isLastIndex = currentIndex === slide.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  function currentSlideIndex(slideIndex: number) {
    setCurrentIndex(slideIndex);
  }
  return <div className={`w-[50vh] h-[50vh] bg-yellow`}></div>;
};

export default Slider;
