import React from "react";

function OpenAccount() {
  return (
    <div className="container">
      <div className="Accnt text-center">
        <h3 className="mb-4 fs-4" style={{color : "#424242"}}>Open a Zerodha account</h3>
        <p className="mb-3" style={{color : "#424242"}}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="btn fs-5 mb-5" style={{width:"200px" , backgroundColor : "#387ED1", color : "#fff"}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default OpenAccount;
