import React from 'react'
import styled from 'styled-components'
import {categories} from "../components/Data"
import CategoryItem from './CategoryItem'
import {Link} from 'react-router-dom'
const Container = styled.div`
display:flex;
padding:50px;
justify-content:space-between;
`


const Category = () => {
  return (
    <Link to={`ProductList`}>
    <Container>{categories.map(item=>(<CategoryItem item={item}/>))}</Container>
    </Link>
  )
}

export default Category