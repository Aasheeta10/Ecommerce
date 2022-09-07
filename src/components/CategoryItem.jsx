import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
flex:1;
margin:3px;
height:100vh;
position:relative;`

const Image = styled.img`
height:100%;
width:100%;
object-fit:cover;
display:inline;`

const Info = styled.div`
position:Absolute;
top:0;
left:0;
width:100%;
height:100%;
flex-direction:column;
justify-content:center;
align-items:center;`

const Title = styled.h2`
font-size:2;
color:black;
font:bold;
align-items:center;`
const Button = styled.button`
cursor:pointer;
button:hover;
border:none;
background-color:white;
color:gray;
align-items:center;
justify-content:center;`


const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/ProductList`}>
     <Image src={item.image}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem