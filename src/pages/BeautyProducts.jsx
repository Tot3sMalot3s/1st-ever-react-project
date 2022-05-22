import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products1 from "../components/Products1";

const Container = styled.div`
  height: 100vh;
`;
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const BeautyProducts = () => {
  return (
    <Container>
      <Title>Beauty Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Option>Factory New</Option>
            <Option>Used</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Cheapest</Option>
            <Option>Most expensive</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products1/>
    </Container>
  );
};

export default BeautyProducts;
