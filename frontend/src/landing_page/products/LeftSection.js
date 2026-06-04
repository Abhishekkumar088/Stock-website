import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDecription,
  tryDemo,
  googlePlay,
  appStore,
  learnMore,
  coin
}) {
  return (
    <div className="container mb-5">
      <div className="row leftSection">
        <div className="leftPart col-lg-4 col-sm-12">
          <img src={imageURL} />
        </div>

        <div className="rightPart  col-lg-6 col-sm-12">
          <h3 className="mb-4 fs-4" style={{ color: "#464646" }}>
            {productName}
          </h3>
          <p className="lh-lg">{productDecription}</p>

       {(tryDemo || googlePlay || appStore || coin) && ( 
          <div className="mb-4 d-flex gap-4 justify-content-start">
             { tryDemo && <a href={tryDemo} className="text-decoration-none">
              Try demo <i className="fa-solid fa-arrow-right"></i>
            </a>}
         
           {learnMore &&  
            <a href={learnMore} className="text-decoration-none">
              Learn more <i className="fa-solid fa-arrow-right"></i>
            </a>}
          {coin && <a href={coin} className="text-decoration-none " >Coin<i className="fa-solid fa-arrow-right"></i>
            </a>}

          </div>  
           )}

          <div>
            <a href={googlePlay} className="text-decoration-none">
              <img src="/media/images/googlePlayBadge.svg" />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a href={appStore} className="text-decoration-none">
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
