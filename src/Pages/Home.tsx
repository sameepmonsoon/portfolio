import image from "/src/assets/monsoon.jpg";
import Hero from "../Page Component/Hero/Hero";
import About from "../Page Component/About/About";
import HomeLayout from "../Layout/HomeLayout";
import Skills from "../Page Component/SkillsPage/SkillsPage";
// add your cv file here
import resume from "../assets/monsoon_cv.pdf";
import SpecialButton from "../Components/SpecialButton/SpecialButton";
import { IoMdDownload } from "react-icons/io";

const Home = () => {
  return (
    <HomeLayout
      Children={
        <div className="snap-mandatory snap-y overflow-hidden">
          <Hero
            userImage={image}
            resumeButton={
              <a href={resume} download={resume}>
                <SpecialButton
                  itemOne={"Resume"}
                  itemTwo={<IoMdDownload size={25} />}
                />
              </a>
            }
            optionalButton={" Say Hello "}
            optionalButtonPath={"contact"}
            userName={"Monsoon"}
            userIntroduction={
              "Hello, I'm Sameep Monsoon Rana. I love to learn and build new things.\
            "
            }
          />
          <About />
          <Skills />
        </div>
      }
    />
  );
};

export default Home;
