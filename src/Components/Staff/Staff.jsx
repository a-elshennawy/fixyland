import { FaPlus } from "react-icons/fa";
import { GiIsland, GiPalmTree } from "react-icons/gi";
import { MdOutlineTsunami } from "react-icons/md";
import { PiIslandFill } from "react-icons/pi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { motion } from "motion/react";

export default function Staff() {
  return (
    <>
      <div className="container-fluid staff row justify-content-center align-items-start text-center m-0">
        <div className="textSide col-12">
          <span>FIXYLAND STAFF</span>
          <h1>expert staff persons</h1>
        </div>
        <div className="cardsSide col-12 row justify-content-center align-items-start text-center">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="cardItem col-lg-3 col-10 my-2"
          >
            <div className="img">
              <img src="/imgs/chef.jpg" alt="" />
              <span>
                <FaPlus />
              </span>
            </div>
            <div className="info">
              <h3>michael dean</h3>
              <p>
                <TfiLayoutLineSolid /> chef master
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="cardItem col-lg-3 col-10 my-2"
          >
            <div className="img">
              <img src="/imgs/serv.jpg" alt="" />
              <span>
                <FaPlus />
              </span>
            </div>
            <div className="info">
              <h3>arnold taylor</h3>
              <p>
                <TfiLayoutLineSolid /> room cleaner
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="cardItem col-lg-3 col-10 my-2"
          >
            <div className="img">
              <img src="/imgs/barista.jpg" alt="" />
              <span>
                <FaPlus />
              </span>
            </div>
            <div className="info">
              <h3>michael duo</h3>
              <p>
                <TfiLayoutLineSolid />
                assist chef
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="cardItem col-lg-3 col-10 my-2"
          >
            <div className="img">
              <img src="/imgs/supervisor.jpg" alt="" />
              <span>
                <FaPlus />
              </span>
            </div>
            <div className="info">
              <h3>david mack</h3>
              <p>
                <TfiLayoutLineSolid /> supervisor
              </p>
            </div>
          </motion.div>
        </div>
        <div className="icons col-lg-8 col-12 row justify-content-center align-items-center text-center">
          <span className="col-2">
            <GiIsland />
          </span>
          <span className="col-2">
            <PiIslandFill />
          </span>
          <span className="col-2">
            <GiPalmTree />
          </span>
          <span className="col-2">
            <MdOutlineTsunami />
          </span>
          <span className="col-2">
            <GiIsland />
          </span>
          <span className="col-2">
            <PiIslandFill />
          </span>
        </div>
      </div>
    </>
  );
}
