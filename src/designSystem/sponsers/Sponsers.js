import styled from "@emotion/styled";
import React from "react";

const Sponsers = ({ img, id }) => {
  return (
    <div>
      <SponsersWrapper>
        <Image src={img} alt="" />
      </SponsersWrapper>
    </div>
  );
};

const SponsersWrapper = styled.div`
  width: 250px;
`;
const Image = styled("img")`
  width: 100%;
`;

export default Sponsers;
