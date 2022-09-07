import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
width:100vw;
height:100vh;
background-color:#E6E6FA;
display:flex;
align-items:center;
justify-content:center;`


const Wrapper = styled.div`
width:40%;
padding:20px;
background-color:white;
`



const Form = styled.form`
display:flex;
flex-wrap:wrap;
flex-direction:column;`

const Title = styled.h2``

const Inputs = styled.input`
flex:1;
min-width:100%;
margin: 20px 10px 0px 0px;
padding:10px;`

const Agreement = styled.span`
font-size:12px;
margin:20px 0px;`

const Button = styled.button`
width:40%;
padding:10px;
border: 1px solid gray;
cursor:pointer;
background-color:teal;
color:white;`

const Register = () => {
  return (
    <Container>
    
        <Wrapper>
            <Title>Create New Account</Title>
            <Form>
                <Inputs placeholder="Firstname"/>
                <Inputs placeholder="Lastname"/>
                <Inputs placeholder="username"/>
                <Inputs placeholder="Email"/>
                <Inputs placeholder="Password"/>
                <Inputs placeholder="Confirm Password"/>
                <Agreement>
                    I consent to processing of my personal data in 
                    accordance with <b>Privacy policy</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
        
    </Container>
  )
}

export default Register