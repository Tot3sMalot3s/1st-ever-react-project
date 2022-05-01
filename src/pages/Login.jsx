import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

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
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://3436-92-118-76-204.ngrok.io/api/login/",
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      setAuth({ user, pwd, accessToken });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username Or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unathorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <>
      {success ? (
        <Container>
          <Wrapper>
            <Title>You are logged in!</Title>
            <SuccessLogTxt>For now, you can start using ADDA</SuccessLogTxt>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            {errMsg && <WarnMsg ref={errRef}>{errMsg}</WarnMsg>}
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <Input
                type="password"
                placeholder="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <Button>LOG IN</Button>
            </Form>
            <BottomWrapper>
              <Transfer to="*">FORGOT PASSWORD?</Transfer>
              <Transfer to="/register">CREATE NEW ACCOUNT</Transfer>
            </BottomWrapper>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Login;
