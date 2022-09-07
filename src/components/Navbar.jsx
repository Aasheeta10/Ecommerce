import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search'
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
const Container = styled.div`
      height: 60px; 
      padding: 50px, 20px`

const Wrapper = styled.div`
    padding: 30px, 20px;
    display: flex;
    align-item: center;
    justify-content: center;
`
const Left = styled.div`
flex:1;
display: flex;
margin-left: 25px;
margin-top:20px;`

const Language = styled.span`
font-size:14px;
cursor:pointer;
align-item:center;
justify-content:center;`

const SearchItem = styled.div`
border: 1px solid lightgray;
align-item: center;
height:4vh;
margin-left: 25px;
padding: 1px;`

const Input = styled.input`
border:none;
width:10%;`


const Center = styled.div`
flex:1;
align-item:center;
margin-top:15px;`

const Logo = styled.h1`
text-align:center;
font-weight:50%;
color: gray;`

const Right = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
margin-top:20px;
margin-right: 40px;
`

const Menu =styled.div`
font-size:14px;
cursor:pointer;
margin-left:15px;
margin-right:25px
`

const Navbar = () => {
  return (
    <>
   <Container>
    
    
    <Wrapper>
      <Left>
        <Language>IIII</Language>
          <SearchItem>
             <Input/> <Search style={{color:"gray", fontSize:20}}/>
          </SearchItem>
      </Left>
      <Center><Logo>EA.</Logo></Center>
      <Right>
      <Link to = {`/Register`}>
            <Menu>Register</Menu>
            </Link>
            <Link to = {`/Login`}>
            <Menu>Login</Menu>
            </Link>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon/>
            </Badge>
            
      </Right>
    </Wrapper>
   
   
   </Container>
    </>
  )
};

export default Navbar