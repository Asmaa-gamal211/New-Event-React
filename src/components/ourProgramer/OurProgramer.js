import styled from "@emotion/styled";
import React from "react";
import Tabs from "./Tabs";

const OurProgramer = () => {
  return (
    <Ourprogramer className="container">
      <Title>
        <span>our</span>
        <span style={{ color: "#f2545f", marginLeft: "1rem" }}>programes</span>
      </Title>
      <P>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
      </P>
      <div>
        <Tabs />
      </div>
    </Ourprogramer>
  );
};

const Ourprogramer = styled.div`
  padding: 4rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const P = styled.p`
  margin: 2rem 0;
`;

export default OurProgramer;
