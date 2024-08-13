import React, { useContext } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { cartStateContext, getBasketTotal } from "../../context";

const Subtotal = () => {
  const state = useContext(cartStateContext);
  const itemCount = state.cart.length;
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({itemCount} items) : <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
