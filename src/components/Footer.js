import { Container } from "react-bootstrap";
import React from "react";
import "../App.css";

const currentYear = new Date().getFullYear();

const Footer = () => (
  //ALL OF THE STYLES NEED TO BE MOVED TO A CSS FILE

  <Container
    fluid
    style={{
      backgroundColor: "#F5F5F5",
      textAlign: "center",
      padding: "10px 20px",
      bottom: "0",
      width: "100%",
      color: "white",
      backgroundColor: "#F5F5F5",
      textAlign: "center",
      paddingBottom: "3rem",
      // backgroundImage: `url(black-granite.jpg)`,
      // backgroundPosition: "center",
      // backgroundSize: "cover",
      // backgroundRepeat: "no-repeat",
    }}
  >
    <img
      src="1.png"
      alt="footer-logo"
      className="footer-logo"
      // style={{ width: "200px", padding: "10px" }}
    />
    <p style={{ color: "black" }}>© {currentYear} - My Website</p>
    <p
      style={{ color: "black", textAlign: "left", margin: "0" }}
      className="my-2"
    >
      Terms of Service
    </p>
    <p style={{ color: "black", textAlign: "left" }}>Contact</p>
  </Container>
);

export default Footer;
