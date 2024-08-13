import React from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import "./OrderSuccessfull.css";
import { Link } from "react-router-dom";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const OrderSuccessfull = () => {
  const { width, height } = useWindowSize();
  return (
    <div className="changepassword-main-div">
      a
      <div className="order-successful">
        <Confetti width={width} height={height} />
        <div className="order-svg">
          <CheckOutlinedIcon />
        </div>
        <div className="thankyou">Thank you</div>
        <div className="order-successfully-text">Ordered Successfully</div>
        <div className="transaction">Your Transaction ID : 665689745466</div>
        <div className="backtohome">
          <Link style={{ color: "black" }} to="/">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessfull;
