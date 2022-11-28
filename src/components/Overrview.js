import styled from "@emotion/styled";
import React from "react";
import overviewData from "../designSystem/overview/data";
import Overview from "../designSystem/overview/Overview";

const Overrview = () => {
  return (
    <Overrrview>
      <div className="d-flex">
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
      </div>
    </Overrrview>
  );
};

const Overrrview = styled.div`
  padding: 3rem 0;
  background-color: #222;
  color: white;
`;

export default Overrview;
