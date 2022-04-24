import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://i.ibb.co/rFYSnwR/pawel-czerwinski-m-Tg-O05cb-Q8-Y-unsplash-1.jpg")
    center;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    margin-left: 10px;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-bottom: 10px;
    gap: 10px 20px;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 47%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #b1b1b1;
        color: black;
    }
`

const AltRegistration = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const MenuItem = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 15px;
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

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I concent to the processing in my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE</Button>
                <Link>I ALREADY HAVE AN ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register