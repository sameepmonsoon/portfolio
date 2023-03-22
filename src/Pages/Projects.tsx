import React, { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import HomeLayout from "../Layout/HomeLayout";
import ProjectsComponent from "../Page Component/Projects/ProjectsComponent";
import { motion } from "framer-motion";
import projectCardImage from "/src/assets/character.svg";
const Projects = () => {
  return (
    <HomeLayout
      Children={
        <ProjectsComponent
          projectContent={
            <>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
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
                <Card
                  cardTitle="Restaurant Management System"
                  cardDescription={
                    <p>
                      Restaurant Management System is a React web application
                      that allows restaurant managers to streamline their
                      day-to-day operations, manage table reservations, view
                      orders, track inventory, and view sales reports.
                    </p>
                  }
                  cardImage={projectCardImage}
                  cardLinks={
                    <>
                      <Link to="https://www.github.com">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://in.kpop.com.np">
                        <FiExternalLink
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
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
                <Card
                  cardTitle="Futsal Booking System"
                  cardDescription={
                    <p>
                      Futsal Booking System is a web application based on Django
                      that allows players to book and pay for futsal courts
                      online.
                    </p>
                  }
                  cardImage={projectCardImage}
                  cardLinks={
                    <>
                      <Link to="https://github.com/sameeprana/futsal-booking-system.git">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://in.kpop.com.np">
                        <FiExternalLink
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />{" "}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
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
                <Card
                  cardTitle="Blood Donation Portal"
                  cardDescription={
                    <p>
                      Blood Donation Project is a web-based system build for
                      donating blood. It works along with NGOs and helps to
                      spread awareness about blood donation.
                    </p>
                  }
                  cardImage={projectCardImage}
                  cardLinks={
                    <>
                      <Link to="https://github.com/sameeprana/blood-donation.git">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://github.com/sameeprana/blood-donation.git">
                        <FiExternalLink
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.6, duration: 0.5 }}
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
                <Card
                  cardTitle="Restaurant Management System"
                  cardDescription=""
                  cardImage={projectCardImage}
                  cardLinks={
                    <>
                      <Link to="https://www.github.com">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://in.kpop.com.np">
                        <FiExternalLink
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />
              </motion.div>
            </>
          }
        />
      }
    />
  );
};

export default Projects;
