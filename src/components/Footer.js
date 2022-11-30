import styled from "@emotion/styled";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { theme } from "../designSystem/styles/config";

const Footer = () => {
  return (
    <Foot className="container">
      <p>copyright &copy; all right reserved | made with love 🖤 </p>
      <Icons>
        <FaFacebookF />
        <FaTwitter />
        <FaGoogle />
        <FaBehance />
        <FaDribbble />
      </Icons>
    </Foot>
  );
};

const Foot = styled.div`
  text-align: center;
  padding: 3rem 0;
`;
const Icons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  svg {
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
  }
  svg:hover {
    color: white;
    background-color: ${theme.primary};
    border-radius: 50%;
  }
`;

export default Footer;
