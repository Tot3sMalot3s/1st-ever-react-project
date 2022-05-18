import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { PersonSharp, WorkspacePremiumOutlined } from "@mui/icons-material";
import AuthContext from "../context/AuthContext";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin: 40px 100px 20px 100px;
  width: 100%;
  border: 0.5px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftPart = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightPart = styled.div`
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const WelcomeText = styled.h1`
  margin-left: 20px;
`;

const BuyPremium = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  color: white;
  border: 0.5;
  outline: 0.5;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Logout = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 0.5;
  outline: 0.5;
  cursor: pointer;
  &:hover {
    color: red;
    border-color: red;
  }
`;

const Settings = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  color: black;
  border: 0.5;
  outline: 0.5;
  margin-right: 20px;
  cursor: pointer;
`;

const ProfileHeader = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <Container>
      <Wrapper>
        <LeftPart>
          <Avatar sx={{ bgcolor: deepPurple[500], width: 128, height: 128 }}>
            <PersonSharp sx={{ fontSize: 72 }} />
          </Avatar>
          <WelcomeText>
            Welcome, {user.first_name} {user.last_name}
          </WelcomeText>
        </LeftPart>
        <RightPart>
          <BuyPremium>
            {" "}
            BUY PREMIUM <WorkspacePremiumOutlined />
          </BuyPremium>
          <Link to="/settings">
            <Settings>Settings</Settings>
          </Link>
          <Logout onClick={logoutUser}>LOG OUT</Logout>
        </RightPart>
      </Wrapper>
    </Container>
  );
};

export default ProfileHeader;
