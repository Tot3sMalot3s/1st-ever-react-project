import React from 'react'
import styled from "styled-components";
import FavProducts from '../components/FavProducts';

const Container = styled.div`
  height: 100vh;
`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Favs = () => {
  return (
    <>
        <Container>
            <Title>Favorites List</Title>
            <FavProducts/>
        </Container>
    </>
  )
}

export default Favs