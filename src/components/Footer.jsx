import React from 'react'
import { Container } from 'react-bootstrap';

const Footer = () => {
    const currDate = new Date().getFullYear();
  return (
    <footer className='text-center py-3'>
       <Container>
        <span>&copy; {currDate} All Rights Reserved</span>
       </Container>
    </footer>
  )
}

export default Footer