import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";
import about from "../shared/imags/overview-img.jpg";

const Aboutus = () => {
  return (
    <div className="container">
      <AboutUs>
        <div>
          <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h5>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
        </div>
        <div>
          <img width={"100%"} src={about} alt="imgs" />
        </div>
      </AboutUs>
    </div>
  );
};

const AboutUs = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const P = styled.p`
  color: ${theme.gray};
  font-size: 1.1rem;
  margin: 2rem 0;
`;

export default Aboutus;
