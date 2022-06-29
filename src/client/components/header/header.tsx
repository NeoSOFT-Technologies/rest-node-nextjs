import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Welcome to NextJs</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
           

          </Nav>
        </Container>
        <Button
        className="btn-light btn-sm me-4"
        >
              Logout
        </Button>
      </Navbar>
    </div>
  );
}
