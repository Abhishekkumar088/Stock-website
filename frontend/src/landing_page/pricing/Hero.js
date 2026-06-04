import react from "react";

function Hero() {
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <div className="charge text-center mb-5">
        <h3 className="fw-medium">Charges</h3>
        <p className="text-secondary fs-5">List of all charges and taxes</p>
      </div>
      <div className="price row text-center d-flex  flex-nowrap lh-lg gap-2 p-5">
        <div className="zero col-lg-4 col-sm-6">
          <img src="media/images/zeropricing.svg" alt="zeroImg" className="img-fluid w-75 mb-3" />
          <h2 className="mb-4 fs-3 " >Free equity delivery</h2>
          <p className="text-secondary">
            All equity delivery investments (NSE, BSE), are absolutely free —
            &#8377;0 brokerage.
          </p>
        </div>
        <div className="twenty col-lg-4 col-sm-6">
          <img src="media/images/twenty.svg" alt="twentyImg" className="img-fluid w-75 mb-3 " />
          <h2 className="mb-4 fs-3 " >Intraday and F&O trades</h2>
          <p className="text-secondary">
            Flat &#8377;20 or 0.03%; (whichever is lower) per executed
            order on intraday trades across equity, currency, and commodity
            trades. Flat &#8377;20 on all option trades.
          </p>
        </div>
        <div className="right-zero col-lg-4 col-sm-6 ">
          <img src="media/images/zeropricing.svg" alt="zeroImg" className="img-fluid w-75 mb-3 " />
          <h2 className="mb-4 fs-3 " >Free direct MF</h2>
          <p className="text-secondary">
            All direct mutual fund investments are absolutely free — &#8377;0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
