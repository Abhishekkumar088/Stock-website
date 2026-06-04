import React from "react";

function Notfound() {
  return (
    <div className="container">
      <div className="Accnt text-center">
        <h1 className="mb-3 mt-5 text-start">404 Not Found!</h1>
        <p className="mb-5 text-start fs-4" style={{color : "#424242"}}>
           Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

export default Notfound;
