import React from "react";
import HoverCard from "../../Components/HoverCard/HoverCard";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="md:px-10 my-[10rem] flex md:flex-row flex-col items-center gap-10 justify-start md:justify-around flex-2 md:h-screen snap-start">
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
                Preferring to build things from the ground up, bringing ideas to
                life through code is enjoyable.
              </span>
              <br />
              <br />
              <span>
                Specializing in React, with expertise in core concepts like
                component-based architecture and state management. Experience
                utilizing HTML, CSS, styled and zustand components in React
                projects.
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
          hoverTransitionTitle="Designing"
          subTitle="Designing"
          progressBar={
            <p>
              <span>
                Simple and clean design patterns, coupled with thoughtful
                interactions, make for a memorable user experience.
              </span>
              <br />
              <br />
              <span>
                UI / UX, Web Apps.
                <br /> Continual learning and skill development in Figma is an
                ongoing goal.
              </span>
            </p>
          }
        />
      </motion.div>
    </div>
  );
};

export default About;
