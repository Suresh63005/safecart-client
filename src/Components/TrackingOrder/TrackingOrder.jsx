import React from "react";
import "./TrackingOrder.css";
import Header from "../Header";
import FooterBottom from "../../FooterBottom";

const TrackingOrder = () => {
  return (
    <div className="tracking-main-div">
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
              <div
                className="breadcrumb-contents"
                style={{ marginTop: "10px" }}
              >
                <h2 className="breadcrumb-title">Track Order</h2>
                <ul
                  className="breadcrumb-list"
                  style={{ marginTop: "10px", marginRight: "20px" }}
                >
                  <li
                    style={{ listStyle: "none", color: "black" }}
                    className="breadcrumb-list"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sign-in-area-wrapper padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="sign-in register">
                <h3 className="custom_form mt-4">Order Tracking</h3>
                <div className="form-wrapper custom_form mt-4">
                  <form
                    method="get"
                    action="https://safecart.bytesed.com/shop-page/track-order"
                  >
                    <div class="form-group mt-2">
                      <label for="order_id">Order ID</label>
                      <input
                        type="text"
                        name="order_id"
                        class="form-control"
                        id="order_id"
                        placeholder="Order Id"
                      />
                    </div>
                    <div class="form-group mt-2">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                        placeholder="Billing Email"
                      />
                    </div>
                    <div class="btn-wrapper mt-4">
                      <button type="submit" class="cmn_btn btn_bg_1 btn_small">
                        Track your order
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex align-items-center pt-5">
              <img
                src="https://safecart.bytesed.com/assets/img/tracking/treaking-image.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingOrder;
