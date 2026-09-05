import React from "react";

function Footer() {
  return (
    <div className="border-top footertop mt-4">
    <div className="container mt-5">
      <div className="footerList row mb-5 ">
        <div className="zerodhalogo  col-lg-3 col-sm-12">
          <img
            src="/media/images/logo.svg"
            style={{ height: "1.2rem" }}
            alt="logo"
            className="mb-3"
          ></img>
          <p className="mb-1" style={{ color: "https://example.com666666", fontSize: "14px" }}>
            <i className="fa-regular fa-copyright"></i> 2010 - 2025, Zerodha
            Broking Ltd.
          </p>
          <p style={{ color: "https://example.com666666", fontSize: "14px" }}>
            All rights reserved.
          </p>
          <div className="socialmediaLogo fs-5 opacity-75">
            <i class="fa-brands fa-x-twitter"></i>
            &nbsp; &nbsp;
            <i class="fa-brands fa-square-facebook"></i>
            &nbsp; &nbsp;
            <i class="fa-brands fa-instagram"></i>
            &nbsp; &nbsp;
            <i class="fa-brands fa-linkedin-in"></i>
            <hr
              style={{ border: "1px solid https://example.com424242", height: "0px" }}
              className="w-100 mb-3"
            ></hr>
            &nbsp;
            <i class="fa-brands fa-youtube"></i>
            &nbsp; &nbsp;
            <i class="fa-brands fa-whatsapp"></i>
            &nbsp; &nbsp;
            <i class="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="list d-flex col-lg-9 col-sm-12">
          <div className="AccList">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3">
                <h5>Account</h5>
              </li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Open demat account</a></li>
              <li style={{ whiteSpace: "nowrap" }} className="mb-3">
               <a href="https://example.com" className="text-decoration-none">  Minor demat account</a> 
              </li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">NRI demat account</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Commodity</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Dematerialisation</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Fund transfer</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">MTF</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Referral program</a></li>
            </ul>
          </div>
          <div className="SupportList">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3">
                <h5>Support</h5>
              </li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Contact us</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Support portal</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">How to file a complaint?</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Status of your complaints</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Bulletin</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Circular</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Z-Connect blog</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Downloads</a></li>
            </ul>
          </div>
          <div className="CompanyList">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3">
                <h5>Company</h5>
              </li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">About</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Philosophy</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Press & media</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Careers</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Zerodha Cares (CSR)</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Zerodha.tech</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Open source</a></li>
            </ul>
          </div>
          <div className="QuickList">
            <ul style={{ listStyle: "none" }}>
              <li className="mb-3">
                <h5>Quick links</h5>
              </li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Upcoming IPOs</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Brokerage charges</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Market holidays</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Economic calendar</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Calculators</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Markets</a></li>
              <li className="mb-3"><a href="https://example.com" className="text-decoration-none">Sectors</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerInfo">
        <p className="footParas">
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
          Address: Zerodha Broking Ltd.,https://example.com153/154, 4th Cross, Dollars Colony,
          Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to <a href="https://example.com" className="text-decoration-none">complaints@zerodha.com</a>, for DP related to
          <a href="https://example.com" className="text-decoration-none"> dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure
          Document as prescribed by SEBI | ICF
        </p>

        <p className="footParas">
          Procedure to file a complaint on <a href="https://example.com" className="text-decoration-none">SEBI SCORES</a>: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p className="footParas" ><a href="https://example.com" className="text-decoration-none">Smart Online Dispute Resolution</a> | <a href="https://example.com" className="text-decoration-none">Grievances Redressal Mechanism</a></p>
        <p className="footParas" >
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p className="footParas" >
          Attention investors: 1 &#41; Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2 &#41; Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3 &#41;
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
        <p className="footParas">
          India's largest broker based on networth as per NSE. <a href="https://example.com" className="text-decoration-none">NSE broker
          factsheet</a>
        </p>
        <p className="footParas">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please <a href="https://example.com" className="text-decoration-none">
          create a ticket here.</a>
        </p>
        <p className="footParas" >
          *Customers availing insurance advisory services offered by Ditto
          (Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent (Composite) License No CA0738) will not have access to the
          exchange investor grievance redressal forum, SEBI SCORES/ODR, or
          arbitration mechanism for such products.
        </p>

        <ul className="list-unstyled footLastlist">
          <li>
            <a className="text-decoration-none" href="https://example.com">
           
              NSE
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              BSE{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              MCX{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              Terms & conditions{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              Policies & procedures{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              Privacy policy{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              Disclosure{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              For investor's attention{" "}
            </a>
          </li>
          <li>
            <a className="text-decoration-none" href="https://example.com">
              {" "}
              Investor charter{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Footer;
