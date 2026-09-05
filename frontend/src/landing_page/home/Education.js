import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row education">
        <div className="col-lg-6 col-sm-12">
          <img src="media/images/var.svg" className="EduImg" alt="image loading"></img>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h2
            className="mb-4 fw-normal"
            style={{
              color: "#424242",
              fontSize: "25px",
            }}
          >
            Free and open market education
          </h2>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="https://example.com" className="text-decoration-none">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <br></br>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="https://example.com" className="text-decoration-none mb-2">
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
