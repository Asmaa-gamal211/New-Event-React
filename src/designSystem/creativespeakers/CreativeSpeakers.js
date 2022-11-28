import styled from "@emotion/styled";
import React from "react";
import { theme } from "../styles/config";

const CreativeSpeakers = ({ img, name, job }) => {
  return (
    <SpeakersWrapper>
      <img src={img} alt="img" style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>{job}</p>
    </SpeakersWrapper>
  );
};

const SpeakersWrapper = styled.div`
  width: 285px;
  text-align: center;
  color: ${theme.gray};
`;

export default CreativeSpeakers;
