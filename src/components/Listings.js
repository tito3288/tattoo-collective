import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../App.css";

const Listings = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        textAlign: "center",
        // paddingBottom: "3rem",
        // backgroundImage: `url(2.png)`, // Add this line
        // backgroundPosition: "center", // center the image
        // backgroundSize: "cover", // cover the entire div
        // backgroundRepeat: "no-repeat", // prevent image tiling
      }}
      className="testimonial-cols"
    >
      <h1
        ref={ref}
        className={`animated-underline ${inView ? "line-animation" : ""}`}
      >
        Testimonials
      </h1>

      <Row
        lg={3}
        md={2}
        sm={1}
        xs={1}
        style={{ width: "100%", paddingTop: "5rem" }}
        className="gx-0"
      >
        <Col className="d-flex justify-content-center">
          <img style={{ width: "100%" }} src="testimonial.png" alt="review" />
        </Col>
        <Col className="d-flex justify-content-center">
          <img
            style={{ width: "100%", height: "100%" }}
            src="testimonial.png"
            alt="review"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <img
            style={{ width: "100%", height: "100%" }}
            src="testimonial.png"
            alt="review"
          />
        </Col>
      </Row>

      <a href="https://g.page/r/CZUQ0tauTrw3EBM/review">
        <Button className="my-5 review-link">Leave A Review</Button>
      </a>
      <a href="https://www.google.com/search?q=erika+ortiz+south+bend+indiana&sxsrf=AB5stBip69fsmoJH1mtsjAznC9U5Po2CHg%3A1688666768767&ei=kAKnZKSvLtGfptQPws2miAU&oq=erika+or&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgQIIxAnMgcIIxCKBRAnMgQIIxAnMgUIABCABDIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoNCC4QigUQxwEQ0QMQQzoTCC4QigUQsQMQgwEQxwEQ0QMQQzoHCAAQigUQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6DQgAEIoFELEDEIMBEEM6CwguEIAEEMcBEK8BOgsIABCABBCxAxCDAToICAAQgAQQsQM6DggAEIoFELEDEIMBEJECOgcIIxDqAhAnOhgILhCKBRDHARDRAxDIAxDqAhC0AhBDGAE6EgguEIoFEMgDEOoCELQCEEMYAToUCC4QigUQsQMQgwEQxwEQ0QMQkQI6CAguEIoFEJECOgsILhCvARDHARCABDoLCC4QigUQsQMQgwE6CAgAEIoFEJECOggILhCABBCxAzoLCC4QgAQQsQMQgwE6CwguEIMBELEDEIAEOggILhCxAxCABEoECEEYAFAAWKs6YMJEaApwAXgAgAFziAHdCZIBBDE3LjGYAQCgAQGwARHAAQHaAQYIARABGAg&sclient=gws-wiz-serp#lrd=0x8816cdb7ef22a8eb:0x37bc4eaed6d21095,1">
        <Button className="my-5 mx-4 review-link">View More</Button>
      </a>
    </div>
  );
};

export default Listings;
