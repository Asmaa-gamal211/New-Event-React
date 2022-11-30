import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";
import contact from "../shared/imags/contact-bg.jpg";

const ContactUs = () => {
  return (
    <Contact>
      <ContactWrapper className="container">
        <div style={{ width: "40%", padding: "2rem 0" }}>
          <Title>
            <span>new</span>
            <span style={{ color: "#f2545f", marginLeft: "1rem" }}>Event</span>
          </Title>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quo in quibusdam repudiandae.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Consequuntur quo in quibusdam repudiandae.
          </P>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quo in quibusdam repudiandae .quo in quibusdam
            repudiandae.
          </P>
          <DownloadNow>Download now</DownloadNow>
        </div>
        <Keepintouch style={{ width: "45%" }}>
          <Title>
            <span>keep in</span>
            <span style={{ color: "#f2545f", marginLeft: "1rem" }}>touch</span>
          </Title>
          <form action="">
            <Input type="text" name="" id="" placeholder="Name" />
            <Input type="mail" name="" id="" placeholder="E-mail" />
            <textarea
              className="text-area"
              placeholder="Message"
              rows="5"
              cols="50"
            ></textarea>
          </form>
          <Send>Send</Send>
        </Keepintouch>
      </ContactWrapper>
    </Contact>
  );
};

const Contact = styled.div`
  padding: 3rem 0;
  background: url(${contact}) fixed;
  background-repeat: no-repeat;
  background-size: cover;
`;
const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.span`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
const P = styled.p`
  margin: 0 0 2rem 0;
`;
const DownloadNow = styled.button`
  padding: 5px 30px;
  border: 2px solid transparent;
  font-size: 1.2rem;
  color: white;
  background-color: ${theme.primary};
  align-self: flex-end;
  border-radius: 30px;
  :hover {
    background-color: transparent;
    border: 2px solid white;
  }
  transition: all 0.5s;
`;

const Keepintouch = styled.div`
  background-color: white;
  padding: 4rem 2rem;
  border-radius: 25px;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  margin: 1rem 0;
  padding: 0.5rem 1rem 0.5rem 0;
  border-bottom: 1px solid #ddd;
  outline: none;
`;

const Send = styled.button`
  padding: 5px 30px;
  border: 2px solid transparent;
  font-size: 1.2rem;
  color: white;
  background-color: ${theme.secondary};
  align-self: flex-end;
  border-radius: 30px;
  margin: 3rem 0;
  :hover {
    background-color: transparent;
    border: 2px solid white;
  }
  transition: all 0.5s;
`;
export default ContactUs;
