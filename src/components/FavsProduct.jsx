import {
  ClearOutlined,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  border: 0.5px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
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
    transform: scale(1.1);
  }
`;
const ButtonTransferer = styled(Link)`
  color: black;
  &:hover {
    color: gray;
  }
`;

const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`


const FavsProduct = ({ item }) => {

  let { authTokens } = useContext(AuthContext);


  let removeFromFavorites = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `https://adda-advertisement.herokuapp.com/api/advert/wishlist/delete/${item.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + String(authTokens.access),
          },
        }
      );
      window.location.reload(false);
      console.log('Advertisement was deleted from your wishlist')
    } catch (err) {
      console.log(err);
    }
  };

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
          <Btn onClick={removeFromFavorites}>
            <ClearOutlined/>
          </Btn>
        </Icon>
      </Info>
    </Container>
  );
};

export default FavsProduct;
