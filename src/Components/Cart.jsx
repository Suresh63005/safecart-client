import React from "react";

import Header from "./Header";
import "./Cart.css";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Subtotal from "./Subtotal/Subtotal";
const Cart = () => {
  return (
    <div className="popularProducts_products">
      <Header />
      <div className="breadcrumb-area breadcrumb-padding bg-item-badge">
        <div className="breadcrumb-shapes">
          <img
            src="https://safecart.bytesed.com/assets/img/shop/badge-s1.png"
            alt=""
          />
          <img
            src="https://safecart.bytesed.com/assets/img/shop/badge-s2.png"
            alt=""
          />
          <img
            src="https://safecart.bytesed.com/assets/img/shop/badge-s3.png"
            alt=""
          />
        </div>
        <div className="container container-one">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-contents">
                <h2 className="breadcrumb-title">Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-subtotal">
        <div className="cart-products"></div>
        <div className="totalsub"></div>
      </div>
    </div>
  );
};

export default Cart;
