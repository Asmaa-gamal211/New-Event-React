import React from "react";
import { Description, OverviewWrapper, Title } from "../styles/Styled";

const Overview = ({ icon, title, desc, id }) => {
  return (
    <OverviewWrapper key={id}>
      <div style={{ color: "#f2545f", fontSize: "2rem" }}>{icon}</div>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </OverviewWrapper>
  );
};

export default Overview;
