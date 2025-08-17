import { GoArrowUpRight } from "react-icons/go";
import { motion } from "motion/react";

export default function ContactForm() {
  return (
    <>
      {/* here in motion it most commnly requires an initial case , then whileInview (or animate in case animation happens once) and transition as usual css */}
      <motion.form
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="contactForm row justify-content-start align-items-end gap-1 m-0"
      >
        <div className="inputConatiner col-lg-2 col-4 row justify-content-start align-items-center gap-1">
          <label className="col-12" htmlFor="checkIn">
            check in
          </label>
          <input className="col-12" type="date" name="checkOut" id="checkIn" />
        </div>
        <div className="inputConatiner col-lg-2 col-4 row justify-content-start align-items-center gap-1">
          <label className="col-12" htmlFor="checkOut">
            check out
          </label>
          <input className="col-12" type="date" name="checkOut" id="checkOut" />
        </div>
        <div className="inputConatiner col-lg-2 col-4 row justify-content-start align-items-center gap-1">
          <label className="col-12" htmlFor="rooms">
            rooms
          </label>
          <select name="roomsNum" id="rooms" className="col-12">
            <option value="1">1 room</option>
            <option value="2">2 rooms</option>
            <option value="3">3 rooms</option>
            <option value="4">4 rooms</option>
          </select>
        </div>
        <div className="inputConatiner col-lg-2 col-4 row justify-content-start align-items-center gap-1">
          <label className="col-12" htmlFor="adults">
            adults
          </label>
          <select className="col-12" name="adults" id="adults">
            <option value="1">1 adult</option>
            <option value="2">2 adults</option>
            <option value="3">3 adults</option>
            <option value="4">4 adults</option>
          </select>
        </div>
        <div className="inputConatiner col-lg-2 col-4 row justify-content-start align-items-center gap-1">
          <label className="col-12" htmlFor="children">
            children
          </label>
          <select className="col-12" name="children" id="children">
            <option value="1">1 children</option>
            <option value="2">2 children</option>
            <option value="3">3 children</option>
            <option value="4">4 children</option>
          </select>
        </div>
        <button type="submit" className="subBtn col-lg-2 col-4">
          Check now
          <GoArrowUpRight />
        </button>
      </motion.form>
    </>
  );
}
