import Badge from "@mui/material/Badge";
import {
  Search,
  ShoppingCartOutlined,
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  ChatOutlined,
  AddCircleOutlineOutlined,
  FormatListBulleted,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 9999;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-left: 10px;
`;

const Center = styled.div`
  flex: 1;
  align-items: center;
`;
const Logo = styled(Link)`
  font-weight: bold;
  color: black;
  cursor: pointer;
  padding-left: 30px;
  font-size: 32px;
  text-decoration: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 25px;
`;

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
`;

const ButtonTransferer = styled(Link)`
  color: black;
  &:hover {
    color: gray;
  }
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo to="/">ADDA</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <Input type="search" placeholder="Search" />
            <SearchButton>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchButton>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <ButtonTransferer to="create-ad">
              <AddCircleOutlineOutlined />
            </ButtonTransferer>
          </MenuItem>
          <MenuItem>
            <ButtonTransferer to="/inbox">
              <Badge badgeContent={0} color="primary">
                <ChatOutlined />
              </Badge>
            </ButtonTransferer>
          </MenuItem>
          <MenuItem>
            <ButtonTransferer to="/favs">
              <FavoriteBorderOutlined />
            </ButtonTransferer>
          </MenuItem>
          <MenuItem>
            <ButtonTransferer to="/profile">
              <AccountCircleOutlined />
            </ButtonTransferer>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
