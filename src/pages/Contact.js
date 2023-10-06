import React from "react";
import JotformEmbed from "react-jotform-embed";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import "../Style.css";
import SmoothScroll from "../components/SmoothScroll";
import Footer from "../components/Footer";
import "../Contact.css";
import { Row, Col, Button, Container, Stack } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);

  const handleButtonClick = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    //IN ORDER TO MOVE THE IMAGE RIGHT UNDERNEATH THE IMAGE WE HAVE TO GIVE THE IMAGE SOME MARGIN SPECIFICALLY THE TOP IN ORDER TO MOVE IT DOWN FROM THE NAVBAR, IN ALL MEDIA QUERIES.
    <div style={{ height: "100%" }}>
      <SmoothScroll />
      <ScrollToTop />
      <NavbarComp />
      <div className="parallax">
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {/* <h1>Contact</h1> */}
          <h1>Let us hear from you</h1>
        </div>
      </div>
      <Row
        lg={2}
        md={2}
        sm={1}
        xs={1}
        style={{ position: "relative", width: "100%" }}
        className="align-items-center gx-0" // add this
      >
        <Col
          className="d-flex justify-content-center" // add this
        >
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{
              height: "100%",
              paddingTop: "3rem",
              paddingBottom: "5rem",
            }}
          >
            <form autoComplete="off" className="contact-form">
              <h1 className="contact-title">Get In Touch</h1>
              <input
                id="name"
                type="text"
                name="name"
                autoComplete="nope"
                className="mb-1 contact-page-input"
                placeholder="Name"
              ></input>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="nope"
                required
                className="mb-1 contact-page-input"
                placeholder="E-mail"
              ></input>
              <div className="contact-form__field contact-form__field--message">
                <input
                  type="text"
                  id="-message"
                  name="message"
                  className="contact-page-form__field-input"
                  placeholder="Your Message"
                  required
                  autoComplete=""
                />
              </div>
              <Button
                className={`contactus-submitbtn ${
                  showSuccess ? "success" : ""
                }`}
                type="submit"
                onClick={handleButtonClick}
              >
                {showSuccess ? "Success!" : "Submit"}
              </Button>
              <p className="contact-page-message">
                Email me for any questions <br /> or would like me to do a job
                for you! <br /> Se Habla Español.
              </p>
            </form>
          </Container>
        </Col>
        <Col
          // style={{
          //   position: "relative",
          //   overflow: "hidden",
          //   height: "100%",
          //   display: "flex",
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   backgroundColor: "#F5F5F5",
          // }}
          className="d-flex justify-content-center" // add this
        >
          <div className="detail-form">
            <h1 style={{ textAlign: "center", marginBottom: "5rem" }}>
              Contact Details
            </h1>
            <div className="my-5">
              <h1>The Ortiz Team Details</h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <h2>Ariz Ortiz</h2>
                <h5>Phone</h5>
                <p>(574)-300-0000</p>
                <h5>Email</h5>
                <p>Ortiz@gmail.com</p>
                <FacebookIcon />
                <LinkedInIcon />
              </div>
              <div>
                <h2>Erika Ortiz</h2>
                <h5>Phone</h5>
                <p>(574)-300-0000</p>
                <h5>Email</h5>
                <p>Ortiz@gmail.com</p>
                <FacebookIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
};

// linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),

export default Contact;
