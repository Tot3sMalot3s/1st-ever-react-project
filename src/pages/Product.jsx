import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: auto;
    height: 90vh;
    object-fit: contain;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    max-width: 40ch;
`
const Desc = styled.p`
    margin-top: 30px;
    margin-bottom: 40px;
`
const Price = styled.h2`
    font-weight: 500;
    font-size: 40px;
    margin: 30px 0px 10px 0px;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;

`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 0.5;
    outline: 0.5;
    cursor: pointer;
    
    
`


const SellerWrapper = styled.div`
    margin: 40px 0px;
    border: 0.5px solid #000000;

`
const SellerWrapperTitle = styled.h2`
    margin: 20px;
`

const SellerBasicInfo = styled.div`
    margin: 0px 0px 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const SellerAvatar = styled.img`
    vertical-align: middle;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
`
const SellerData = styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
`
const SellerName = styled.h3`
    
`

const SellerStatus = styled.p`
    color: gray;
`

const ButtonBuy = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: black;
    color: white;
    border: 0.5;
    outline: 0.5;
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: black;
        
    }
`
const SellerAvatarAndData = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const SellerContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 20px;
`
const Product = () => {
  return (
    <Container>
        <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ebayimg.com/images/g/Z2UAAOSwLYRgI5ws/s-l1600.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        mid-Century Modern Purple Velvet And Brass 
                        Italian Curved Sofa, 1960s
                    </Title>
                    <Price>$ 4,590</Price>
                    <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                    iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                    tristique tortor pretium ut. Curabitur elit justo, consequat id
                    condimentum ac, volutpat ornare.
                    </Desc>
                    <ButtonWrapper>
                        <ButtonBuy>BUY IT NOW</ButtonBuy>
                        <Button>
                            ADD TO WISHLIST
                        </Button>
                    </ButtonWrapper>
                    <SellerWrapper>
                        <SellerWrapperTitle>Seller info</SellerWrapperTitle>
                        <SellerBasicInfo>
                            <SellerAvatarAndData>
                                <SellerAvatar src="https://images.unsplash.com/photo-1612896488082-7271dc0ed30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                                <SellerData>
                                    <SellerName>Rose Alyson</SellerName>
                                    <SellerStatus>On ADDA from 04/12/22</SellerStatus>
                                </SellerData>
                            </SellerAvatarAndData>
                            <SellerContact>
                                <Button>CONTACT</Button>
                            </SellerContact>
                        </SellerBasicInfo>
                    </SellerWrapper>
                </InfoContainer>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product