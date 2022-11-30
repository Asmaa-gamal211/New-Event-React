import styled from "@emotion/styled";
import React from "react";
import { sponsersData } from "../designSystem/sponsers/sponsersData";
import Sponsers from "../designSystem/sponsers/Sponsers";
const Sponser = () => {
  return (
    <div className="container" style={{ padding: "5rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Title>
          <span>our</span>
          <span style={{ color: "#f2545f", marginLeft: "1rem" }}>Sponsers</span>
        </Title>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          quo in quibusdam repudiandae .
        </P>
      </div>
      <Sponse>
        {sponsersData.map((item) => {
          return <Sponsers key={item.id} id={item.id} img={item.img} />;
        })}
      </Sponse>
    </div>
  );
};

const Sponse = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Title = styled.span`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
const P = styled.p`
  text-align: center;
`;
export default Sponser;
