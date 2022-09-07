import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
 background-color:teal;
 color:white;
 height:30px;
 justify-content:center;
 text-align:center;
`


const Announcement= () => {
  return (
    <Container>
        Free shipping available on order of 3000/-
    </Container>
  )
};

export default Announcement;