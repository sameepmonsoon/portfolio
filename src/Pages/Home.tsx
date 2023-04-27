import image from "/src/assets/user-avatar.jpg";
import Hero from "../Page Component/Hero/Hero";
import About from "../Page Component/About/About";
import HomeLayout from "../Layout/HomeLayout";
import Skills from "../Page Component/SkillsPage/SkillsPage";
import SpecialButton from "../Components/SpecialButton/SpecialButton";

import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Home = () => {
  return (
    <HomeLayout
      Children={
        <div className="snap-mandatory snap-y overflow-hidden">
          <Hero
            userImage={image}
            resumeButton={
              // <a href={resume} download={resume}>
              <a href="https://drive.google.com" target="_blank">
                <SpecialButton
                  itemOne={"Resume"}
                  itemTwo={<HiOutlineClipboardDocumentList size={25} />}
                />
              </a>
            }
            optionalButton={" Say Hello "}
            optionalButtonPath={"contact"}
            userName={"John Doe"}
            userIntroduction={
              "Hello, I'm John Doe. I love to learn and build new things.\
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
