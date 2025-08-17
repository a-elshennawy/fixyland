import { FaBath, FaBed } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function RoomTypes() {
  return (
    <>
      <div className="container-fluid roomTypes row justify-content-center align-items-center text-center m-0">
        <div className="textSide col-12">
          <span>ROOM TYPE</span>
          <h1 className="my-3">the best luxury rooms and suits</h1>
        </div>
        <div className="rooms col-12 row justify-content-center align-items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="roomCard col-lg-3 col-10"
          >
            <div className="img">
              <span>300$ / night</span>
              <img src="imgs/room1.jpg" alt="" />
            </div>
            <div className="Cardtext text-start">
              <h3>deluxe rooms</h3>
              <span>
                <FaPeopleGroup />2 guests
              </span>
              <span>
                <FaBed />2 beds
              </span>
              <span>
                <FaBath />1 bath
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                esse.
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="roomCard col-lg-3 col-10"
          >
            <div className="img">
              <span>400$ / night</span>
              <img src="imgs/room2.jpg" alt="" />
            </div>
            <div className="Cardtext text-start">
              <h3>junior rooms</h3>
              <span>
                <FaPeopleGroup />3 guests
              </span>
              <span>
                <FaBed />3 beds
              </span>
              <span>
                <FaBath />1 bath
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                esse.
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="roomCard col-lg-3 col-10"
          >
            <div className="img">
              <span>500$ / night</span>
              <img src="imgs/room3.jpg" alt="" />
            </div>
            <div className="Cardtext text-start">
              <h3>family rooms</h3>
              <span>
                <FaPeopleGroup />4 guests
              </span>
              <span>
                <FaBed />4 beds
              </span>
              <span>
                <FaBath />2 baths
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                esse.
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="roomCard col-lg-3 col-10"
          >
            <div className="img">
              <span>200$ / night</span>
              <img src="imgs/room4.jpg" alt="" />
            </div>
            <div className="Cardtext text-start">
              <h3>single rooms</h3>
              <span>
                <FaPeopleGroup />1 guest
              </span>
              <span>
                <FaBed />1 bed
              </span>
              <span>
                <FaBath />1 bath
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
                esse.
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
