import React from "react";
import Spline from "@splinetool/react-spline";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Listings from "../components/Listings";
import ContactComp from "../components/ContactComp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";
import WordCarousel from "../components/WordCarousel";

const AltPage = () => {
  const bgStyle = {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL}/white-granite.jpg)`,
    backgroundSize: "cover",
    zIndex: -1,
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <NavbarComp />
      <ScrollToTop />
      <div
        className="video-component"
        style={{
          position: "relative",
          height: "100vh", // This will fill the height of the viewport
          overflow: "hidden", // This will prevent the video from overflowing the div
          backgroundColor: "white",
        }}
      >
        <div className="video-wrapper">
          <video
            preload="auto"
            loop
            autoPlay
            muted
            playsInline
            className="video"
            style={{
              width: "100%", // This will make the video responsive
              objectFit: "cover", // This will handle the zoom effect
              objectPosition: "center", // This will center the zoom
            }}
          >
            <source src="real-estate-vid.mp4" type="video/mp4" />
          </video>
          <div className="overlay"></div>
        </div>

        <div className="video-content">
          <Container className="landing-container">
            <WordCarousel />
            <div className="landing-title-content">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="landing-title"
              >
                Ariz&nbsp;
              </motion.h1>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="landing-title"
              >
                &&nbsp;
              </motion.h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="landing-title"
              >
                Erika&nbsp;
              </motion.h1>
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="landing-title"
              >
                Ortiz
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              style={{ fontFamily: "'Saira Condensed', sans-serif" }}
              className="landing-paragraph"
            >
              Market Maker&nbsp;&nbsp; Finest Michiana
              Estates&nbsp;&nbsp;Exceptional Service
            </motion.p>
            <Link style={{ textDecoration: "none" }} to="/About">
              <motion.h3
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="landing-h3"
              >
                Learn More
              </motion.h3>
            </Link>
          </Container>
        </div>
      </div>
      <section id="next-section">
        <div
          className="white-granite"
          // style={{
          //   backgroundColor: "white",
          //   height: "100%",
          //   paddingBottom: "5rem",
          //   paddingTop: "5rem",
          //   position: "relative",
          //   backgroundAttachment: "fixed",
          //   backgroundImage:
          //     "url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
        >
          <div style={bgStyle}></div>

          <Row
            lg={2}
            md={2}
            sm={1}
            xs={1}
            style={{ width: "100%" }}
            className="gx-0"
          >
            <Col className="d-flex align-items-center justify-content-center">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ padding: "50px" }}
              >
                <img
                  className="area"
                  src="uriz.jpeg"
                  alt="realtors-pic"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center landing-quote">
              <Container style={{ paddingTop: "10%" }}>
                <div
                  className="f-agent__content"
                  style={{ textAlign: "center" }}
                >
                  <h5>BROKER ASSOCIATES</h5>
                  <h2>Meet Ariz & Erika Ortiz</h2>
                  <Container>
                    <p>
                      Looking to buy or sell a home hassle-free? Meet Aris and
                      Erika Ortiz, a dynamic husband and wife real estate team!
                      With their expert guidance and personal touch, your
                      property journey will be smooth and seamless. Their
                      unbeatable combination of market insights, negotiation
                      skills, and genuine care makes them the go-to duo for all
                      your real estate needs. Trust Aris and Erika to ensure
                      your experience is stress-free and enjoyable, from start
                      to finish. Let the power couple transform your transaction
                      with their top-notch expertise!
                    </p>
                  </Container>
                  <Button className="meet-us-button">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/About"
                    >
                      Learn More
                    </Link>
                  </Button>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
      </section>
      <Listings />
      <div className="page-container">
        <ContactComp />
        <Footer />
      </div>
    </div>
  );
};

export default AltPage;
