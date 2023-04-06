import React, { useRef } from "react";
import Card from "../Components/Card/Card";
import HomeLayout from "../Layout/HomeLayout";
import { useScroll, motion } from "framer-motion";
import educationCardImage from "/src/assets/character.svg";

const Education = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  return (
    <HomeLayout
      Children={
        <div className="flex flex-col py-[2rem] gap-10 md:gap-5 md:py-2 bg-white justify-center items-center dark:bg-deep-blue  snap-y snap-mandatory overflow-y-scroll ">
          <div className="z-[1] snap-start flex flex-row justify-center items-center md:py-10  md:h-screen md:w-screen">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              // transition={{ type: "spring", bounce: 0.8, duration: 3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <Card
                otherSection={true}
                cardTitle={<p>Tribhuvan University | 2018 - Present</p>}
                cardDescription={
                  <p>
                    Bachelor of Information Management, <br /> Asian School of
                    Management and Technology
                  </p>
                }
                cardImage={educationCardImage}
                cardLinks={<></>}
              />
            </motion.div>
          </div>
          <div className="z-[1] snap-start flex flex-row justify-center md:py-10 items-center md:h-screen md:w-screen">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              // transition={{ type: "spring", bounce: 0.8, duration: 3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <Card
                otherSection={true}
                cardTitle={<p>Higher Secondary School | 2016 - 2018</p>}
                cardDescription={
                  <p>
                    +2 Science, <br /> Shree Chhorepatan Higher Seconday School
                  </p>
                }
                cardImage={educationCardImage}
                cardLinks={<></>}
              />
            </motion.div>
          </div>
          <div className="z-[1] snap-start flex flex-row justify-center items-center md:py-10  md:h-screen md:w-screen">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              // transition={{ type: "spring", bounce: 0.8, duration: 3 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,

                  y: 0,
                },
              }}>
              <Card
                otherSection={true}
                cardTitle={<p>Secondary School | 2015 - 2016</p>}
                cardDescription={
                  <p>
                    School Leaving Certificate, <br /> Shree Rajasthal Higher
                    Seconday School
                  </p>
                }
                cardImage={educationCardImage}
                cardLinks={<></>}
              />
            </motion.div>
          </div>
        </div>
      }
    />
  );
};

export default Education;
