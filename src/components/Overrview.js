import styled from "@emotion/styled";
import React from "react";
import Overview from "../designSystem/overview/Overview";
import { overviewData } from "../designSystem/overview/data";

const Overrview = () => {
  return (
    <Overrrview>
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
    </Overrrview>
  );
};

const Overrrview = styled.div`
  padding: 3rem 0;
  background-color: #222;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export default Overrview;
