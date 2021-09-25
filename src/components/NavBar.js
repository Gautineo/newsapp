import React, { Component } from "react";
import { Container, Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";
import News from "./News";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">News-Monkey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search News"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <News />
      </div>
    );
  }
}

export default NavBar;
