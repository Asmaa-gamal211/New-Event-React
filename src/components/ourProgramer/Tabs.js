import styled from "@emotion/styled";
import React, { useState } from "react";
import OurProgrames from "../../designSystem/ourProgrames/OurProgrames";
import {
  tab1,
  tab2,
  tab3,
} from "../../designSystem/ourProgrames/ourProgramesData";
import { theme } from "../../designSystem/styles/config";

const Tabs = () => {
  const [tab, setTab] = useState("tab1");
  const switchTab = (tab) => {
    setTab(tab);
  };
  return (
    <div>
      <Tab>
        <Span
          style={{ color: tab === "tab1" ? theme.primary : "" }}
          onClick={() => switchTab("tab1")}
        >
          first day
        </Span>
        <Span
          style={{ color: tab === "tab2" ? theme.primary : "" }}
          onClick={() => switchTab("tab2")}
        >
          second day
        </Span>
        <Span
          style={{ color: tab === "tab3" ? theme.primary : "" }}
          onClick={() => switchTab("tab3")}
        >
          third day
        </Span>
      </Tab>
      <Line></Line>
      <div>
        {tab === "tab2"
          ? tab2.map((item) => {
              return (
                <OurProgrames
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  time={item.time}
                  description={item.description}
                  roomNumber={item.roomNumber}
                />
              );
            })
          : tab === "tab3"
          ? tab3.map((item) => {
              return (
                <OurProgrames
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  time={item.time}
                  description={item.description}
                  roomNumber={item.roomNumber}
                />
              );
            })
          : tab1.map((item) => {
              return (
                <OurProgrames
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  title={item.title}
                  time={item.time}
                  description={item.description}
                  roomNumber={item.roomNumber}
                />
              );
            })}
      </div>
    </div>
  );
};

const Tab = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: bold;
`;
const Span = styled.span`
  cursor: pointer;
`;

const Line = styled.div`
  border: 1px solid #999;
  width: 85%;
  height: 1px;
  margin: 1.5rem 0;
`;
export default Tabs;
