import React from "react";
import { Link } from "react-router-dom";

function SaleBanner() {
  return (
    <div className="sale-banner-main d-flex justify-content-center align-items-center">
      <h1 className="mr-3 font-weight-normal" style={{ fontSize: 46, letterSpacing: 3 }}>
        SALE
      </h1>
      <div className="d-flex flex-column align-items-center font-weight-light">
        <p>
          Up to <span style={{ fontSize: 20 }}>50%</span> OFF
        </p>
        <Link className="font-weight-light">SHOP NOW</Link>
      </div>
    </div>
  );
}

export default SaleBanner;
