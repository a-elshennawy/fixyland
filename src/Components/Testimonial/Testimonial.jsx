import { RiStarSFill } from "react-icons/ri";
import { motion } from "motion/react";

export default function Testimonial() {
  return (
    <>
      <div className="container-fluid test row justify-content-center align-items-start text-center m-0 gap-2">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="imgSide col-lg-5 col-10"
        >
          <img src="/imgs/hotelLobby.jpg" loading="lazy" />
          <img src="/imgs/poolaboveView.jpg" className="small" loading="lazy" />
        </motion.div>
        <div className="textSide col-lg-5 col-12">
          <span>Testimonial</span>
          <h1>amazing feedback say about service</h1>
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="feedback"
          >
            <span className="rate">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              quis saepe velit in. Nobis voluptates nesciunt officia eos quam
              voluptatibus praesentium doloribus impedit ratione cum, quidem
              maiores animi neque sequi.
            </p>
            <div className="personInfo">
              <img src="/imgs/aboutPerson.jpg" loading="lazy" />
              <h5>
                <strong> Bella Andrew</strong> <br />
                customer
              </h5>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
