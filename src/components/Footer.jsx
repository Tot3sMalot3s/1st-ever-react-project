import { AlternateEmail, Facebook, Instagram, LocalPhone, LocationOn, Pinterest, Twitter } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
    max-width: 40ch;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`
const Payment = styled.img`
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ADDA</Logo>
            <Desc>
            We allow you to sell goods without setting up your own online store. 
            Selling through online marketplaces provides a flexible business opportunity with relatively low start-up costs.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Company Info</ListItem>
                <ListItem>Account</ListItem>
                <ListItem>Announcements</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Help</ListItem>
                <ListItem>News</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOn style={{marginRight:"10px"}}/>9679 Adams Street Brentwood, NY 11717
            </ContactItem>
            <ContactItem>
                <LocalPhone style={{marginRight:"10px"}}/>646-384-5719
            </ContactItem>
            <ContactItem>
                <AlternateEmail style={{marginRight:"10px"}}/>adda.business@gmail.com
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer