import { CgMenuLeft } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import ContactForm from "../ContactForm/ContactForm";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* offcanvas for small screens */}
      <button
        className="offCanvTrigger"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <GiHamburgerMenu />
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <img src="/imgs/logo.png" loading="lazy" />
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <IoClose />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul>
            <li>
              Home <MdKeyboardArrowRight />
            </li>
            <li>
              Pages <MdKeyboardArrowRight />
            </li>
            <li>
              Rooms <MdKeyboardArrowRight />
            </li>
            <li>
              Services <MdKeyboardArrowRight />
            </li>
            <li>
              Blog <MdKeyboardArrowRight />
            </li>
            <li>
              Contact <MdKeyboardArrowRight />
            </li>
          </ul>
          <button>
            Book your stay
            <GoArrowUpRight />
          </button>
        </div>
      </div>
      <div className="hero row justify-content-center align-items-center m-0">
        <div className="BGLayer"></div>
        {/* navBar for wide screen */}
        <nav
          className={`col-12 row justify-content-between align-items-center ${
            isScrolled ? "fixedNav" : ""
          }`}
        >
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="img col-2"
          >
            <img src="imgs/logo.png" loading="lazy" />
          </motion.div>
          <ul className="col-6 text-center">
            <li>
              Home <IoIosArrowDown />
            </li>
            <li>
              Pages <IoIosArrowDown />
            </li>
            <li>
              Rooms <IoIosArrowDown />
            </li>
            <li>
              Services <IoIosArrowDown />
            </li>
            <li>
              Blog <IoIosArrowDown />
            </li>
            <li>
              Contact <IoIosArrowDown />
            </li>
          </ul>
          <div className="minSec col-4 text-end">
            <span>
              <CiSearch />
            </span>
            <span>
              <CgMenuLeft />
            </span>
            <button>
              Book your stay
              <GoArrowUpRight />
            </button>
          </div>
        </nav>
        <div className="textSec col-12 text-center">
          <h1>
            Book with Best
            <br />
            <span>Luxury hotel</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            libero minima possimus quae quod earum non fuga facere laboriosam
            cum.
          </p>
          <div className="btnArea">
            <button className="exploreBtn">
              explore more <GoArrowUpRight />
            </button>
            <button className="SBtn">
              our services <GoArrowUpRight />
            </button>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
