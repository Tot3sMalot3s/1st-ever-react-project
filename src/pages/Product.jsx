import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { PersonSharp, WorkspacePremiumOutlined } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: auto;
  height: 90vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  max-width: 40ch;
`;
const Desc = styled.p`
  margin-top: 30px;
  margin-bottom: 40px;
`;
const Price = styled.h2`
  font-weight: 500;
  font-size: 40px;
  margin: 30px 0px 10px 0px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 0.5;
  outline: 0.5;
  cursor: pointer;
`;

const SellerWrapper = styled.div`
  margin: 40px 0px;
  border: 0.5px solid #000000;
`;
const SellerWrapperTitle = styled.h2`
  margin: 20px;
`;

const SellerBasicInfo = styled.div`
  margin: 0px 0px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SellerAvatar = styled.img`
  vertical-align: middle;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;
const SellerData = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
`;
const SellerName = styled.h3``;

const SellerStatus = styled.p`
  color: gray;
`;

const ButtonBuy = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: black;
  color: white;
  border: 0.5;
  outline: 0.5;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const SellerAvatarAndData = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const SellerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px 20px;
`;
const Product = () => {
  let { advertId } = useParams();

  let [adInfo, setAdInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    displayAdInfo();
  }, []);

  let displayAdInfo = async (e) => {
    try {
      let response = await fetch(
        `https://adda-advertisement.herokuapp.com/api/advert/${advertId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await response.json();
      setAdInfo(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return !isLoading ? (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={adInfo.photos.photo1} />
        </ImgContainer>
        <InfoContainer>
          <Title>{adInfo.title}</Title>
          <Price>${adInfo.price}</Price>
          <Desc>{adInfo.description}</Desc>
          <ButtonWrapper>
            <ButtonBuy>BUY IT NOW</ButtonBuy>
            <Button>ADD TO WISHLIST</Button>
          </ButtonWrapper>
          <SellerWrapper>
            <SellerWrapperTitle>Seller info</SellerWrapperTitle>
            <SellerBasicInfo>
              <SellerAvatarAndData>
                <Avatar
                  sx={{ bgcolor: deepPurple[500], width: 72, height: 72 }}
                >
                  <PersonSharp sx={{ fontSize: 28 }} />
                </Avatar>
                <SellerData>
                  <SellerName>
                    {adInfo.user.firstName} {adInfo.user.lastName}
                  </SellerName>
                </SellerData>
              </SellerAvatarAndData>
              <SellerContact>
                <Button>CONTACT</Button>
              </SellerContact>
            </SellerBasicInfo>
          </SellerWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  ) : (
    <h1>Loading</h1>
  );
};

export default Product;
