import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-direction: column;


`

const Title = styled.h1`
    margin-bottom: 30px;
`
const Transfer = styled.p`
    margin: 10px 0px;
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: gray;
    }
`

const NotFound = () => {
  return (
    <Container>
        <Title>Oops...Page is not found</Title> 
        But we will change it soon!
        For now, you can go to <Transfer><Link to="/">home page</Link></Transfer>
    </Container>
  )
}

export default NotFound