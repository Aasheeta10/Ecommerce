import React from 'react'
import styled from 'styled-components'
import { sweatshirt } from './Data'
import Product from './Product'

const Container= styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:center;
`
const Products = () => {
  return (
    <Container>
        {sweatshirt.map(item=>(<Product item={item}/>))}
    </Container>
  )
}

export default Products