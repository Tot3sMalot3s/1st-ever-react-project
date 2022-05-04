import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Border = styled.div`
  margin: 0px 100px 20px 100px;
  width: 100%;
  border: 0.5px solid #000000;
`;

const Title = styled.h2`
  margin: 30px 30px 20px 30px;
`;

const WrapperForSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;

const Select = styled.select`
  padding: 10px;
  margin: 0px 60px 30px 30px;
  font-size: 16px;
`;
const Option = styled.option``;

const Input = styled.input`
  min-width: 40%;
  margin: 0px 10px 20px 30px;
  padding: 10px;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: 18;
  margin: 0px 0px 20px 30px;
`;
const CreateAd1block = () => {
  return (
    <Container>
      <Border>
        <Title>Describe in detail</Title>
        <Text>Enter a name *</Text>
        <Input placeholder="For example, iPhone 8" />
        <WrapperForSelect>
          <Select>
            <Option disabled selected>
              category
            </Option>
            <Option>HOUSING</Option>
            <Option>BEAUTY PRODUCTS</Option>
            <Option>ELECTRONICS</Option>
            <Option>REAL ESTATE</Option>
            <Option>BUSINESS AND SERVICES</Option>
            <Option>AUTO</Option>
          </Select>
        </WrapperForSelect>
      </Border>
    </Container>
  );
};

export default CreateAd1block;
