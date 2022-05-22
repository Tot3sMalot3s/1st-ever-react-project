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

const ProductsProfile = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  let [ads, setAds] = useState([]);

  useEffect(() => {
    displayHousingAds();
  }, []);

  let { user } = useContext(AuthContext);

  let displayHousingAds = async (e) => {
    try {
      let response = await fetch(
        `https://adda-advertisement.herokuapp.com/api/advert/user/${user.user_id}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
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

export default ProductsProfile;
