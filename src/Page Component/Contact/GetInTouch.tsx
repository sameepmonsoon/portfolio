import { MdPhone } from "react-icons/md";
import { TbBrandGmail } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import Form from "../../Components/Form/Form";
import LocationContainer from "../../Components/LocationContainer/LocationContainer";
import { motion } from "framer-motion";
const GetIntouch = () => {
  return (
    <section className="flex flex-col justify-center items-center md:gap-[5rem] py-10">
      <span className="order-1 flex flex-row text-[25px] font-semibold capitalize h-[5rem] md:h-full dark:text-white text-deep-blue">
        Grab a Coffee ☕
      </span>
      <div className="flex flex-col md:flex-row order-2 justify-center items-center md:justify-start md:items-start gap-5 h-[80vh] w-[21rem] md:w-[55vw] dark:bg-deep-blue bg-white ">
        <div className="order-2 md:order-2 ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            variants={{
              hidden: {
                x: -100,
              },
              visible: {
                x: 0,
              },
            }}>
            <Form />
          </motion.div>
        </div>
        <div className="order-1 md:order-3">
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
            <LocationContainer
              cardTitle=""
              cityState="City, Country"
              cityStateIcon={<VscLocation size={25} />}
              phoneNumber={""}
              phoneNumberIcon={<MdPhone size={25} />}
              contactDetails="john.doe@gmail.com"
              contactDetailIcon={<TbBrandGmail size={25} />}
            />
          </motion.div>
        </div>
      </div>
      <div style={{ width: "100%", position: "relative", top: "-10px" }}>
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/sport-gps/">hiking gps</a>
        </iframe>
      </div>
    </section>
  );
};

export default GetIntouch;
