import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/logo.png";
import { Form, FormControl } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./Home.css";

function Home() {
  let navigate = useNavigate();

  function filterSearch(e) {
    if (e.target.value === "") return;

    e.preventDefault();
    navigate(`${e.target.value}/searchCom`);
  }

  return (
    <>
      <Navbar className="Navbar">
        <Navbar.Brand className="logo">
          <img
            alt=""
            src={logo}
            width="45"
            height="45"
            style={{ padding: "5px" }}
            // className="d-inline-block align-top"
          />{" "}
          Purple Mango
        </Navbar.Brand>
        <Container className="justify-content-end">
          <Nav>
            <Link to="/" className="nav-link c-white">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/products" className="nav-link">
              Products
            </Link>
            <Link to="/products/new" className="nav-link">
              New Product
            </Link>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="search"
                onChange={filterSearch}
              />
            </Form>
          </Nav>
        </Container>
      </Navbar>

      <Stack>
        <Outlet />
      </Stack>
      <footer
        style={{ backgroundColor: "#000807", color: "#A2A3BB" }}
        className="footer"
      >
        <div className="footer-copyright text-center py-3">
          © 2022 Purple Mango • Website Design by Stephanie Delgado
        </div>
      </footer>
    </>
  );
}

export default Home;
