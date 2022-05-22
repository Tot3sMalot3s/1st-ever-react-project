import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";

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
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
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

const Transfer = styled(Link)`
  color: black;
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WarnMsg = styled.p`
  background-color: #c94f4f83;
  color: white;
  padding: 15px;
  margin: 25px 10px 10px 10px;
`;

const SuccessLogTxt = styled.p`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = () => {
  let { loginUser } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={loginUser}>
          <Input
            type="text"
            name="username"
            placeholder="Enter Username"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <Button>LOG IN</Button>
        </Form>
        <BottomWrapper>
          <Transfer to="/password-reset">FORGOT PASSWORD?</Transfer>
          <Transfer to="/register">CREATE NEW ACCOUNT</Transfer>
        </BottomWrapper>
      </Wrapper>
    </Container>
  );
};

export default Login;
