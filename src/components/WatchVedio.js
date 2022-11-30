import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";

const WatchVedio = () => {
  return (
    <div className="container">
      <WatchVed>
        <div style={{ width: "45%" }}>
          <h5>watch vedio</h5>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
          <P>
            Praesentium ea laborum, voluptate sit deserunt exercitationem quo
            omnis ullam assumenda excepturi
          </P>
        </div>
        <div style={{ width: "45%" }}>
          <iframe
            title="name"
            width="100%"
            height={"350px"}
            src="https://www.youtube.com/embed/XDPwXQjAlB0"
          ></iframe>
        </div>
      </WatchVed>
    </div>
  );
};

const WatchVed = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const P = styled.p`
  color: ${theme.gray};
  font-size: 1.1rem;
  margin: 2rem 0;
`;
export default WatchVedio;
