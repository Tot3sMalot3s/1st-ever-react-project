import styled from "styled-components";
import ProductsProfile from "./ProductsProfile";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

// const Wrapper = styled.div`
//   margin: 20px 100px;
//   width: 100%;
//   border: 0.5px solid #000000;
// `;

// const BodyTitle = styled.h2`
//   margin: 20px;
// `;

// const Body = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   align-content: flex-start;
// `;

const NoAdsText = styled.p`
  margin: 20px;
  font-size: 18px;
`;

const NoAdsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AdsWrapper = styled.div`

`

const ProfileBody = () => {
  
  return(
    <Container>
      <ProductsProfile/>
    </Container>
  );
};

export default ProfileBody;
