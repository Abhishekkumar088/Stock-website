import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQty, setStockQty] = useState(0);

  const { closeSellWindow } = useContext(GeneralContext); // ✅ use closeSellWindow

  const handleSellClick = async () => {
    await axios.post("http://localhost:3002/sellStocks", {
      name: uid,
      qty: stockQty,
      mode: "SELL",
    });
    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow(); // ✅ fixed: was GeneralContext.closeBuyWindow()
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQty(e.target.value)}
              value={stockQty}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Amount to be credited ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>Sell</Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;