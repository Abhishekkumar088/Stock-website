import React from "react";

function Trust() {
  return (
    <div className="container m-0">
      <div className="trustSection mt-5 row">
        <div className=" trustlines col-lg-4 col-sm-12">
          <h2 className="mb-5 trustHeading">Trust with confidence</h2>

          <h3>Customer-first always</h3>
          <p className="opacity-75">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3>No spam or gimmicks</h3>
          <p className="opacity-75">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="#" className="text-decoration-none">
              Our philosophies
            </a>
            .
          </p>

          <h3>The Zerodha universe</h3>
          <p className="opacity-75">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3>Do better with money</h3>
          <p className="opacity-75">
            With initiatives like{" "}
            <a href="#" className="text-decoration-none">
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" className="text-decoration-none">
              Kill switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>

        <div className="col-lg-6 col-sm-12 m-4">
          <img
            src="media/images/heroCompanies.png"
            className="companyImage m-4"
          ></img>
          <p className="links">
            <a href="#" className="text-decoration-none">
              Explore our products<i className="fa-solid fa-arrow-right"></i>
            </a>
            &nbsp;
            <a href="#" className="text-decoration-none">
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="press">
        <a href="#">
          <img src="media/images/pressImage.png"></img>
        </a>
      </div>
    </div>
  );
}

export default Trust;
