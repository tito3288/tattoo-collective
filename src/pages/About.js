import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import ContactComp from "../components/ContactComp";
import SmoothScroll from "../components/SmoothScroll";
import ScrollToTop from "../components/ScrollToTop";
import { useInView } from "react-intersection-observer";
import "../About.css";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <div style={{ textAlign: "center" }}>
      <ScrollToTop />
      <SmoothScroll />
      <NavbarComp />
      <div className="parallax2">
        <div
          //THIS STYLE IS FOR THE TITLE (HELLO) TO BE CENTERED IN THE IMAGE
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h1>Hello! </h1>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <h1
          ref={ref}
          className={`about-underline ${inView ? "line-animation" : ""}`}
        >
          About Us
        </h1>
        <Row
          lg={2}
          md={2}
          sm={1}
          xs={1}
          className="align-items-center gx-0 about-row" // add this
          style={{ width: "100%" }}
        >
          <Col className="d-flex align-items-center justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ padding: "40px", paddingBottom: "7rem" }}
            >
              <img
                className="about-shadow"
                src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/357430332_10168181506530727_2031051424165158187_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=uKVM6_Ue5OIAX8wbvir&_nc_ht=scontent-ord5-1.xx&oh=00_AfAIWZdMjBal5TcB3Z1Wu_8G88bVQZdbp4CH5dhvj7xOdg&oe=64C5BE01"
                alt="about-pic"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Col>
          <Col>
            <h1 className="about-borders">
              <span className="about-span">
                Introducing Aris and Erika Ortiz:
              </span>
              <br /> Your Dynamic Duo of Real Estate Awesomeness!
            </h1>
            <Container>
              <p>
                We like to bring a modern approach, energy, and laid-back vibe
                throughout your real estate journey! As your trusted agents, we
                take pride in putting our clients best interests first, always.
                We are here to guide you through the entire process of buying or
                selling your home, ensuring there are no surprises along the
                way. From the initial client consultation to the triumphant
                moment of closing..and beyond, we are with you every step of the
                journey. As if that wasn't awesome enough, you'll get the
                benefit of not one, but two dedicated agents by your side. We
                work together seamlessly, leveraging our combined expertise to
                provide you with exceptional service and support. Now, let's get
                to know us personally because, let's face it, we’re pretty cool
                people too! When we’re not busy making real estate magic happen,
                you can find us embracing our inner dog parents. With three
                adorable bulldogs—a sophisticated English bulldog and two spunky
                Frenchies—we know a thing or two about love, loyalty, and
                wagging tails. But it's not all about work and pets for us! We
                believe in enjoying life to the fullest. Whether it's exploring
                the wonders of the water, embarking on exciting travel
                adventures, or busting our moves on the dance floor, we know how
                to have a good time. Plus, our love for music adds an extra beat
                of joy to our lives. We are beyond excited to help you to write
                your next chapter!
              </p>
            </Container>
          </Col>
        </Row>
      </div>
      <ContactComp />
      <Footer />
    </div>
  );
};

export default About;
