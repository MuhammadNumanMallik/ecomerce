import React from 'react'
import {Container,Button }from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAdd,faUserTie,faPersonDress,faChildReaching } from '@fortawesome/free-solid-svg-icons';


function Navbers() {
  return (
    <Navbar fixed="top" expand="lg" className="backgrond ">
    <Container>
      <Navbar.Brand className='logo' href="#home">My Store</Navbar.Brand>
      <Navbar.Toggle className='togglebtn' aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav " >
        <Nav className="ms-auto">
          <Nav.Link className='liLinks' href="#home">
          <FontAwesomeIcon icon={faHome} /> Home 
           </Nav.Link>
          <Nav.Link className='liLinks' href="#link">
          <FontAwesomeIcon icon={faAdd} />
            Collection</Nav.Link>
          <Nav.Link className='liLinks' href="#link">
          <FontAwesomeIcon icon={faUserTie} />
            Man</Nav.Link>
          <Nav.Link className='liLinks' href="#link">
          <FontAwesomeIcon icon={faPersonDress} />
            Woman</Nav.Link>
          <Nav.Link className='liLinks' href="#link">
          <FontAwesomeIcon icon={faChildReaching} />
            Kids</Nav.Link>
        </Nav>
        <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbers