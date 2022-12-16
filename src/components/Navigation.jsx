import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';


const Navigation = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navTop'>
      <Container>
        <Link to="/">
          <img className='logo' width={50} src="/logoappletv.png" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            <Link to="/" className='nav-item'>HOME</Link>
            <Link to="/movies" className='nav-item'>MOVIES</Link>
            <Link to="#" className='nav-item'>NEW & POPULAR</Link>
            <Link to="#" className='nav-item'>MY LIST</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark" className='searchBtn'><BiSearch/></Button>
          </Form>
          <Nav>
            <Link to="#" className='nav-item'>KIDS</Link>
            <Link to="#" className='nav-item'>LOGIN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	);
};

export default Navigation;
