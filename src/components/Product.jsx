import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info= styled.div`
opacity:0;
width:100%;
height:100%;
top:0;
left:0;
position:absolute;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`

const Container = styled.div`
min-width:280px;
height:350px;
flex:1;
margin:3px;
display:flex;
justify-content:center;
align-items:center;
background-color:#F8F8FF;
position:relative;
transition:all 0.5s ease;


&:hover ${Info}{
  opacity:1;
}`


const Circle = styled.div`
`

const Image =styled.img`
height:75%;
z-index:2;
`



const Icon = styled.div`
 width:40px;
 height:40px;
 border-radius:50%;
 background-color:white;
 diplay:flex; 
 justify-content:center;
 align-items:center;
 margin:10px;
 
  &:hover{
  background-color: #e9f5f5;
  transform:scale(1.1);
 }`

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.image}/>
        <Info>
            <Icon>
             <ShoppingCartIcon/>
            </Icon>
            <Icon>
                <SearchIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product