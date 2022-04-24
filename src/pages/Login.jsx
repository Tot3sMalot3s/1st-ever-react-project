import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://i.ibb.co/4Zh6d1H/bia-andrade-PO8-Woh4-YBD8-unsplash.jpg")
    center;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`

const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 20px;
    padding: 10px;
`

const Button = styled.button`
    width: 90%;
    border: none;
    padding: 15px 20px;
    margin: 10px 80px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #b1b1b1;
        color: black;
    }
`

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: gray;
    }
`

const BottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
        </Form>
        <BottomWrapper>
                <Button>LOG IN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE NEW ACCOUNT</Link>
        </BottomWrapper>
    </Wrapper>
</Container>
  )
}

export default Login