import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Offcanvas, OffcanvasTitle, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";

function BasicExample() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.scrollY < 50); // Modify the number here to adjust the scroll distance
    };

    window.addEventListener("scroll", scrollListener);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    <Container>
      <Navbar
        fixed="top"
        expand="lg"
        style={{
          backgroundColor: isTop ? "transparent" : "white",
          transition: "background-color 0.5s ease", // Here's the transition!
        }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src="1.png" alt="logo" className="logo" />
          </Navbar.Brand>
          <Button variant="link" onClick={handleShow} className="d-lg-none">
            <MenuIcon style={{ color: "#e4c988" }} fontSize="large" />
          </Button>
          {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="d-lg-none"
          /> */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
            style={{ width: "90%", backgroundColor: "#171717" }}
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header>
              <OffcanvasTitle
                style={{ color: "white" }}
                id={`offcanvasNavbar-expand-sm`}
              ></OffcanvasTitle>
              <Button
                variant="link"
                className="text-reset text-decoration-none"
                onClick={handleClose}
              >
                <CloseIcon style={{ color: "#e4c988" }} fontSize="large" />
              </Button>
            </Offcanvas.Header>
            <div>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link
                    className="nav-link"
                    style={{
                      textDecoration: "none",
                      color: isTop ? "black" : "#e4c988",
                      padding: "10px",
                      fontFamily: "'Saira Condensed', sans-serif",
                      fontSize: "30px",
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link"
                    style={{
                      textDecoration: "none",
                      color: isTop ? "black" : "#e4c988",
                      padding: "10px",
                      fontFamily: "'Saira Condensed', sans-serif",
                      fontSize: "30px",
                    }}
                    to="/AreasWeServe"
                  >
                    Our Regions
                  </Link>
                  <Link
                    className="nav-link"
                    style={{
                      textDecoration: "none",
                      color: isTop ? "black" : "#e4c988",
                      padding: "10px",
                      fontFamily: "'Saira Condensed', sans-serif",
                      fontSize: "30px",
                    }}
                    to="/About"
                  >
                    About
                  </Link>
                  <Link
                    className="nav-link"
                    style={{
                      textDecoration: "none",
                      color: isTop ? "black" : "#e4c988",
                      padding: "10px",
                      fontFamily: "'Saira Condensed', sans-serif",
                      fontSize: "30px",
                    }}
                    to="/MortgageCalculator"
                  >
                    Mortgage Calculator
                  </Link>
                  <Link
                    className="nav-link"
                    style={{
                      textDecoration: "none",
                      color: isTop ? "black" : "#e4c988",
                      padding: "10px",
                      borderRadius: "20px",
                      fontFamily: "'Saira Condensed', sans-serif",
                      fontSize: "30px",
                    }}
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </div>
          </Navbar.Offcanvas>
          {/* </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;
{
  /* <Navbar.Collapse id="basic-navbar-nav" style={{ marginTop: "20px" }}>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              style={{
                padding: "20px",
                fontSize: "20px",
                fontFamily: "Saira Condensed', sans-serif",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "#e4c988" : "black",
                  padding: "10px",
                  fontFamily: "'Saira Condensed', sans-serif",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "#e4c988" : "black",
                  padding: "10px",
                  fontFamily: "'Saira Condensed', sans-serif",
                }}
                to="/AreasWeServe"
              >
                Our Regions
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "#e4c988" : "black",
                  padding: "10px",
                  fontFamily: "'Saira Condensed', sans-serif",
                }}
                to="/About"
              >
                About
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: isTop ? "#e4c988" : "black",
                  padding: "10px",
                  fontFamily: "'Saira Condensed', sans-serif",
                }}
                to="/MortgageCalculator"
              >
                Mortgage Calculator
              </Link>
              <Link
                className="mx-3 contact-link"
                style={{
                  textDecoration: "none",
                  color: isTop ? "black" : "black",
                  padding: "10px",
                  borderRadius: "20px",
                  fontFamily: "'Saira Condensed', sans-serif",
                }}
                to="/Contact"
              >
                Contact Us
              </Link> */
}
