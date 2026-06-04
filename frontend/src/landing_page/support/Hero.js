import react from "react";

function SupportHero() {
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-lg-8  col-sm-12  right">
          <div className="dropdown d-grid gap-2 supportInfo  border mb-3">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#openAccount"
            >
              <i className="fa-solid fa-circle-plus"></i> Account Opening
            </button>
            <ul id="openAccount" className="collapse text-primary">
              <li>
                <a className="dropdown-item" href="#">
                  Resident individual
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Minor
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Non Resident Indian(NRI)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Company, Partnership, HUF and LLP
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Glossary
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown  d-grid gap-2 supportInfo border mb-3">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#openAccoun"
            >
              <i className="fa-solid fa-circle-user"></i> Your Zerodha Account
            </button>
            <ul id="openAccoun" className="collapse text-primary">
              <li>
                <a className="dropdown-item" href="#">
                  Your Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Account Modification
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Client Master Report(CMR) and Depository Participant (DP)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Nomination
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Transfer and conversion of securities
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown d-grid gap-2 supportInfo border mb-3">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#OpenAccoun"
            >
              <i class="fa-brands fa-uikit"></i> Kite
            </button>
            <ul className="collapse text-primary" id="OpenAccoun">
              <li>
                <a className="dropdown-item" href="#">
                  IPO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Trading FAQs
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Margin Trading Facility (MTF) and Margins
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Charts and orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Alerts and Nudges
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  General
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown d-grid gap-2 supportInfo border mb-3">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#OpenAccount"
            >
              <i className="fa-solid fa-indian-rupee-sign"></i> Funds
            </button>
            <ul className="collapse text-primary" id="OpenAccount">
              <li>
                <a className="dropdown-item" href="#">
                  Add money
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Withdraw money
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Add bank accounts
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  eMandates
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown d-grid gap-2 supportInfo border mb-3">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#OpenAcco"
            >
              <i class="fa-brands fa-creative-commons-zero"></i> Console
            </button>
            <ul className="collapse text-primary" id="OpenAcco">
              <li>
                <a className="dropdown-item  text-primary" href="#">
                  Protfolio
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Corporate actions
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Funds statement
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Reports
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Segments
                </a>
              </li>
            </ul>
          </div>

          <div className="dropdown d-grid gap-2 mb-5 supportInfo border">
            <button
              className="btn btn-lg  dropdown-toggle text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#OpenAcc"
            >
              <i class="fa-regular fa-circle"></i> Coin
            </button>
            <ul className="collapse text-primary" id="OpenAcc">
              <li>
                <a className="dropdown-item" href="#">
                  Mutual funds
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  National Pension Scheme (NPS)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Feature on coin
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Payments and Orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  General
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-4  col-sm-12 left">
          <div className="offerSale">
            <ul
              className="bg-warning-subtle text-primary p-4 "
              style={{ borderLeft: "8px solid orange" }}
            >
              <li className="mb-3">
                <a href="#">Offer for sale (OFS) &ndash; January 2026</a>
              </li>
              <li>
                <a href="#">
                  Current Takeovers and Delisting &ndash; January 2026
                </a>
              </li>
            </ul>
          </div>

          <div className="quickLinks border ">
            
            <ol className="list-group list-group-numbered">
              <div className="bg-body-tertiary">
              <p className="m-3 fw-medium ">Quick links</p>
              </div>
              <li className="list-group-item text-primary  ">
                <a href="#" className="text-decoration-none"> Track account opening</a>
              </li>
              
              <li className="list-group-item text-primary">
                 <a href="#" className="text-decoration-none">Intraday margins</a>
              </li>
              <li className="list-group-item text-primary">
                 <a href="#" className="text-decoration-none">Kite user manual</a>
              </li>
              <li className="list-group-item text-primary">
                 <a href="#" className="text-decoration-none">Learn how to create a ticket</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportHero;
