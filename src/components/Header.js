import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png'; // Ensure you have a logo image in the specified path
import { Navbar, Nav } from 'react-bootstrap';

const Logo = styled.img`
  width: 50px; // Adjust the size as needed
  height: 50px;
  margin-right: 10px;
`;

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    <Navbar.Brand href="#">
      <Logo src={logo} alt="App Logo" />
      Brilliant Interiors
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="home" smooth={true} duration={500}>Home</Nav.Link>
        <Nav.Link as={Link} to="products" smooth={true} duration={500}>Products</Nav.Link>
        <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
        <Nav.Link as={Link} to="services" smooth={true} duration={500}>Services</Nav.Link>
        <Nav.Link as={Link} to="contact" smooth={true} duration={500}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
