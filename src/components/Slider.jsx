import React,{useState} from 'react'
import styled from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import {Data} from '../components/Data'


const Container = styled.div`
    widht:100%;
    height:100vh;
    display:flex;
    position:relative;
    overflow:hidden;
`
const Arrow = styled.div`
width:2px;
height:20vh;
border: 30px;
position: absolute;
display:flex;
align-item:center;justify-content:center;
left: ${props => props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
top: 0;
bottom: 0;
margin:auto;
cursor:pointer;
z-index:2;
`

const Wrapper= styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${(props)=>props.slide * -100}vw);
`

const Slide= styled.div`
width:100vw;
height:100%;
display:flex;
align-item:center;
background-color: #${props => props.bg}
`

const ImgContainer= styled.div`
color:blue;
height:100%;
flex:1;`

const Image=styled.img`
height:80%;
margin:25px 25px 20px;
`

const InfoContainer =styled.div`
flex:1;
padding:50px;
margin-top:20%;
`

const Title= styled.h1`
font:bold;
`
const Desc=styled.h3`
color:black;
margin:50px 0px;
font-size:8;
`
const Button=styled.button`
button:hover;
background-color:transparent;
cursor:pointer;`

const Slider = () => {
  
  
  const [slide,newSlide] = useState(0);
  const handleClick = (direction) => {
    if(direction === "left")
    {
      newSlide(slide>0 ? slide -1 : 2)
    }
    else
    {
      newSlide(slide<2 ? slide +1: 0)
    }
  }

    return(
  <>
    <Container>
        <Arrow direction = "right" onClick={()=> handleClick("right")}>
            <ArrowRightIcon/>
        </Arrow>
        <Wrapper slide={slide}>
          {Data.map((item)=>
          {
             return(
            <Slide bg ={item.Bg}>
          <ImgContainer>
            <Image  src={item.images}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>Bringing you the most amazing product</Desc>
            <Button>Shop now</Button>
          </InfoContainer>
          </Slide>
          )})}
        </Wrapper>
        <Arrow direction = "left" onClick={() => handleClick("left")}>
            <ArrowLeftIcon/>
        </Arrow>
    </Container>
  </>
  );
}

export default Slider