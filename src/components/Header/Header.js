import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/logo-1.svg';
import navBG from '../../assets/nav-bg.png';
import navBG2 from '../../assets/nav-bg2.png';
const Header = () => {
    return (
        <div>
            <Navbar className="my-0 p-0 " style={{ background: `url(${navBG})` }} bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <Nav.Link href="#shipping">Shipping</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#track">Track Order</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar sticky='top' style={{ background: `url(${navBG2})` }} collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/home" className="custom-logo">
                            HOME
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/pages" className="custom-logo">
                            PAGES
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/blog" className="custom-logo">
                            BLOG
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery" className="custom-logo">
                            GALLERY
                        </Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-5 p-5 my-lg-0 justify-content-center align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Navbar.Brand className="justify-content-center align-items-center ms-auto" href="#home"><img src={logo} width='200px' height='70px' className='align-items-center justify-content-center' alt="Logo" /></Navbar.Brand>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;