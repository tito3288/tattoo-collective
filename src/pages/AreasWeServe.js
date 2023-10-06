import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import "../OurRegions.css";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useInView } from "react-intersection-observer";

const AreasWeServe = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
  });

  return (
    <div
    // style={{
    //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(https://cdn5.vectorstock.com/i/1000x1000/08/79/abstract-city-map-in-black-and-white-vector-26010879.jpg)`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "100%", // Adjust as needed
    //   width: "100%",
    // }}
    >
      <ScrollToTop />
      <SmoothScroll />
      <NavbarComp />
      <div
        //COVERPHOTO CSS
        className="our-regions-coverphoto"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "900px", // Adjust as needed
          position: "relative",
          display: "flex", // Added
          justifyContent: "center", // Added
          alignItems: "center", // Added
        }}
      >
        <h1 style={{ color: "white" }}>Title Name</h1>

        <div className="our-regions">
          <Row lg={3} md={3} sm={1} xs={1} className="our-regions-content gx-0">
            <Col className="d-flex align-items-center justify-content-center my-2">
              <img
                src="https://wtcstorageprd.blob.core.windows.net/images/southbend-mishawaka-in/mishawaka-riverwalk11.jpg"
                alt="notre-dame-university"
                onClick={() => {
                  const yOffset = -180; // you can adjust the value as per your need
                  const element = document.getElementById("first-section");
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center my-2">
              <img
                src="https://wtcstorageprd.blob.core.windows.net/images/southbend-mishawaka-in/mishawaka-riverwalk11.jpg"
                alt="mishawaka river walk"
                onClick={() => {
                  const yOffset = -180; // you can adjust the value as per your need
                  const element = document.getElementById("second-section");
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              />
            </Col>
            <Col className="d-flex align-items-center justify-content-center my-2">
              <img
                src="https://wtcstorageprd.blob.core.windows.net/images/southbend-mishawaka-in/mishawaka-riverwalk11.jpg"
                alt="elkart coounty"
                onClick={() => {
                  const yOffset = -180; // you can adjust the value as per your need
                  const element = document.getElementById("third-section");
                  const y =
                    element.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }}
              />
            </Col>
          </Row>
        </div>
      </div>

      <div className="our-regions-sections">
        <h1
          className="things-to-do"
          // className={`our-regions-underline ${inView1 ? "line-animation" : ""}`}
          // style={{
          //   paddingTop: "5rem",
          //   paddingBottom: "1rem",
          //   paddingLeft: "15rem",
          // }}
        >
          Things To Do
        </h1>
        <section
          // style={{
          //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(https://st3.depositphotos.com/2048845/35858/i/1600/depositphotos_358589738-stock-photo-closeup-south-bend-indiana-map.jpg)`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   height: "100%", // Adjust as needed
          //   width: "100%",
          // }}
          id="first-section"
        >
          <div style={{ textAlign: "left" }}>
            <h1
              ref={ref2}
              className={`city-underline ${inView2 ? "line-animation" : ""}`}
            >
              South Bend
            </h1>
          </div>
          <KeyboardDoubleArrowUpIcon
            className="icon-right"
            style={{ fontSize: "45px" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <Row
            lg={2}
            md={1}
            sm={1}
            xm={1}
            style={{ width: "100%", marginTop: "10rem" }}
            className="gx-0"
          >
            <Col>
              <h1 className="my-3">Our Faves</h1>
              <Container>
                <p>
                  Lorem ipsum dolor sit amet. Ea veniam possimus eum nobis
                  incidunt et suscipit neque et dignissimos delectus eos rerum
                  quae quo deleniti dicta! Ut perspiciatis laboriosam aut autem
                  voluptatum id blanditiis omnis in commodi odio quo facilis
                  repellendus aut expedita nesciunt. Ex voluptas iusto eos minus
                  officia et doloribus dignissimos est internos consequatur est
                  dolores modi. Ea natus asperiores aut voluptatum perspiciatis
                  vel voluptas perferendis est saepe alias ex nisi corrupti sit
                  deleniti sint. Et quidem neque et accusantium quaerat aut modi
                  necessitatibus sit numquam libero ut adipisci enim? Ab
                  laboriosam sequi et incidunt recusandae est mollitia neque qui
                  fuga alias sit tempore eaque! Ut dolor quia qui quam corporis
                  aut aperiam autem non enim nihil aut provident dolorem sit
                  debitis aliquid. In magni voluptatibus qui Quis harum vel
                  inventore corrupti. Est quam magnam nam commodi eaque aut sint
                  quibusdam sit iusto reiciendis est incidunt ullam et explicabo
                  neque qui nostrum omnis. Ea eaque dignissimos aut autem
                  quisquam et quos provident ut quod consectetur. Est sunt
                  numquam et fugit fuga et soluta veniam quo quod consequatur ad
                  sint illum sed quia voluptas non odit esse.
                </p>
              </Container>
            </Col>
            <Col>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>
                {/* THIS WIDTH HAS TO BE DIFFERENT BECAUSE THERE IS ONLY ON COULMN IN THE ROW SO IT TAKE SMORE SPACE MEANING THE WITCH WILL BE LONGER */}
                <div className="content-section first-section-pic">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
          </Row>
          <Row
            lg={2}
            md={1}
            sm={1}
            xs={1}
            style={{ width: "100%" }}
            className="gx-0"
          >
            <Col lg={{ span: 4, offset: 1 }}>
              <div className="inner">
                <div>
                  <img
                    className="img-cont"
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                    alt="Potato Creek State Park"
                  />
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
            <Col lg={{ span: 3, offset: 2 }}>
              <div className="inner">
                <div>
                  <img
                    className="img-cont"
                    src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                    alt="Potato Creek State Park"
                  />
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section
          // style={{
          //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(https://c8.alamy.com/comp/2FKWC1R/mishawaka-indiana-usa-shown-on-a-geography-map-or-road-map-2FKWC1R.jpg)`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   height: "100%", // Adjust as needed
          //   width: "100%",
          // }}
          id="second-section"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          {/* Your content here */}
          <div style={{ textAlign: "right" }}>
            <h1
              ref={ref3}
              className={`our-regions-underline ${
                inView3 ? "line-animation" : ""
              }`}
            >
              Mishawaka
            </h1>
          </div>
          <KeyboardDoubleArrowUpIcon
            className="icon-left"
            style={{ fontSize: "45px" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <Row
            lg={2}
            md={2}
            sm={1}
            xs={1}
            style={{ width: "100%", paddingTop: "10rem" }}
            className="gx-0"
          >
            <Col>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>
                {/* THIS WIDTH HAS TO BE DIFFERENT BECAUSE THERE IS ONLY ON COULMN IN THE ROW SO IT TAKE SMORE SPACE MEANING THE WITCH WILL BE LONGER */}
                <div className="content-section second-section-pic">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
          </Row>
          <Row
            lg={2}
            md={2}
            sm={1}
            xs={1}
            style={{ width: "100%" }}
            className="gx-0"
          >
            <Col>
              <Container>
                <p>
                  Lorem ipsum dolor sit amet. Ea veniam possimus eum nobis
                  incidunt et suscipit neque et dignissimos delectus eos rerum
                  quae quo deleniti dicta! Ut perspiciatis laboriosam aut autem
                  voluptatum id blanditiis omnis in commodi odio quo facilis
                  repellendus aut expedita nesciunt. Ex voluptas iusto eos minus
                  officia et doloribus dignissimos est internos consequatur est
                  dolores modi. Ea natus asperiores aut voluptatum perspiciatis
                  vel voluptas perferendis est saepe alias ex nisi corrupti sit
                  deleniti sint. Et quidem neque et accusantium quaerat aut modi
                  necessitatibus sit numquam libero ut adipisci enim? Ab
                  laboriosam sequi et incidunt recusandae est mollitia neque qui
                  fuga alias sit tempore eaque! Ut dolor quia qui quam corporis
                  aut aperiam autem non enim nihil aut provident dolorem sit
                  debitis aliquid. In magni voluptatibus qui Quis harum vel
                  inventore corrupti. Est quam magnam nam commodi eaque aut sint
                  quibusdam sit iusto reiciendis est incidunt ullam et explicabo
                  neque qui nostrum omnis. Ea eaque dignissimos aut autem
                  quisquam et quos provident ut quod consectetur. Est sunt
                  numquam et fugit fuga et soluta veniam quo quod consequatur ad
                  sint illum sed quia voluptas non odit esse.
                </p>
              </Container>
            </Col>
            <Col>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section
          // style={{
          //   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(https://www.shutterstock.com/shutterstock/photos/1294238314/display_1500/stock-photo-elkhart-indiana-usa-on-a-map-1294238314.jpg)`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   height: "100%", // Adjust as needed
          //   width: "100%",
          // }}
          id="third-section"
        >
          {/* Your content here */}
          <div style={{ textAlign: "left" }}>
            <h1
              ref={ref4}
              className={`city-underline ${inView4 ? "line-animation" : ""}`}
            >
              Elkhart
            </h1>
          </div>
          <KeyboardDoubleArrowUpIcon
            className="icon-right"
            style={{ fontSize: "45px" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
          <Row
            lg={2}
            md={1}
            sm={1}
            xm={1}
            style={{ width: "100%", paddingTop: "10rem" }}
            className="gx-0"
          >
            <Col>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>
                {/* THIS WIDTH HAS TO BE DIFFERENT BECAUSE THERE IS ONLY ON COULMN IN THE ROW SO IT TAKE SMORE SPACE MEANING THE WITCH WILL BE LONGER */}
                <div className="content-section third-section-pic">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
            <Col>
              <h1 className="my-3">Our Faves</h1>
              <Container>
                <p>
                  Lorem ipsum dolor sit amet. Ea veniam possimus eum nobis
                  incidunt et suscipit neque et dignissimos delectus eos rerum
                  quae quo deleniti dicta! Ut perspiciatis laboriosam aut autem
                  voluptatum id blanditiis omnis in commodi odio quo facilis
                  repellendus aut expedita nesciunt. Ex voluptas iusto eos minus
                  officia et doloribus dignissimos est internos consequatur est
                  dolores modi. Ea natus asperiores aut voluptatum perspiciatis
                  vel voluptas perferendis est saepe alias ex nisi corrupti sit
                  deleniti sint. Et quidem neque et accusantium quaerat aut modi
                  necessitatibus sit numquam libero ut adipisci enim? Ab
                  laboriosam sequi et incidunt recusandae est mollitia neque qui
                  fuga alias sit tempore eaque! Ut dolor quia qui quam corporis
                  aut aperiam autem non enim nihil aut provident dolorem sit
                  debitis aliquid. In magni voluptatibus qui Quis harum vel
                  inventore corrupti. Est quam magnam nam commodi eaque aut sint
                  quibusdam sit iusto reiciendis est incidunt ullam et explicabo
                  neque qui nostrum omnis. Ea eaque dignissimos aut autem
                  quisquam et quos provident ut quod consectetur. Est sunt
                  numquam et fugit fuga et soluta veniam quo quod consequatur ad
                  sint illum sed quia voluptas non odit esse.
                </p>
              </Container>
            </Col>
          </Row>
          <Row
            lg={2}
            md={1}
            sm={1}
            xs={1}
            style={{ width: "100%" }}
            className="gx-0"
          >
            <Col lg={{ span: 3, offset: 2 }}>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
            <Col lg={{ span: 3, offset: 2 }}>
              <div className="inner">
                <div>
                  <picture>
                    <img
                      className="img-cont"
                      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_458,q_65,w_640,x_2529,y_1896/v1/clients/southbend/potato_creek_3_9362a856-1120-466d-999d-7de633f399c5.jpg"
                      alt="Potato Creek State Park"
                    />
                  </picture>
                </div>

                <div className="content-section">
                  <p className="slide-title">
                    <a style={{ textDecoration: "none" }}>
                      A title about the image or description
                    </a>
                  </p>
                  <footer className="slide-footer">
                    <a style={{ textDecoration: "none" }} className="read-more">
                      Learn More
                    </a>
                    {/* Replaced the img element with a div for the arrow icon.
                Consider using a background image or SVG inline for this. */}
                    <div className="arrow" />
                  </footer>
                  <ul className="details" />
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AreasWeServe;
