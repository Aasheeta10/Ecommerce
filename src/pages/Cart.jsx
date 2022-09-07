import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div``
const Title = styled.h1`
display:flex;
justify-content:center;
align-items:center;`

const Top = styled.p`
display:flex;
align-items:center;
justify-content:space-between;
`

const ButtonTop= styled.button`
padding:5px;
cursor:pointer;
`

const TopTexts = styled.div`
`

const TopText= styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0px 10px;
`

const Bottom = styled.h1``

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <ButtonTop>Continue shopping</ButtonTop>
                <TopTexts>
                    <TopText>Cart Item (2)</TopText>
                    <TopText>Wishlist(0)</TopText>
                </TopTexts>
                <ButtonTop>Checkout now</ButtonTop>
                
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart