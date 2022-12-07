import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import user from "./../../assets/user.svg";

const Navigation = () => {
  return (
    <>
      <div>
        <Navbar
          bg="light"
          variant="light"
          className="navbar navbar-expand-lg navbar-light bg-light navbar-store fixed-top navbar container-lg"
        >
          <img className="w-20" src={logo} alt="logo" />
          <Nav className="ms-auto font-[poppins]">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/payment">Payment</Nav.Link>
            <Nav.Link href="/promo">Promo</Nav.Link>
            <Nav.Link href="/history">History</Nav.Link>
            <Nav.Link href="#"></Nav.Link>
            <NavDropdown
              title="Hi Muhammad Farizqi Nurdin"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
              <NavDropdown.Item href="/home">Logout</NavDropdown.Item>
            </NavDropdown>

            <img className="w-8" src={user} alt="user" />
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default Navigation;
