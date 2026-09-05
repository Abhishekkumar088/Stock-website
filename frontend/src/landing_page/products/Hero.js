import React from "react";

function Hero() {
  return (
    <div className="container" style={{marginTop : "6rem"}}>
      <div className="text-center">
        <h3 style={{ color: "#424242" }}>Zerodha Products</h3>
        <p className="fs-5">Sleek, modern, and intuitive trading platforms</p>

        <p>
          Check out our &nbsp;
          <a href="https://example.com" className="text-decoration-none">
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
        
      </div>
      <hr style={{marginTop: "10%" , opacity: "0.1" , marginBottom: "5%"}}/>
    </div>
  );
}

export default Hero;
