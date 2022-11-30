import styled from "@emotion/styled";
import React from "react";
import { theme } from "../designSystem/styles/config";
import register from "../shared/imags/register-bg.jpg";

const Register = () => {
  return (
    <RegisterHere>
      <RegisterContent className="container">
        <div style={{ width: "45%" }}>
          <Title>
            <span>register</span>
            <span style={{ color: "#f2545f", marginLeft: "1rem" }}>Here</span>
          </Title>
          <h5 style={{ margin: "2rem 0", lineHeight: "1.8" }}>
            Natus eligendi quaerat maiores ipsum enim ipsa recusandae similique
            maxime iure aut! Ullam ab animi omnis
          </h5>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur quo in quibusdam repudiandae ab nostrum iste
            perspiciatis, quod vitae ex molestias debitis nobis atque ipsum
            voluptate corrupti labore reiciendis vero.
          </P>
        </div>
        <Form style={{ width: "40%" }}>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="number" placeholder="Phone Number" />
          <Input type="mail" placeholder="Email Address" />
          <RegisterNow>Register now</RegisterNow>
        </Form>
      </RegisterContent>
    </RegisterHere>
  );
};

const RegisterHere = styled.div`
  background: url(${register}) fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 5rem 0;
  color: white;
  line-height: 1.8;
`;

const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const P = styled.p`
  margin: 2rem 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

const Input = styled.input`
  background-color: transparent;
  border: 2px solid white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: white;
`;

const RegisterNow = styled.button`
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

export default Register;
