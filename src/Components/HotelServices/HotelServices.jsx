import { CgGym } from "react-icons/cg";
import { FaHotTub } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { LiaHotTubSolid } from "react-icons/lia";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function HotelServices() {
  return (
    <>
      <div className="container-fluid services row justify-content-center align-items-start text-center m-0 gap-5">
        <div className="textSide col-lg-5 col-12 text-start">
          <span>hotel services</span>
          <h1>get the best hotel fixyland services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            aliquid quas quibusdam molestiae reiciendis!
          </p>
          <button className="viewBtn">
            view all
            <FiArrowUpRight />
          </button>
        </div>
        <div className="icons col-lg-5 col-12 row justify-content-center align-items-center text-center gap-3 m-0">
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="iconCard first col-lg-5 col-10"
          >
            <div className="BGLayer"></div>
            <CgGym />
            <h3>fitness center</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              maxime autem animi labore illo molestias consequuntur commodi quis
              debitis aliquam.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="iconCard col-lg-5 col-10"
          >
            <FaHotTub />
            <h3>jacuzzi</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              maxime autem animi labore illo molestias consequuntur commodi quis
              debitis aliquam.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="iconCard col-lg-5 col-10"
          >
            <FaPersonSwimming />
            <h3>swimming pool</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              maxime autem animi labore illo molestias consequuntur commodi quis
              debitis aliquam.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="iconCard col-lg-5 col-10"
          >
            <LiaHotTubSolid />
            <h3>SPA treatments</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              maxime autem animi labore illo molestias consequuntur commodi quis
              debitis aliquam.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
