import React, { useState } from "react";
import { motion } from "framer-motion";

const LocationContainer = (props: {
  cardTitle?: string;
  cityStateIcon: React.ReactNode;
  cityState: string;
  phoneNumberIcon: React.ReactNode;
  phoneNumber?: number | string;
  contactDetails: string;
  contactDetailIcon: React.ReactNode;
}) => {
  const {
    cardTitle,
    cityStateIcon,
    cityState,
    phoneNumberIcon,
    phoneNumber,
    contactDetails,
    contactDetailIcon,
  } = props;

  return (
    <div
      //  border-[1px] border-white
      className={`h-auto max-h-[15rem] py-2 w-[25rem] md:h-auto md:max-h-[15rem] md:w-[30rem] rounded-[2px] bg-deep-bluetext-white flex flex-col justify-start items-center gap-2 dark:bg-deep-blue bg-white text-deep-blue dark:text-white`}>
      {cardTitle && (
        <span className="h-10 w-3/4 flex flex-row justify-start items-center px-2 text-deep-blue dark:text-white font-semibold tracking-wider text-[18px] capitalize">
          {cardTitle}
        </span>
      )}
      <span className="h-10 w-3/4 flex flex-row justify-start items-center px-2 text-deep-blue dark:text-white font-semibold tracking-wider text-[18px] capitalize">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          variants={{
            hidden: {
              x: 100,
            },
            visible: {
              x: 0,
            },
          }}>
          <span
            className={`flex flex-row gap-5 h-full w-full justify-start items-center cursor-pointer text-deep-blue dark:text-white`}>
            <span className={"hover:animate-[wobble_1s_linear_1]"}>
              {cityStateIcon}
            </span>
            {cityState}
          </span>
        </motion.div>
      </span>
      {phoneNumber && (
        <span className="h-10 w-3/4 flex flex-row justify-start items-center px-2 text-deep-blue dark:text-white font-semibold tracking-wider text-[18px] capitalize">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: {
                x: 100,
              },
              visible: {
                x: 0,
              },
            }}>
            <span
              className={`flex flex-row gap-5 h-full w-full justify-start items-center cursor-pointer text-deep-blue dark:text-white`}>
              <span className={`hover:animate-[wobble_1s_linear_1]`}>
                {phoneNumberIcon}
              </span>
              {phoneNumber}
            </span>
          </motion.div>
        </span>
      )}

      <span className="h-10 w-3/4 flex flex-row justify-start items-center px-2 text-deep-blue dark:text-white font-semibold tracking-wider text-[18px] capitalize">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: {
              x: 100,
            },
            visible: {
              x: 0,
            },
          }}>
          <span
            className={`flex flex-row gap-5 h-full w-full justify-start items-center cursor-pointer text-deep-blue dark:text-white`}>
            <span className={`hover:animate-[wobble_1s_linear_1]`}>
              {contactDetailIcon}
            </span>
            {contactDetails}
          </span>
        </motion.div>
      </span>
    </div>
  );
};

export default LocationContainer;
