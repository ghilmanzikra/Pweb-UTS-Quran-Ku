import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown, Form, InputGroup, Button } from 'react-bootstrap';

function NavigasiBar() {
    return (
        <Navbar expand="lg" className="navigasibar bg-body-tertiary bg-success fixed-top">
      <Container className='bg-success boder rounded-3'>
        <Navbar.Brand href="/" className='fw-bold pt-2 text-white'>Qur'an-Ku</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='pt-2 color-white' />
        <Navbar.Collapse id="basic-navbar-nav" className='color-white'>
          <Nav className="ms-auto ">
            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
            <Nav.Link href="/quran" className='text-white '>Baca Al-Qur'an</Nav.Link> 
            <Nav.Link href="/juzamma" className='text-white '>Juz Amma</Nav.Link>
            <Nav.Link href="/asmaulhusna" className='text-white '>Asmaul Husna</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    );
}

export default NavigasiBar;
