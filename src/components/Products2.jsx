import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products2 = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  let [ads, setAds] = useState([]);

  useEffect(() => {
    displayHousingAds();
  }, []);

  let displayHousingAds = async (e) => {
    try {
      let response = await fetch(
        "https://adda-advertisement.herokuapp.com/api/advert/category/2/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      setAds(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {ads.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products2;
