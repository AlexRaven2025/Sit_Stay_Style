import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar}  from 'react-bootstrap';
import logo from './images/newLogo.png'
import './stylefiles/navbar.css'
/* eslint-disable */
export function NavbarMain() {
    const location = useLocation();
    const currentPath = location.pathname;
    const NavLink = ({ to, children }) => (
        <Nav.Link as={Link} to={to} className={currentPath === to ? 'active' : ''}>
            {children}
        </Nav.Link>
    );
        return (
            <div className='main-navbar'>
                <Navbar bg="dark" variant='dark'fixed='top'expand="lg" className="container-fluid ">
                    <Navbar.Brand as={Link} to="/" active className='ms-5' ><img src={logo} className='custom-logo-image'/></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                    <NavLink className="mr-3"as={Link} to="/" >Home</NavLink>
                    <NavLink className='mx-3'as={Link} to="/about">About</NavLink>
                    <NavLink className='mx-2'as={Link} to="/services">Services</NavLink>
                    <NavLink className='mx-2'as={Link} to="/booknow">Book Now</NavLink>
                </Nav>
            </Navbar.Collapse>
                </Navbar>
            </div>
                    
        );
}

export default NavbarMain;