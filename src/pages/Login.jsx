import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width:100vw;
height:100vh;
background-color:#E6E6FA;
display:flex;
align-items:center;
justify-content:center;`


const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:white;
`



const Form = styled.form`
display:flex;
flex-direction:column;`

const Title = styled.h2``

const Inputs = styled.input`
flex:1;
min-width:100%;
margin: 20px 10px 0px 0px;
padding:10px;`

const Button = styled.button`
width:40%;
padding:10px;
border: 1px solid gray;
cursor:pointer;
background-color:teal;
color:white;
margin-top:10px;`

const Link = styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;`


const Login = () => {
  return (
    <Container>
    <Wrapper>
    <Title>Sign IN</Title>
    <Form>
        <Inputs placeholder="username"/>
        <Inputs placeholder="Password"/>
        
        <Button>Login</Button>
        <Link>Do not remember the password?</Link>
        <Link>create an new account</Link>
    </Form>
</Wrapper>
</Container>
  )
}

export default Login