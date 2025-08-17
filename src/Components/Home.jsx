import About from "./About/About";
import ContactInfoBar from "./ContactInfoBar/ContactInfoBar";
import FoodDrinks from "./FoodDrinks/FoodDrinks";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HotelServices from "./HotelServices/HotelServices";
import Instagram from "./Instagram/Instagram";
import News from "./News/News";
import RoomTypes from "./RoomTypes/RoomTypes";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import Staff from "./Staff/Staff";
import Testimonial from "./Testimonial/Testimonial";
import { ThemeToggle } from "./ThemeProvider/ThemeProvider";
import UpBtn from "./UpBtn/UpBtn";
import Vid from "./Vid/Vid";

export default function Home() {
  return (
    <>
      <ContactInfoBar />
      <Hero />
      <About />
      <RoomTypes />
      <HotelServices />
      <Vid />
      <FoodDrinks />
      <SpecialOffers />
      <Testimonial />
      <Staff />
      <News />
      <Instagram />
      <Footer />
      <ThemeToggle />
      <UpBtn />
    </>
  );
}
