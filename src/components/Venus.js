import styled from "@emotion/styled";
import React from "react";
import venus from "../shared/imags/venue-bg.jpg";

const Venus = () => {
  return (
    <Venuss>
      <div className="container">
        <Title>
          <span style={{ color: "#f2545f", marginLeft: "1rem" }}>Venue</span>
        </Title>
        <P>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
          repudiandae magnam animi dicta itaque nisi facilis placeat nostrum
          quas! Modi laborum itaque!
        </P>
        <H3>New Event</H3>
        <H3>120 market stret,built 110</H3>
        <H3>san francisco, CA 10110</H3>
        <H3>tel: 010-020-0120</H3>
      </div>
    </Venuss>
  );
};

const Venuss = styled.div`
  padding: 5rem 0;
  background: url(${venus}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;
const P = styled.p`
  width: 550px;
  margin: 2rem 0;
`;
const H3 = styled.span`
  display: block;
  font-weight: bold;
  line-height: 2;
  letter-spacing: 1.8;
`;
export default Venus;
