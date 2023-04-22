import React from "react";
import HoverCard from "../../Components/HoverCard/HoverCard";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div
      id="about"
      className="md:px-10 my-[10rem] flex md:flex-row flex-col items-center gap-10 justify-start md:justify-around flex-2 md:h-screen snap-start">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: -50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}>
        <HoverCard
          otherSection={true}
          hoverTransitionTitle="Frontend development"
          subTitle="frontend development"
          progressBar={
            <p>
              <span>
                I prefer to build things from the ground up, bringing ideas to
                life through code.
              </span>
              <br />
              <br />
              <span>
                I specialize in Javascript and React, with expertise in core
                concepts like component-based architecture and state management.
              </span>
            </p>
          }
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            x: 50,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}>
        <HoverCard
          otherSection={true}
          hoverTransitionTitle="Designing & backend"
          subTitle="Designing & backend"
          progressBar={
            <p>
              <span>
                I enjoy creating simple and clean design patterns that are
                combined with thoughtful interactions to create a memorable user
                experience.
              </span>
              <br />
              <br />
              <span>
                UI / UX, Web Apps.
                <br /> Learning and developing my skills in Figma and MERN Stack
                is my ongoing goal.
              </span>
            </p>
          }
        />
      </motion.div>
    </div>
  );
};

export default About;
