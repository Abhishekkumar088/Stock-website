import React from "react";

function RightSection({
  productName,
  productDescription,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container">
      <div className="rightSection d-flex align-items-center">
        <div className="leftParts" style={{paddingRight: "10rem"}}>
          <h3 className="mb-4 fs-4">{productName}</h3>
          <p className="lh-base">{productDescription}</p>
          <a href={learnMore} className="text-decoration-none">
            Learn more <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="rightParts">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
