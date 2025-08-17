import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

export default function Instagram() {
  return (
    <>
      <div className="instagram row justify-content-center align-items-start text-center m-0">
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/room1.jpg"
          loading="lazy"
        />
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/room2.jpg"
          loading="lazy"
        />
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/room3.jpg"
          loading="lazy"
        />
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/room4.jpg"
          loading="lazy"
        />
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/spOff1.jpg"
          loading="lazy"
        />
        <img
          className="col-lg-2 col-6 p-0"
          src="/imgs/spOff2.jpg"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="link col-lg-2 col-6"
        >
          <FaInstagram />
          <h3> follow our instagram</h3>
        </motion.div>
      </div>
    </>
  );
}
