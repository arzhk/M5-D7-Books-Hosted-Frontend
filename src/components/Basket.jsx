import React from "react";

function Basket(props) {
  return (
    <div id="basket-main-container" onMouseLeave={() => props.showBasketHandler(false)}>
      test
    </div>
  );
}

export default Basket;
