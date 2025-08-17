import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function ContactInfoBar() {
  return (
    <>
      <div className="contactInfoBar row justify-content-between align-items-center m-0">
        <ul className="contacts col-6 text-start">
          <li>
            <GoDotFill /> 7651 Sabina Park, 115 Devon dr ,USA
          </li>
          <li>
            <GoDotFill /> info@mail.com
          </li>
          <li>
            <GoDotFill /> (+1) 234 567 8900
          </li>
        </ul>
        <ul className="social col-4 text-end">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaXTwitter />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaBehance />
          </li>
        </ul>
      </div>
    </>
  );
}
