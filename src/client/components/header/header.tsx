import React from "react";
import { useRouter } from "next/router";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
export default function Header() {
  const router = useRouter();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand >Welcome to NextJs</Navbar.Brand>
          <Nav className="me-auto">
            <span  className="text-light m-3"  data-testid="navbar-dashboard" onClick={() => {
          router.push("/dashboard");
        }}>Dashboard</span>
          <span className="text-light m-3"  data-testid="navbar-settings" onClick={() => {
          router.push("/settings");
        }}>Settings</span>
           
           

          </Nav>
        </Container>
        <Button
        className="btn-light btn-sm me-4"
        data-testid="navbar-logout"
        onClick={() => {
          router.push("/");
        }}
        >
              Logout
        </Button>
      </Navbar>
    </div>
  );
}
