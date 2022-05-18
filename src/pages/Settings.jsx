import React, { useState } from "react";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = styled.div`
  width: auto;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://i.ibb.co/7t6Qbp9/pawel-czerwinski-oykb-Zuvaj-O0-unsplash.jpg")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 60%;
  padding: 60px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-left: 10px;
`;
const Title2 = styled.h1`
  font-size: 24px;
  margin: 20px 20px 20px 10px;
`;

const UnderTitle = styled.p`
  margin: 20px 20px 20px 10px;
  font-size: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 40%;
  padding: 5px;
  margin: 10px;
`;

const Button = styled.button`
  width: 20%;
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

const SuccessMsg = styled.p`
  background-color: #2c924ead;
  color: white;
  padding: 15px;
  margin: 25px 10px 10px 10px;
`;

const Settings = () => {
  const [successText, setSuccessText] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setSuccessText(false);
    }, 8000);
  }, [successText]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  let { authTokens, logoutUser } = useContext(AuthContext);
  let { user } = useContext(AuthContext);

  const [first_name, setFirstName] = useState("");

  //   const [old_password, setOldPassword] = useState("");
  //   const [new_password, setNewPassword] = useState("");

  let changePassword = async (e) => {
    e.preventDefault();
    let response = await fetch(
      "https://2599-92-118-76-252.ngrok.io/api/change-password/",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          old_password: e.target.old_password.value,
          new_password: e.target.new_password.value,
        }),
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      console.log(data);
      setSuccessText(true);
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <Container>
      <Wrapper>
        {successText && (
          <SuccessMsg>
            Your changes have been sumbitted successfully.
          </SuccessMsg>
        )}
        <Title>Basic info</Title>
        <UnderTitle>
          Some info may be visible to other people using ADDA
        </UnderTitle>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              First name
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user.first_name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form>
              <Input
                type="text"
                name="first_name"
                placeholder="Enter your new first name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Button>Change</Button>
            </Form>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Last name
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user.last_name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form>
              <Input
                type="text"
                name="last_name"
                placeholder="Enter your new last name"
                required
              />
              <Button>Change</Button>
            </Form>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Nickname
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user.username}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form>
              <Input
                type="text"
                name="username"
                placeholder="Enter your new nickname"
                required
              />
              <Button>Change</Button>
            </Form>
          </AccordionDetails>
        </Accordion>
        <Title2>Contact info</Title2>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>Email</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {user.email}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form>
              <Input
                type="text"
                name="email"
                placeholder="Enter your new email"
                required
              />
              <Button>Change</Button>
            </Form>
          </AccordionDetails>
        </Accordion>
        <Title2>Personal data</Title2>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Password
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Click here to change your password
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Form onSubmit={changePassword}>
              <Input
                type="password"
                name="old_password"
                placeholder="Old password"
                required
              />
              <Input
                type="password"
                name="new_password"
                placeholder="New password"
                required
              />
              <Button>Change</Button>
            </Form>
          </AccordionDetails>
        </Accordion>
      </Wrapper>
    </Container>
  );
};

export default Settings;
