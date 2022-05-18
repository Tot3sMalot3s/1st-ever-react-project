import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  margin: 20px 100px;
  width: 100%;
  border: 0.5px solid #000000;
`;

const BodyTitle = styled.h2`
  margin: 20px;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const NoAdsText = styled.p`
  margin: 20px;
  font-size: 18px;
`;

const ProfileBody = () => {
  return <Container></Container>;
};

export default ProfileBody;
