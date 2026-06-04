import react from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="link-tags d-flex gap-5">
        <a href="#" className="text-decoration-none">
          <h3>Equity</h3>
        </a>
        <a href="#" className="text-decoration-none">
          <h3>Currency</h3>
        </a>
        <a href="#" className="text-decoration-none">
          <h3>Commodity</h3>
        </a>
      </div>
      <hr className="text-secondary"></hr>
      <div className="brokeTb">
        <table class="table border">
          <thead>
            <tr className="border">
              <th scope="col"></th>
              <th
                scope="col"
                className="fw-medium"
                style={{ color: "#2d2a2aff" }}
              >
                Equity delivery
              </th>
              <th scope="col">Equity intraday</th>
              <th scope="col">F&O - Futures</th>
              <th scope="col">F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-secondary">
                Brokerage
              </th>
              <td>Zero Brokerage</td>
              <td>
                <span>0.03&#37; or Rs. 20/executed</span>{" "}
                <p>order whichever is lower</p>
              </td>
              <td>
                <span>0.03&#37; or Rs. 20/executed</span>{" "}
                <p>order whichever is lower</p>
              </td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <th scope="row" className="text-secondary">
                STT/CTT
              </th>
              <td>0.1&#37; on buy & sell</td>
              <td>0.025&#37; on the sell side</td>
              <td>0.02&#37; on the sell side</td>
              <td>
                <li>
                  0.125&#37; of the intrinsic value on options that are bought
                  and exercised
                </li>
                <li>
                  0.1&#37; of the intrinsic value on options that are bought and
                  exercised
                </li>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-secondary">
                Transaction charges
              </th>
              <td>NSE: 0.00297&#37;</td>
              <td>NSE: 0.00297&#37;</td>
              <td>NSE: 0.00173&#37;</td>
              <td>NSE: 0.03503&#37; (on premium)</td>
            </tr>
            <tr>
              <th scope="row" className="text-secondary">
                GST
              </th>
              <td>0.1&#37; on sell side (on premium)</td>
              <td>
                18&#37; on (brokerage + SEBI charges + transaction charges)
              </td>
              <td>
                18&#37; on (brokerage + SEBI charges + transaction charges)
              </td>
              <td>
                18&#37; on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-secondary">
                SEBI charges
              </th>
              <td>&#8377;10 / crore</td>
              <td>&#8377;10 / crore</td>
              <td>&#8377;10 / crore</td>
              <td>&#8377;10 / crore</td>
            </tr>
            <tr>
              <th scope="row" className="text-secondary">
                Stamp charges
              </th>
              <td>0.015&#37; or &#8377;1500 / crore on buy side</td>
              <td>0.003&#37; or &#8377;300 / crore on buy side</td>
              <td>0.002&#37; or &#8377;200 / crore on buy side</td>
              <td>0.003&#37; or &#8377;300 / crore on buy side</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Brokerage;
