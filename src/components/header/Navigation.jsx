import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import user from "./../../assets/user.svg";

const Navigation = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar fixed-top"
      >
        <Container>
          <img className="w-20" src={logo} alt="logo" />
          <Nav className="mr-5 font-[poppins]">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Payment</Nav.Link>
            <Nav.Link href="#">Promo</Nav.Link>
            <Nav.Link href="#">History</Nav.Link>
            <Nav.Link href="#">Hi Muhammad Farizqi Nurdin</Nav.Link>
            <img className="w-8" src={user} alt="user" />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
