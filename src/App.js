import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "../src/components/hero/Hero";
import Service from "./components/service/Service";
import Banner from "./components/banner/Banner";
import AppStore from "./components/app/AppStore";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Service />
        <Banner />
        <AppStore />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
