import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 280px;
  height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5 ease;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  width: 280px;
  height: 350px;
  display: flex;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  margin: 10px 0px 0px 10px;
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #dddddd;
    transform: scale(1.1);
  }
`;

const ButtonTransferer = styled(Link)`
  color: black;
  &:hover {
    color: gray;
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.photos.photo1} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <ButtonTransferer to={`/advertisement/${item.id}`}>
          <Icon>
            <SearchOutlined />
          </Icon>
        </ButtonTransferer>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
