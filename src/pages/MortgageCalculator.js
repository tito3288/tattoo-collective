import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Row, Col, Button } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import { useInView } from "react-intersection-observer";
import "../Mortgage.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const useCurrencyInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (e) => {
    let value = e.target.value;
    value = value.replace(/[^0-9]/g, "");
    const numericValue = Number(value);
    setValue(numericValue);
    value = numericValue.toLocaleString();
    setDisplayValue(value);
  };

  return [value, displayValue, handleInputChange];
};

function MortgageCalculator() {
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

  const [homePrice, displayHomePrice, handleHomePriceChange] =
    useCurrencyInput(0);
  const [downPayment, displayDownPayment, handleDownPaymentChange] =
    useCurrencyInput(0);
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [taxes, displayTaxes, handleTaxesChange] = useCurrencyInput(0); // New state for taxes
  const [insurance, displayInsurance, handleInsuranceChange] =
    useCurrencyInput(0); // New state for insurance
  const [totalPayment, setTotalPayment] = useState("");

  const [chartData, setChartData] = useState({
    labels: ["Principal & interest  ", "Taxes", "Insurance"],
    datasets: [
      {
        data: [1, 2, 3],
        backgroundColor: [
          "rgba(50, 50, 50, 1)",
          "rgba(228, 201, 136, 1)",
          "rgba(247, 230, 196, 1)",
        ],
        borderColor: [
          "rgba(228, 201, 136, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const calculatePayment = (e) => {
    e.preventDefault();
    const principal = homePrice - downPayment;
    const rate = interestRate / 100 / 12;
    const termInMonths = loanTerm * 12;

    const monthlyPayment =
      (principal * rate) / (1 - Math.pow(1 + rate, -termInMonths));
    setMonthlyPayment(monthlyPayment.toFixed(2));

    const totalPayment =
      Math.round(monthlyPayment) + parseInt(taxes) + parseInt(insurance); // Calculate total payment
    setTotalPayment(totalPayment); // Set total payment state

    // Update the data for the Doughnut chart
    setChartData((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: [Math.round(monthlyPayment), taxes, insurance], // Add taxes and insurance here
          label: "$",
        },
      ],
    }));
  };

  return (
    <div
    // style={{
    //   display: "flex",
    //   flexDirection: "column",
    //   height: "100%",
    //   backgroundColor: "white",
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

      <ScrollToTop />
      <SmoothScroll />
      <NavbarComp />
      <div>
        <div className="parallax3">
          {/* <div
            //THIS STYLE IS FOR THE TITLE (HELLO) TO BE CENTERED IN THE IMAGE
            style={{
              position: "absolute",
              top: "17%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <h1>Mortgage Calculator</h1>
          </div> */}
        </div>
        <div style={{ textAlign: "center" }}>
          <h1
            ref={ref}
            className={`mortgage-underline ${inView ? "line-animation" : ""}`}
            // style={{
            //   paddingTop: "5rem",
            //   paddingBottom: "1rem",
            //   paddingRight: "15rem",
            // }}
          >
            Mortgage Calculator
          </h1>
        </div>
        <Row
          lg={2}
          md={1}
          sm={1}
          style={{
            width: "100%",
            paddingTop: "5rem",
            height: "100%",
          }}
          className="gx-0"
        >
          <Col className="d-flex align-items-center justify-content-center">
            <div style={{ padding: "20px", paddingBottom: "5rem" }}>
              <form onSubmit={calculatePayment} className="form">
                <h6>Home Price</h6>
                <div className="inputWrapper">
                  <span className="dollarSign">$</span>
                  <input
                    type="text"
                    placeholder="0"
                    name="home-price"
                    value={displayHomePrice}
                    onChange={handleHomePriceChange}
                    className="my-4 mortgage-input"
                  />
                </div>
                <h6>Down Payment</h6>
                <div className="inputWrapper">
                  <span className="dollarSign">$</span>
                  <input
                    type="text"
                    placeholder="0"
                    name="downpayment"
                    value={displayDownPayment}
                    onChange={handleDownPaymentChange}
                    className="my-4 mortgage-input"
                  />
                </div>
                <h6>Loan Term (years)</h6>
                <select
                  type="number"
                  placeholder="Years"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="my-4 mortgage-input"
                >
                  <option value="0">Select</option>
                  <option value="10">10 years</option>
                  <option value="15">15 years</option>
                  <option value="20">20 years</option>
                  <option value="25">25 years</option>
                  <option value="30">30 years</option>
                </select>
                <h6>Interest rate</h6>
                <div className="inputWrapper">
                  <span className="dollarSign">%</span>
                  <input
                    type="number"
                    placeholder="0"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="my-4 mortgage-interest"
                  />
                </div>
                <h6>Homeowner Taxes</h6>
                <div className="inputWrapper">
                  <span className="dollarSign">$</span>
                  <input
                    type="text"
                    placeholder="0"
                    name="taxes"
                    value={displayTaxes}
                    onChange={handleTaxesChange}
                    className="my-4 mortgage-input"
                  />
                </div>
                <h6>Homeowner Insurance</h6>
                <div className="inputWrapper">
                  <span className="dollarSign">$</span>
                  <input
                    type="text"
                    placeholder="0"
                    name="insurance"
                    value={displayInsurance}
                    onChange={handleInsuranceChange}
                    className="my-4 mortgage-input"
                  />
                </div>
                <div style={{ padding: "30px" }}>
                  <Button
                    className="mortgage-button"
                    style={{
                      display: "block",
                      color: "black",
                      textDecoration: "none",
                    }}
                    type="submit"
                  >
                    Calculate
                  </Button>
                </div>
              </form>
            </div>
          </Col>
          <Col>
            <div
              className="mortgage-doughnut"
              style={{ backgroundColor: "transparent" }}
            >
              <h1>Monthly Payment Breakdown</h1>
              <Doughnut data={chartData} />
              <div style={{ padding: "20px" }}>
                <p>Principal & interest: ${Math.round(monthlyPayment)}</p>
                <p>Estimated monthly payment: ${Math.round(totalPayment)}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default MortgageCalculator;
