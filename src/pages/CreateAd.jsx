import styled from "styled-components";
import { useState } from "react";
import { useContext, useEffect, useRef } from "react";
import AuthContext from "../context/AuthContext";

const Container = styled.div`
  width: auto;
  height: 120vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://i.ibb.co/jbGtXvT/birmingham-museums-trust-BPWZ01-Fty-Sg-unsplash.jpg")
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  margin: 20px;
`;

const UnderTitle = styled.p`
  margin: 0px 0px 20px 20px;
  font-size: 16px;
`;

const Input = styled.input`
  width: 40%;
  padding: 10px;
  margin: 0px 0px 20px 20px;
`;
const InputFile = styled.input`
  width: 40%;
  padding: 10px;
  margin: 0px 0px 20px 10px;
`;

const Label = styled.label`
  border: 1px solid #000000;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
  margin-left: 20px;
  background-color: black;
  color: white;

  &:hover {
    background-color: transparent;
    color: black;
  }
`;
const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px;
  margin-left: 20px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #b1b1b1;
    color: black;
  }
`;

const Option = styled.option``;
const Select = styled.select`
  width: 30%;
  padding: 10px;
  margin: 0px 0px 20px 20px;
`;
const TextArea = styled.textarea`
  margin: 0px 0px 20px 20px;
`;

const SuccessRegTxt = styled.p`
  margin: 20px;
`;

const CreateAd = () => {
  let { authTokens } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [categoryId, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file1, setFile] = useState(null);

  const [success, setSuccess] = useState(false);

  const advertisement = {
    title: title,
    categoryId: categoryId,
    price: price,
    description: description,
  };

  let createAd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file1", file1);
    formData.append(
      "advertisement",
      new Blob([JSON.stringify(advertisement)], {
        type: "application/json",
      })
    );
    try {
      let response = await fetch(
        "https://adda-advertisement.herokuapp.com/api/advert/add/",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: formData,
        }
      );
      setSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {success ? (
        <Container>
          <Wrapper>
            <Title>Congratulations!</Title>
            <SuccessRegTxt>
              Your add has been created successfully. Now you can see it in a
              proper section on website.
            </SuccessRegTxt>
          </Wrapper>
        </Container>
      ) : (
        <Container>
          <Wrapper>
            <form encType="multipart/form-data" onSubmit={createAd}>
              <Title>Give it a name</Title>
              <Input
                type="text"
                id="title"
                placeholder="For example, iPhone 8"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Title>Choose a proper category</Title>
              <Select onChange={(e) => setCategory(e.target.value)}>
                <Option value="0">HOUSING</Option>
                <Option value="1">BEAUTY PRODUCTS</Option>
                <Option value="2">ELECTRONICS</Option>
                <Option value="3">REAL ESTATE</Option>
                <Option value="4">BUSINESS AND SERVICES</Option>
                <Option value="5">AUTO</Option>
              </Select>
              <Title>Set the price</Title>
              <Input
                type="number"
                placeholder="Integers only"
                onChange={(e) => setPrice(e.target.value)}
              />
              <Title>Pick a photo</Title>
              <InputFile
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Title>Provide a description</Title>
              <TextArea
                rows="5"
                cols="43"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Think about what you want to know from the ad. And add it to the description"
              />
              <UnderTitle>Almost done!</UnderTitle>
              <Button>Sumbit</Button>
            </form>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default CreateAd;
