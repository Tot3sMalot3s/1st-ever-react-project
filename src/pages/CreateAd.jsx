import styled from "styled-components";
import CreateAd1block from "../components/CreateAd1block";

const Title = styled.h1`
  margin: 40px 100px;
`;

const CreateAd = () => {
  return (
    <div>
      <Title>Create An Ad</Title>
      <CreateAd1block />
    </div>
  );
};

export default CreateAd;
