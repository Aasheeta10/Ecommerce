import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Container = styled.div`
`
const Wrapper =styled.div`
display:flex;
padding:20px;`

const ImageContainer = styled.div`
flex:1;
`

const Img = styled.img`
width:100%;
height:70vh;`

const ImgContainer = styled.div`
flex:1;
padding:0px 20px;
`

const Title=styled.h1`
font-size:100;`
const Desc=styled.p`
font-size:30px;
color:teal;`
const Price=styled.span`
font-size:30px;
color:brown;`

const AddContainer = styled.div`
width:50%
margin-top:50px;
`

const AmountContainer = styled.div`
display:flex;
`

const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display:flex;
justify-content:center;
align-items:center;
margin:0px 20px;`

const Button = styled.button`
padding:10px;
margin-top:20px;
border: 1px solid teal;
cursor: pointer;

&:hover{
    background-color:white;
}`


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Img src="https://i.pinimg.com/236x/93/16/d3/9316d386990c0361b2b2fac5092fcb27.jpg"></Img>
                
            </ImageContainer>
            <ImgContainer>
            <Title>BAG</Title>
                <Desc>Black leather bag</Desc>
                <Price>$20</Price>
            </ImgContainer>
            <AddContainer>
                <AmountContainer>
                    <RemoveIcon />
                    <Amount>1</Amount>
                    <AddIcon/>
                </AmountContainer>
                <Button>Add To Cart</Button>
            </AddContainer>
                
            
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product