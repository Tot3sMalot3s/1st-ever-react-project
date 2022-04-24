import React from 'react'
import styled from 'styled-components'
import { categories1 } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: center;
`

const Categories = () => {
  return (
    <Container>
        {categories1.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories