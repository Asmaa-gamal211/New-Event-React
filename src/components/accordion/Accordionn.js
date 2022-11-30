import styled from "@emotion/styled";
import Accordion from "react-bootstrap/Accordion";
import { accordionData } from "./accordionData";

function Accordionn() {
  return (
    <Accordion className="container" defaultActiveKey="0">
      <AccordionWrapper>
        {accordionData.map((item) => {
          return (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </AccordionWrapper>
    </Accordion>
  );
}

const AccordionWrapper = styled.div`
  padding: 3rem 0;
`;

export default Accordionn;
