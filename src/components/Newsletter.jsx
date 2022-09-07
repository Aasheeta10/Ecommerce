import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container= styled.div`
height:70vh;
background-color:#fcf5f5;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;`

const Title= styled.h1`

font-size:30;
margin-botton:20px;`

const Desc= styled.div`
font-size:24;
font-weight:300;
margin-bottom:20px;`

const Inputs= styled.div`
width:50%;
height:40px;
display:flex;
justify-content:center;
align-items:center;
border:1px solid lightgray;`

const Input= styled.input`
flex:8;
border:none;
padding-left:20px;
`

const Button= styled.button`
flex:1;
border:none;
background-color:teal;`



const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Desc>Get timely updates from your favourite product</Desc>
        <Inputs>
            <Input placeholder='Your Email '/>
            <Button>
                <SendIcon />
            </Button>
        </Inputs>
    </Container>
  )
}

export default Newsletter