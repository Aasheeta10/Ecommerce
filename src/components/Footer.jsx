import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

const Container = styled.div`
display:flex;`

const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;`

const Logo = styled.h1`
`
const Desc = styled.p``
const SocialContainer= styled.h1`
display:flex;`
const SocialIcon= styled.h1`
width:40px;
height:40px;
color:white;
background-color: #${props=>props.color};
display:flex;
justify-content:center;
align-items:center;
margin-right:20px;`




const Center = styled.div`
flex:1;
padding:20px;
`

const Title= styled.h3`
margin-bottom:20px;`

const List= styled.ul`
list-style:none;
display:flex;
flex-wrap:wrap;`

const ListItem= styled.li`
width:50%;
margin-bottom:20px;`


const Right = styled.div`
flex:1;`

const Titles = styled.h3``
const ContactItem = styled.p`
margin-bottom:10px;`
const Payment = styled.div``

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>EA.</Logo>
            <Desc>There are varieties of collections available.You can choose
            and select of your choices.</Desc>
            <SocialContainer>
                <SocialIcon color = "3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color = "E4405F">
                    <InstagramIcon />
                </SocialIcon>
                <SocialIcon color = "55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color = "E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <Link to = {`/`}>
            <ListItem>Home</ListItem>
            <Link to = {`/Cart`}>
            <ListItem>Cart</ListItem>
            </Link>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms and return policy</ListItem>
            </Link>
            
            </List>
        </Center>
        <Right>
            <Titles>Contact</Titles>
            <ContactItem>
               <HomeIcon style={{marginRight:"10px"}}/> Subash Chown Sabji Mandi, 312601
            </ContactItem>
            <ContactItem>
               <PhoneAndroidIcon style={{marginRight:"10px"}}/> 9829075842
            </ContactItem>
            <ContactItem>
                <EmailIcon style={{marginRight:"10px"}}/>aashi10maheshwari@gmail.com 
            </ContactItem>
            <Payment ></Payment>
        </Right>

    </Container>
  )
}

export default Footer