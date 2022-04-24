import { Send } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;   
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: solid 1px lightgray;
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: 0.5px;
    cursor: pointer;
    background-color: black;
`
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get updates about daily deals and your favorite products</Desc>
        <InputContainer>
            <Input placeholder="Enter your email"/>
            <Button>
                <Send style={{color: "white"}}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter