import React from "react";
import { motion } from "framer-motion";
import HoverCard from "../../Components/HoverCard/HoverCard";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
const SkillsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 md:px-10 sm:justify-center sm:flex-col sm:items-center sm:pl-[14rem] md:py-10 md:justify-center md:items-center w-full min-h-screen py-10 overflow-hidden">
      <motion.div
        className="text-[40px] font-[sans-serif] capitalize"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}>
        <div className="flex flex-row justify-start items-center gap-x-[3.3rem] gap-y-[2.5rem] flex-wrap w-full h-full mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              hoverTransitionTitle="html"
              subTitle="html"
              progressBar={<ProgressBar showText={true} level={80} />}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              hoverTransitionTitle="CSS"
              subTitle="CSS"
              progressBar={<ProgressBar showText={true} level={75} />}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 70,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              transitionTitleColor="#fddb4f"
              hoverTransitionTitle="JavaScript"
              subTitle="JavaScript"
              progressBar={<ProgressBar showText={true} level={55} />}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 80,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              hoverTransitionTitle="React"
              subTitle="React"
              progressBar={<ProgressBar showText={true} level={50} />}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 90,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              hoverTransitionTitle="Tailwind Css"
              subTitle="Tailwind Css"
              progressBar={<ProgressBar showText={true} level={60} />}
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}>
            <HoverCard
              hoverTransitionTitle="Git & Github"
              subTitle="Git & Github"
              progressBar={<ProgressBar showText={true} level={40} />}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
