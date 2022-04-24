import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined, AccountCircleOutlined, FavoriteBorderOutlined, ChatOutlined, AddCircleOutlineOutlined, FormatListBulleted} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  height: 60px;
  position: sticky;
	top: 0;
  background-color: white;
  z-index: 9999;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding-left: 10px;
`

const Center = styled.div`
  flex: 1;
  align-items: center;
`
const Logo = styled.h1`
  font-weight: bold;
  color: black;
  cursor: pointer;
  padding-left: 30px;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  margin-left: 25px;
`

const SearchButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
`
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
        <Logo>ADDA</Logo>
        </Left>
        <Center>
        <SearchContainer>
            <Input type = "search" placeholder='Search'/>
            <SearchButton>
            <Search style ={{color: 'gray', fontSize: 16}}/>
            </SearchButton>
          </SearchContainer>
        </Center>
        <Right>
        <MenuItem>
          <FormatListBulleted/>
        </MenuItem>
        <MenuItem>
          <AddCircleOutlineOutlined/>
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={0} color="primary">
            <ChatOutlined/>
          </Badge>
        </MenuItem>
        <MenuItem>
          <FavoriteBorderOutlined/>
        </MenuItem>
        <MenuItem>
          <AccountCircleOutlined/>
        </MenuItem>
        </Right>
      </Wrapper> 
    </Container>
  )
}

export default Navbar