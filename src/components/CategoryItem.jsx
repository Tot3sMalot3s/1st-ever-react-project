import React from "react";
import styled from "styled-components";
import { Router, Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    filter: brightness(50%);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Link to={item.link}>
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
