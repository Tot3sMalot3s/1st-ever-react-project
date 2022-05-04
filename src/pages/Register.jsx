import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "../api/axios";

const Container = styled.div`
  width: auto;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://i.ibb.co/rFYSnwR/pawel-czerwinski-m-Tg-O05cb-Q8-Y-unsplash-1.jpg")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  margin-bottom: 10px;
  gap: 10px 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 47%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #b1b1b1;
    color: black;
  }
`;

const AltRegistration = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 15px;
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

const Transfer1 = styled(Link)`
  color: black;
  margin: 0px 10px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;

const WarnMsg = styled.p`
  background-color: #c94f4f83;
  color: white;
  padding: 15px;
  margin: 25px 10px 10px 10px;
`;

const SuccessRegTxt = styled.p`
  margin: 10px;
`;

const NAME_REGEX = /^[a-zA-AZ][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://1e80-92-118-76-204.ngrok.io/api/register/",
        JSON.stringify({
          username: user,
          password1: pwd,
          password2: matchPwd,
          email,
          first_name,
          last_name,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Container>
          <Wrapper>
            <Title>Congratulations!</Title>
            <SuccessRegTxt>
              Your account has been created successfully. Fow now, you can login
              via
              <Transfer1 to="/login">this link</Transfer1>
            </SuccessRegTxt>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            {errMsg && (
              <WarnMsg ref={errRef} aria-live="assertive">
                {errMsg}
              </WarnMsg>
            )}
            <Title>CREATE AN ACCOUNT</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                placeholder="Username*"
              />
              <Input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password*"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <Input
                type="password"
                placeholder="Confirm Password*"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <Agreement>
                By creating an account, I concent to the processing in my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                CREATE
              </Button>
              <Transfer to="/login">I ALREADY HAVE AN ACCOUNT</Transfer>
            </Form>
            {userFocus && !validName && (
              <WarnMsg>
                4 to 24 characters
                <br />
                Must begin with a letter
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </WarnMsg>
            )}
            {pwdFocus && !validPwd && (
              <WarnMsg>
                8 to 24 characters <br />
                Must include uppercase and lowercase letters, a number and a
                special character <br />
                Allowed special characters: !@#$%
              </WarnMsg>
            )}
            {matchFocus && !validMatch && (
              <WarnMsg>Passwords do not match</WarnMsg>
            )}
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Register;
