import React from "react";
import Aboutus from "../components/Aboutus";
import Creative from "../components/Creative";
import Header from "../components/Header";
import OurProgramer from "../components/ourProgramer/OurProgramer";
import Overrview from "../components/Overrview";
import WatchVedio from "../components/WatchVedio";
import Sponsers from "../designSystem/sponsers/Sponsers";
import sponsersData from "../designSystem/sponsers/sponsersData";

const Home = () => {
  return (
    <div>
      <Header />
      <Aboutus />
      <Overrview />
      <WatchVedio />
      <Creative />
      <OurProgramer />

      <div>
        <div className="d-flex">
          {sponsersData.map((item) => {
            return <Sponsers key={item.id} id={item.id} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
