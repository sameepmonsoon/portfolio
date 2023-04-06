import React from "react";
import InnerDivSlider from "../../Components/InnerDivSlider/InnerDivSlider";

const Experience = () => {
  return (
    <div>
      Experience
      <InnerDivSlider
        aboutMeTitle={[
          {
            title: "Skills",
            details: [{ detailTitle: "aa", detailList: <></> }],
          },
          {
            title: "Experience",
            details: [
              {
                detailTitle: "aa",
                detailList: <>Intership</>,
              },
            ],
          },
          {
            title: "Education",
            details: [
              {
                detailTitle: "",
                detailList: (
                  <>
                    <li></li>
                  </>
                ),
              },
              {
                detailTitle: "2016 - 2017",
                detailList: (
                  <>
                    <li>Higher School</li>
                  </>
                ),
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Experience;
