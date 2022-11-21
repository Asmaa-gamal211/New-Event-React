// import overviewData from "./components/data";
// import Overview from "./components/overview/Overview";

import CreativeSpeakers from "./components/creativespeakers/CreativeSpeakers";
import { speakerData } from "./components/creativespeakers/speakerData";

function App() {
  return (
    <div>
      {/* <div className="d-flex">
        {overviewData.map((item) => {
          return (
            <Overview
              id={item.id}
              icon={item.icon}
              desc={item.description}
              title={item.title}
            />
          );
        })}
      </div> */}
      <div className="d-flex">
        {speakerData.map((item) => {
          return (
            <CreativeSpeakers
              id={item.id}
              img={item.img}
              name={item.name}
              job={item.job}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
