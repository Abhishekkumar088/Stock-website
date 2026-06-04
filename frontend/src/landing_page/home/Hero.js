import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row">
        <img
          src="media/images/NewHomepagehero.svg"
          alt="Hero Image"
          style={{height : "350px"}}
          className="mb-2 p-5"
        />

        <div className="mt-2 text-center">
          <h3>Invest in everything</h3>
          <p className="fs-5">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button className="btn btn-primary mt-4 btn-lg button ">
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
