import React from "react";
import Aboutus from "../components/Aboutus";
import Accordion from "../components/accordion/Accordionn";
import ContactUs from "../components/ContactUs";
import Creative from "../components/Creative";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurProgramer from "../components/ourProgramer/OurProgramer";
import Overrview from "../components/Overrview";
import Register from "../components/Register";
import Sponser from "../components/Sponser";
import Venus from "../components/Venus";
import WatchVedio from "../components/WatchVedio";

const Home = () => {
  return (
    <div>
      <Header />
      <Aboutus />
      <Overrview />
      <WatchVedio />
      <Creative />
      <OurProgramer />
      <Register />
      <Accordion />
      <Venus />
      <Sponser />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
