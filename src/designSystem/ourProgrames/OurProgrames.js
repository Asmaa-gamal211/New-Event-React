import styled from "@emotion/styled";
import React from "react";
import { BiMap } from "react-icons/bi";
import { FiClock } from "react-icons/fi";

const OurProgrames = ({
  id,
  img,
  time,
  roomNumber,
  title,
  name,
  description,
}) => {
  return (
    <OurProgramesWrapper key={id}>
      <div className="circle-img">
        <img src={img} alt="program img" />
      </div>
      <div>
        <Icon>
          <div>
            <FiClock /> {time}
          </div>
          <div>
            <BiMap /> {roomNumber}
          </div>
        </Icon>
        <h2>{title}</h2>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
    </OurProgramesWrapper>
  );
};

const OurProgramesWrapper = styled.div`
  display: flex;
  /* justify-content: baseline;
  align-items: center; */
  gap: 1rem;
  margin: 2rem 0;
`;
const Icon = styled.div`
  display: flex;
  gap: 2rem;
`;
export default OurProgrames;
