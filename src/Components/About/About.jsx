import { FaCheckCircle } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <div className="container-fluid about row justify-content-center align-items-start gap-1 m-0">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="img text-center col-10 col-lg-5"
        >
          <div class="circular-text">
            <svg viewBox="0 0 100 100" width="150" height="150">
              <path
                id="circlePath"
                d="M20,50a30,30 0 1,1 60,0a30,30 0 1,1 -60,0"
                fill="none"
              />
              <text fill="#fff" font-size="10" font-weight="bold">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  text-anchor="middle"
                >
                  30 years of experience hotel business
                </textPath>
              </text>
            </svg>
          </div>
          <img src="imgs/about.jpg" />
        </motion.div>
        <div className="textSide col-lg-5 col-12">
          <span>ABOUT FIXYLAND</span>
          <h2>world class luxury hotel and resort near city</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            possimus cumque nemo, id corporis doloribus.
          </p>
          <ul>
            <li>
              <FaCheckCircle /> 24 hours emergency service
            </li>
            <li>
              <FaCheckCircle /> comfortable atmosphere
            </li>
            <li>
              <FaCheckCircle /> nothing by accident
            </li>
          </ul>
          <ul>
            <li>
              <FaCheckCircle /> it is a long established fact
            </li>
            <li>
              <FaCheckCircle /> flexible and cost effective
            </li>
            <li>
              <FaCheckCircle /> get free consultation anytime
            </li>
          </ul>
          <div className="perosn row justify-content-start align-items-center gap-1 m-0">
            <div className="img col-lg-2 col-3">
              <img src="imgs/aboutPerson.jpg" />
            </div>
            <div className="info col-lg-5 col-8">
              <h6>Robert L. Robinson</h6>
              <p>CEO & Founder</p>
            </div>
          </div>
        </div>

        <div className="bottomStrip bottomStripGreen">
          <marquee behavior="" direction="">
            <h1>
              Hotel & Resot <PiStarFourFill /> Holiday Booking
              <PiStarFourFill /> Luxury Hotel
            </h1>
          </marquee>
        </div>

        <div className="bottomStrip bottomStripBlack">
          <marquee behavior="" direction="">
            <h1>
              Hotel & Resot <PiStarFourFill /> Holiday Booking
              <PiStarFourFill /> Luxury Hotel
            </h1>
          </marquee>
        </div>
      </div>
    </>
  );
}
