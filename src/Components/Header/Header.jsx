import React from "react";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import s from './Header.module.css'
import {LinkContainer} from 'react-router-bootstrap'
import '../../App.css'

let headerItems = ['My Profile','Users', 'Massages', 'Settings']
let mapHeaderItems = headerItems.map(el => (<LinkContainer to='/el'><Nav.Link >Profile</Nav.Link></LinkContainer>))

export const Header = () => {
    return <Navbar bg="dark" expand="md" variant={"dark"} className={s.container}>
        <Container >
            <Navbar.Brand className={s.brand} >Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 bg-dark"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    // variant={"tabs"}
                >
                    <LinkContainer to='/profile'><Nav.Link >Profile</Nav.Link></LinkContainer>
                    <LinkContainer to='/users'><Nav.Link >Users</Nav.Link></LinkContainer>
                    <LinkContainer to='/massages'><Nav.Link>Massages</Nav.Link></LinkContainer>
                    <LinkContainer to='/settings'><Nav.Link >Settings</Nav.Link></LinkContainer>

                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" className={'mx-4'}>Login</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}