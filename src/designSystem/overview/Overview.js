import styled from "@emotion/styled";
import React from "react";

const Overview = ({ icon, title, desc, id }) => {
  return (
    <OverviewWrapper key={id}>
      <div style={{ color: "#f2545f", fontSize: "2rem" }}>{icon}</div>
      <Title>{title}</Title>
      <Description>{desc}</Description>
    </OverviewWrapper>
  );
};

const OverviewWrapper = styled("div")`
  width: 350px;
  text-align: center;
`;
const Title = styled("h3")`
  color: #d4d4dd;
  margin: 2rem 0;
`;
const Description = styled("p")`
  font-size: 20px;
  color: #707070;
`;
export default Overview;
