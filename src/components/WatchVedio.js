import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";
import about from "../shared/imags/overview-img.jpg";

const WatchVedio = () => {
  return (
    <div className="container">
      <WatchVed>
        <Watch>
          <h5>watch vedio</h5>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
        </Watch>
        <Watchv>
          <iframe
            title="name"
            width="100%"
            height={"350px"}
            src="https://www.youtube.com/embed/XDPwXQjAlB0"
          ></iframe>
        </Watchv>
      </WatchVed>
    </div>
  );
};

const WatchVed = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Watch = styled.div`
  width: 50%;
`;
const Watchv = styled.div`
  width: 50%;
`;
const P = styled.p`
  color: ${theme.gray};
  font-size: 1.1rem;
  margin: 2rem 0;
`;

export default WatchVedio;
