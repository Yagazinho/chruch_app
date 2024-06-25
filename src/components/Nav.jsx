import React, { useState } from 'react'
import WordLogo from '../assets/wordlogo.png'
import './Nav.css'
import { Container } from 'react-bootstrap'



const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(true)
  const collapseSetting = "navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around";

  return (
    <>
      <Container>

      <nav className='navbar navbar-expand-lg bg-dark navbar-dark px-5'>
        <div className="container-fluid">
          <a href="" className="navbar-brand"><img src={WordLogo} style={{width: '50px'}} /></a>
          <button 
          className={menuOpen ? `${collapseSetting}` : "navbar-toggler d-flex d-lg-none flex-column justify-content-around"} 
          type='button' 
          data-bs-target='#navbarNav' 
          aria-expanded='false' 
          aria-label='Toggle navigation' 
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}>
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className={menuOpen ? "collapse navbar-collapse" : "navbar-collapse"} id='navbarNav'>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current='page'>Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" aria-current='page'>Services</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" aria-current='page'>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
        
      </nav>

      </Container> 
    </>
  )
}

export default Nav