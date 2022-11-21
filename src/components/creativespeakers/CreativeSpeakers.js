import styled from "@emotion/styled";
import React from "react";

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
`;

export default CreativeSpeakers;
