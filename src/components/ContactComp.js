import React, { useState } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import "../App.css";

const ContactComp = () => {
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

  const { ref, inView } = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [invalidSubmit, setInvalidSubmit] = useState(false); // New state for invalid submission

  const handleButtonClick = (event) => {
    event.preventDefault(); // To prevent the form from refreshing the page
    if (message.trim() !== "") {
      setShowSuccess(true);
      setInvalidSubmit(false); // Reset invalid submission state
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    } else {
      setInvalidSubmit(true); // Set invalid submission state to true if message field is empty
      setTimeout(() => {
        setInvalidSubmit(false); // Reset invalid submission state after a short period of time
      }, 500); // Change this value to adjust the vibration duration
    }
  };

  return (
    <div
    // style={{
    //   position: "relative",
    //   backgroundAttachment: "fixed",
    //   backgroundImage:
    //     "url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   height: "100%",
    // }}
    >
      <div style={bgStyle}></div>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          height: "100%",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <form autoComplete="off" className="contact-form">
          <h1
            ref={ref}
            className={`contact-underline ${inView ? "line-animation" : ""}`}
          >
            Get In Touch
          </h1>
          <p style={{ color: "black" }}>
            TO INQUIRE ABOUT A PROPERTY OR PRESS EVENT, PLEASE FILL OUT THE FORM
            BELOW.
          </p>
          <input
            id="name"
            type="text"
            name="name"
            autoComplete="off"
            className="mb-1 contact-input"
            placeholder="Name"
          ></input>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="off"
            className="mb-1 contact-input"
            placeholder="E-mail*"
          ></input>
          <div className="contact-form__field contact-form__field--message">
            <input
              type="text"
              id="message"
              name="message"
              className="contact-form__field-input"
              placeholder="Your Message*"
              required
              autoComplete=""
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          <Button
            className={`contactus-submitbtn ${showSuccess ? "success" : ""} ${
              invalidSubmit ? "vibrate" : ""
            }`} // Apply "vibrate" class when invalid submission state is true
            type="submit"
            onClick={handleButtonClick}
          >
            {showSuccess ? "Success!" : "Submit"}
          </Button>
          <p className="contact-message">
            Email me for any questions <br /> or would like me to do a job for
            you! <br /> Se Habla Español.
          </p>
        </form>
      </Container>
    </div>
  );
};

export default ContactComp;
