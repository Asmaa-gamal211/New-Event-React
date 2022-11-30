import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";
import intro from "../shared/imags/intro-bg.jpg";

const Header = () => {
  return (
    <HeaderWrapper>
      <H3>july 22 - 26 in san francisco, CA</H3>
      <H2>web design confrenece</H2>
      <Learnmore> Learn more</Learnmore>
      <Register>register now</Register>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 100vh;
  padding-top: 20%;
  text-align: center;
  background: url(${intro}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
const H3 = styled("h3")`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10%;
`;
const H2 = styled("h2")`
  color: white;
  font-size: 2.8rem;
  font-weight: bold;
`;
const Learnmore = styled.button`
  padding: 10px 30px;
  margin: 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  :hover {
    background-color: white;
    color: ${theme.secondary};
  }
  transition: all 0.5s;
`;
const Register = styled.button`
  padding: 10px 30px;
  border: 2px solid transparent;
  font-size: 1.2rem;
  color: white;
  background-color: ${theme.primary};
  :hover {
    background-color: transparent;
    border: 2px solid white;
  }
  transition: all 0.5s;
`;

export default Header;
