import { IoPerson } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";

export default function News() {
  return (
    <>
      <div className="container-fluid news row justify-content-center align-items-start text-center m-0">
        <div className="textSide col-12">
          <span>Hotel News</span>
          <h1>get more updates for fixyland</h1>
        </div>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="posts col-12 row justify-content-center align-items-start text-center m-0"
        >
          <div className="post col-lg-4 col-12">
            <div className="img">
              <span>hotel</span>
              <img src="/imgs/beach.jpg" loading="lazy" />
            </div>
            <div className="postInfo">
              <p>
                <SlCalender /> jan 16, 2024 -
                <IoPerson /> admin
              </p>
              <h3>most expensive hotel rooms in new york</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, neque!
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </div>
          <div className="post col-lg-4 col-12">
            <div className="img">
              <span>resort</span>
              <img src="/imgs/resort.jpg" loading="lazy" />
            </div>
            <div className="postInfo">
              <p>
                <SlCalender /> jan 16, 2024 -
                <IoPerson /> admin
              </p>
              <h3>most expensive hotel rooms in new york</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, neque!
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </div>
          <div className="post col-lg-4 col-12">
            <div className="img">
              <span>room</span>
              <img src="/imgs/bed.jpg" loading="lazy" />
            </div>
            <div className="postInfo">
              <p>
                <SlCalender /> jan 16, 2024 -
                <IoPerson /> admin
              </p>
              <h3>most expensive hotel rooms in new york</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, neque!
              </p>
              <button className="moreBtn">
                read more
                <FiArrowUpRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
