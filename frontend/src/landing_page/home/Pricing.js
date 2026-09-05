import React from "react";

function Pricing() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="pricingLines col-5">
          <h3 style={{ color: "#424242", fontSize: "25vpx" }} className="mb-4">
            Unbeatable pricing
          </h3>
          <p style={{ color: "#424242" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="https://example.com" className="text-decoration-none">
            See pricing <i className="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
        <div className="pricingImage  d-flex flex-row  justify-content-evenly align-items-center col-7">
          <div className="zero1 ">
            <img
              src="media/images/zeropricing.svg"
              alt="imgpricing"
              style={{ height: "6rem" }}
            ></img>
            <p>Free account opening</p>
          </div>
          <div className="zero1 ">
            <img
              src="media/images/zeropricing.svg"
              style={{ height: "6rem" }}
              alt="imgpricing"
            ></img>
            <p>Free equity delivery and direct mutual funds</p>
          </div>

          <div className="zero1">
            <img
              src="media/images/twenty.svg"
              style={{ height: "6rem" }}
              alt="imgpricing"
            ></img>
            <p>Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
