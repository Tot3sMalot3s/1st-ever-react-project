import React from "react";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const Container = styled.div`
  width: auto;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://i.ibb.co/4Zh6d1H/bia-andrade-PO8-Woh4-YBD8-unsplash.jpg")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: start;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 20px;
  padding: 10px;
`;

const Button = styled.button`
  width: 90%;
  border: none;
  padding: 15px 20px;
  margin: 10px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #b1b1b1;
    color: black;
  }
`;

const Text = styled.p`
  margin: 20px;
  font-size: 16px;
`;

const PasswordResetPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Reset your password</Title>
          <Text>
            Please, provide us your email in order to get your password back
          </Text>
          <Form>
            <Input type="text" placeholder="Email" required />
            <Button>Get my password</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default PasswordResetPage;
