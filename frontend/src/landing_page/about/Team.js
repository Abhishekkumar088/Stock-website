import React from "react";

function Team() {
  return (
    <div className="container">
      <h4 className="text-center fs-3" style={{color : "#424242"}}>People</h4>
      <div className="leaders mt-5">
        <div className="leaderImg">
          <img src="/media/images/nithinKamath.jpg" className="rounded-circle leaderImg" alt="leaderImage" />
          <p className="fs-5 text-center mt-4">Nithin Kamath</p>
          <p className="text-center fs-6 text-secondary">Founder, CEO</p>
        </div>
        <div className="leaderInfo lh-lg ">
          <p >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <a  href="#" className="text-decoration-none">Homepage</a> / <a href="#" className="text-decoration-none">TradingQnA</a> / <a href="#" className="text-decoration-none">Twitter</a></p>
        </div>
      </div>
      <div className="team"></div>
    </div>
  );
}

export default Team;
