import { AiFillGithub } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/all";
import { Link } from "react-router-dom";
import Card from "../Components/Card/Card";
import HomeLayout from "../Layout/HomeLayout";
import ProjectsComponent from "../Page Component/Projects/ProjectsComponent";
import { motion } from "framer-motion";
import restaurant from "/src/assets/restaurant.svg";
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
                  cardTitle="Project 1"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
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
                transition={{ delay: 0.2, duration: 0.5 }}
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
                  cardTitle="Project 2"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />
              </motion.div>{" "}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.5 }}
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
                  cardTitle="Project 3"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                    </>
                  }
                />
              </motion.div>{" "}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
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
                  cardTitle="Project 4"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
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
                viewport={{ once: true, amount: 0.1 }}
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
                  cardTitle="Project 5"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
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
                viewport={{ once: true, amount: 0.1 }}
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
                  cardTitle="Project 6"
                  cardDescription={
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Laboriosam nulla dolor aspernatur molestias alias.
                      Possimus, delectus sequi non commodi ad fugit magni
                      consequatur laboriosam tenetur temporibus autem deserunt,
                      obcaecati architecto.{" "}
                    </p>
                  }
                  cardImage={restaurant}
                  cardLinks={
                    <>
                      <Link to="https://github.com" target="_blank">
                        <AiFillGithub
                          className="transition duration-200 "
                          size={35}
                        />
                      </Link>
                      <Link to="https://react.dev/" target="_blank">
                        <BiLinkAlt
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
