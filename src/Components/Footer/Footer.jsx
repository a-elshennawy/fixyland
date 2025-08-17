import { FaBehance, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
export default function Footer() {
  return (
    <>
      <div className="container-fluid footer row justify-content-center align-items-baseline text-center m-0">
        <div className="footerItem col-lg-3 col-12">
          <img src="/imgs/logo.png" loading="lazy" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            exercitationem accusantium pariatur consectetur dolorem! Illum.
          </p>
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaXTwitter />
          </span>
          <span>
            <FaBehance />
          </span>
        </div>
        <div className="footerItem col-lg-3 col-12">
          <h2>explore</h2>
          <ul>
            <li>about hotel</li>
            <li>pricing</li>
            <li>hotel staff</li>
            <li>learn more</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="footerItem col-lg-3 col-12">
          <h2>contact</h2>
          <ul>
            <li>7651 Sabina Park, 115 Devon dr ,USA</li>
            <li>(+1) 234 567 8900</li>
            <li>info@mail.com</li>
          </ul>
        </div>
        <div className="footerItem col-lg-3 col-12">
          <div className="newsLetter">
            <h2>newsletter</h2>
            <input type="email" name="email" placeholder="ex: info@email.com" />
            <IoIosSend />
          </div>
        </div>
      </div>
    </>
  );
}
