import { FiArrowUpRight } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "motion/react";

export default function FoodDrinks() {
  return (
    <>
      <div className="container-fluid foodDrinks row justify-content-center align-items-start text-center m-0 gap-5">
        <div className="textSide col-lg-5 col-12 text-start">
          <span>Food & Drins</span>
          <h1>quality food and drinks your trip are enjoyable</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            cupiditate voluptatibus modi dolores, architecto aspernatur
            assumenda debitis temporibus odit at unde eum culpa similique
            quaerat.
          </p>
          <ul>
            <li>
              <FaCheckCircle />
              <strong>free breakfast, tea & coffee </strong>
              <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, dolore?
              </p>
            </li>
            <li>
              <FaCheckCircle />
              <strong>quality foods & drinks</strong> <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, dolore?
              </p>
            </li>
            <li>
              <FaCheckCircle />
              <strong>restaurant & bar</strong> <br />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae, dolore?
              </p>
            </li>
          </ul>
          <button className="learnBtn">
            learn more
            <FiArrowUpRight />
          </button>
        </div>
        <div className="imgSide col-lg-6 col-12 row justify-content-center align-items-center gap-1">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="img col-lg-5 col-12 firstPic"
          >
            <img src="/imgs/food.jpg" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="img col-lg-5 col-12 secPic"
          >
            <img src="/imgs/drink.jpg" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
