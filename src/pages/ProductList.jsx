import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'


const Container = styled.div`
    
`
const Title = styled.h1`
  margin: 20px;
  text-align: center;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`

const Option = styled.option`
  
`

const ProductList = () => {
  return (
    <Container>
      <Announcement/>
      <Title>
        Furniture
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
              <Option disabled selected>Color</Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Gray</Option>
              <Option>Other</Option>
          </Select>
          <Select>
              <Option disabled selected>Type</Option>
              <Option>Seating</Option>
              <Option>Sleeping or lying</Option>
              <Option>Entertainment</Option>
              <Option>Tables</Option>
              <Option>Storage</Option>
          </Select>
          <Select>
              <Option disabled selected>
                Condition
              </Option>
              <Option>Factory New</Option>
              <Option>Used</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Cheapest</Option>
            <Option>Most expensive</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList