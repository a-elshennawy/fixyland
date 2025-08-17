import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function SpecialOffers() {
  return (
    <>
      <div className="container-fluid spOffers row justify-content-center align-items-start text-center m-0">
        <div className="textSide col-12">
          <span>Special offers</span>
          <h1>special discount for hotel & resort booking</h1>
        </div>
        <div className="cardsSide col-12 row justify-content-center align-items-start text-center gap-3">
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="offercard col-lg-3 col-10"
          >
            <img src="/imgs/spOff1.jpg" loading="lazy" />
            <div className="infoLayer">
              <span>30% off</span>
              <h3>get 30% off on hotel booking</h3>
              <button className="bookbtn">
                book now
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="offercard col-lg-3 col-10"
          >
            <img src="/imgs/spOff2.jpg" loading="lazy" />
            <div className="infoLayer">
              <span>35% off</span>
              <h3>get 35% off on resort booking</h3>
              <button className="bookbtn">
                book now
                <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
