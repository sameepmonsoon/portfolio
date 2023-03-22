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
                detailList: <>I am from Nepal</>,
              },
            ],
          },
          {
            title: "Education",
            details: [
              {
                detailTitle: "2018 - Present",
                detailList: (
                  <>
                    <li>BIM From Tribhuvan University</li>
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
