import React from "react";

function Universe() {
  return (
    <div className="container mb-5">
      <div className="text-center">
        <p className="fs-4 mb-5 fw-normal ">
          Want to know more about our technology stack? Check out the{" "}
          <a href="https://example.com" className="text-decoration-none">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
        <h3 className="fw-medium fs-4 mb-4">The Zerodha Universe</h3>
        <p className="fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row d-flex justify-content-xxl-evenly align-items-baseline mx-5 p-5  universe">
        <div className="leftPartImg col-lg-4 col-sm-12 ">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="mb-3"
            style={{ width: "200px", height: "55px" }}
          />
          <p className="text-secondary mx-auto-5 mb-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
          <img
            src="media/images/streakLogo.png"
            className="mb-3"
            style={{ width: "170px", height: "55px" }}
          />
          <p className="text-secondary">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="middlePartImg col-lg-4 col-sm-12">
          <img
            src="media/images/sensibullLogo.svg"
            className="mb-3"
            style={{ width: "230px", height: "40px" }}
          />
          <p className="text-secondary mb-5">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
          <img
            src="media/images/smallcaseLogo.png"
            className="mb-3"
            style={{ width: "210px", height: "55px" }}
          />
          <p className="text-secondary">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="rightPartImg col-lg-4 col-sm-12">
          <img
            src="media/images/tijori.svg"
            className="mb-3"
            style={{ width: "150px", height: "55px" }}
          />
          <p className="text-secondary mb-5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
          <img
            src="media/images/dittoLogo.png"
            className="mb-3"
            style={{ width: "150px", height: "55px" }}
          />
          <p className="text-secondary">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free.
          </p>
        </div>
      </div>
      <div className="text-center mb-5">
        <button className="btn btn-primary text-center mt-4 btn-lg button ">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
