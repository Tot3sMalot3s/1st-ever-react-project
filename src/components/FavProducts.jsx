import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";
import FavsProduct from "./FavsProduct";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FavProducts = () => {
  let { authTokens, logoutUser } = useContext(AuthContext);

  let [favs, setFavs] = useState([]);

  useEffect(() => {
    displayHousingAds();
  }, []);


  let displayHousingAds = async (e) => {
    try {
      let response = await fetch(
        `https://adda-advertisement.herokuapp.com/api/advert/wishlist/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + String(authTokens.access),
          },
        }
      );
      let data = await response.json();
      setFavs(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      {favs.map((item) => (
        <FavsProduct item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default FavProducts;
