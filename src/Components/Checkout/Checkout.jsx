import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { Button } from "@mui/material";
import { UserContext } from "../../Services/CreateContext";
import axios from "axios";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const user = useContext(UserContext);
  const [addtoCart, setAddtoCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function saveData(data) {
    if (user.length !== 0) {
      let formData = new FormData();

      formData.append("FullName", data.FullName);
      formData.append("Address", data.Address);
      formData.append("State", data.State);
      formData.append("Country", data.Country);
      formData.append("City", data.City);
      formData.append("Zipcode", data.Zipcode);
      formData.append("Mobile", data.Mobile);
      formData.append("Email", data.Email);
      formData.append("OrderNotes", data.OrderNotes);
      formData.append("UserId", user.UserId);
      setLoading(true);
      const options = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // alert("success");
      try {
        const res = await axios.post(
          `http://localhost:5000/postaddress`,
          formData,
          options
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }
    setTimeout(() => {
      navigate("/ordersuccessfull");
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    if (user.UserId) {
      fetchdata();
    }
  }, [user.UserId]);

  const totalPrice = addtoCart.reduce((sum, product) => sum + product.Price, 0);
  const totalpricetax = totalPrice + 54.4;

  async function fetchdata() {
    if (user.length !== 0) {
      try {
        const response = await axios.get(
          "http://localhost:5000/getaddtocartproducts/" + user.UserId
        );
        setAddtoCart(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      console.log("user doesnt exist");
    }
  }
  return (
    <div className="checkout-main-div">
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
                <h2 className="breadcrumb-title">Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutpage container" style={{ width: "1320px" }}>
        <div className="clickheretologin">
          ! Returning customer? Click here to login{" "}
          <Link to="/login">Click here to login</Link>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            saveData(data);
          })}
        >
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="billingdetailsform">
                <h3>Billing Details</h3>

                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    {...register("FullName", { required: true, minLength: 3 })}
                    placeholder="Type First Name"
                    className="form-control"
                  />

                  {errors.FullName && errors.FullName?.type === "required" && (
                    <div className="text-danger required">
                      FullName is required
                    </div>
                  )}
                  {errors.FullName && errors.FullName?.type === "minLength" && (
                    <div className="text-danger required">
                      FullName must be 3 characters
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    {...register("Address", {
                      required: true,
                    })}
                    placeholder="Type Address"
                    className="form-control"
                  />

                  {errors.Address && errors.Address?.type === "required" && (
                    <div className="text-danger required">
                      Address is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>Country</label>
                      <input
                        type="text"
                        {...register("Country", {
                          required: true,
                        })}
                        placeholder="Select an Country"
                        className="form-control"
                      />
                      {errors.Country &&
                        errors.Country?.type === "required" && (
                          <div className="text-danger required">
                            Country is required
                          </div>
                        )}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>State</label>
                      <input
                        type="text"
                        {...register("State", {
                          required: true,
                        })}
                        placeholder="Select State"
                        className="form-control"
                      />
                      {errors.State && errors.State?.type === "required" && (
                        <div className="text-danger required">
                          State is required
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>City/Town</label>
                      <input
                        type="text"
                        {...register("City", {
                          required: true,
                        })}
                        placeholder="Select City/Town"
                        className="form-control"
                      />
                      {errors.City && errors.City?.type === "required" && (
                        <div className="text-danger required">
                          City is required
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>Zip Code</label>
                      <input
                        type="number"
                        {...register("Zipcode", {
                          required: true,
                        })}
                        placeholder="Enter Zipcode"
                        className="form-control"
                      />
                      {errors.Zipcode &&
                        errors.Zipcode?.type === "required" && (
                          <div className="text-danger required">
                            Zipcode is required
                          </div>
                        )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>MObile Number</label>
                      <input
                        type="number"
                        {...register("Mobile", {
                          required: true,
                        })}
                        placeholder="Enter your Mobile Number"
                        className="form-control"
                      />
                      {errors.Mobile && errors.Mobile?.type === "required" && (
                        <div className="text-danger required">
                          Mobile is required
                        </div>
                      )}
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <label>Email Address</label>
                      <input
                        type="text"
                        {...register("Email", {
                          required: true,
                        })}
                        placeholder="Type Email "
                        className="form-control"
                      />
                      {errors.Email && errors.Email?.type === "required" && (
                        <div className="text-danger required">
                          Email is required
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Order Notes</label>
                  <textarea
                    placeholder="Type Messages"
                    {...register("OrderNotes", {
                      required: true,
                    })}
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div
                className="form-group"
                style={{ display: "flex", gap: "10px", marginTop: "30px" }}
              >
                <input
                  style={{ width: "15px" }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <label style={{ fontWeight: "500" }}>Create An Accounts </label>
              </div>
              {addtoCart.map((item) => {
                const total = item.Price + 54.4;
                return (
                  <div className="checkoutproducts">
                    <div className="checkoutpro-header">Meredith Mooney</div>
                    <div className="checkoutpro-details">
                      <div className="row">
                        <div
                          className="col-lg-6 col-md-6 col-sm-12"
                          style={{
                            display: "flex",
                            gap: "20px",
                            padding: "10px",
                          }}
                        >
                          <div className="checkoutpro-img">
                            <img src={item.ProductImage} alt="" />
                          </div>
                          <div className="checkoutpro-title">
                            {item.ProductName}
                          </div>
                        </div>
                        <div
                          className="col-lg-6 col-md-6 col-sm-12"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <div className="checkoutpro-qnty">
                            {item.Quantity} QTY
                          </div>
                          <div className="checkoutpro-price">
                            <s>${item.OldPrice}</s> <b>${item.Price}</b>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="shippingcost">
                      <h4>shipping Cost</h4>
                      <div className="shippingcost-options">
                        <div className="row">
                          <div className="col-lg-5 col-md-5 col-sm-12">
                            <div
                              className="shippingcostption1"
                              style={{ background: "#198754", color: "white" }}
                            >
                              <div className="standard">
                                <div>Standard Shipping</div>
                                <div>Zone: Asia</div>
                              </div>
                              <div className="standardshippingprice">$54</div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="shippingcostption1">
                              <div className="standard">
                                <div>Standard Shipping</div>
                                <div>Zone: Asia</div>
                              </div>
                              <div className="standardshippingprice">$54</div>
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="shippingcostption1">
                              <div className="standard">
                                <div>Standard Shipping</div>
                                <div>Zone: Asia</div>
                              </div>
                              <div className="standardshippingprice">$54</div>
                            </div>
                          </div>

                          <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="shippingcostption1">
                              <div className="standard">
                                <div>Standard Shipping</div>
                                <div>Zone: Asia</div>
                              </div>
                              <div className="standardshippingprice">$54</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="checkproductsubtotal">
                      <div className="subtotal-heading">
                        <div className="subheadingoption">Sub Total</div>
                        <div className="subheadingoption">Tax Amount</div>
                        <div className="subheadingoption">Shipping Cost</div>
                        <div className="subheadingoption">Total</div>
                      </div>
                      <div className="subtotal-heading">
                        <div className="subheadingoption">${item.Price}</div>
                        <div className="subheadingoption">Inclusive Tax</div>
                        <div className="subheadingoption">$54.4</div>
                        <div className="subheadingoption">${total}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="ordersummary">
                <h2 className="text-center">Order Summery</h2>

                <div className="form-group" style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Enter Your coupon code"
                    className="form-control"
                    style={{ width: "70%" }}
                  />
                  <div
                    className="checkoutbtn"
                    style={{
                      width: "96px",
                      fontSize: "11px",
                      padding: "18px 5px",
                    }}
                  >
                    {" "}
                    Apply Coupon
                  </div>
                </div>

                <div className="totalprices">
                  <div className="itemstotal">
                    <div>Items Total</div> <div>${totalPrice.toFixed(2)}</div>
                  </div>
                  <hr />
                  <div className="itemstotal">
                    <div>Discount Amount</div> <div></div>
                  </div>
                  <hr />
                  <div className="itemstotal">
                    <div>Tax Amount</div> <div>Inclusive Tax</div>
                  </div>
                  <hr />
                  <div className="itemstotal">
                    <div>Total Delivery Cost</div> <div>$54.4</div>
                  </div>
                  <hr />
                  <div className="itemstotal">
                    <div>Payment Amount</div>{" "}
                    <div>$ {totalpricetax.toFixed(2)}</div>
                  </div>
                  <hr />
                  <div className="itemstotal">
                    <div>Total</div> <div>$ {totalpricetax.toFixed(2)}</div>
                  </div>
                </div>

                <div className="selectpaymentmethod">
                  <h3 className="text-center">Select Payment Method</h3>
                  <div className="paymentcards">
                    <ul className="row">
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="paypal"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-paypal16169347841650183083-6549e6c95fd0e1699342099.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="paytm"
                        style={{ border: "3px solid #198754" }}
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-paytm16169347841650183083-6549e6c9e82841699342100.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="stripe"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/large-stripe161693478516496679721650183254-6549e6cb2ed251699342101.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="razorpay"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/untitled-design-91658815956-6549e6cdb785f1699342105.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="paystack"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/untitled-design-91658815956-6549e6cdb785f1699342105.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="mollie"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-mollie16169347831650183083-6549e6c7e408d1699342097.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="midtrans"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-mid16398240121650183083-6549e6c726bd91699342096.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="cashfree"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/payment91699342388.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="instamojo"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/instamogo16398233571650183083-6549e6ce98e561699342101.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="marcadopago"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-mercadopago-logo16438963701650183083-6549e6ce8fbc21699342095.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="zitopay"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo1658814161-6549e6cba270b1699342102.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="squareup"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/square-logo1658814802-6549e6cd0d5ff1699342104.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="cinetpay"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/untitled-design-91658815956-6549e6cdb785f1699342105.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="paytabs"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/83-836574-paytabs-in-the-news-paytabs1658816083-6549e6d10ce861699342094.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="billplz"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-facebook-dimension-912ae2521fe6b786a8c78a5cd1a7dfb31434c628a7d03f4377cbeb4707d6e3051658816200-6549e6cc52c1b1699342102.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="toyyibpay"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/seotyp-20221670242046-6549e6cc5df741699342103.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="flutterwave"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/thumb-flutterwave161693478216496681131650183452-6549e6cd1cfbb1699342104.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="payfast"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-payfast-banner16398233581650183083-6549e6c7a77621699342098.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="manual_payment"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/101699342657.png"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="authorizenet"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-6549eaded2a021699343113.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="pagali"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-1-6549eadeacdca1699343113.webp"
                            alt=""
                          />
                        </div>
                      </li>
                      <li
                        className="col-lg-3 col-md-4 col-sm-6"
                        data-gateway="cash_on_delivery"
                        class="selected"
                      >
                        <div class="img-select">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-654a31d06d9cc1699361256.webp"
                            alt=""
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="form-group"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <input
                    style={{ width: "15px" }}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label>
                    I have read and agree to the terms & conditions{" "}
                  </label>
                </div>
                <button
                  type="submit"
                  className="checkoutbtn"
                  style={{ width: "400px", border: "none" }}
                >
                  {loading ? (
                    <div>
                      <div
                        class="spinner-border text-light spinner-border-sm"
                        role="status"
                      >
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <span style={{ marginLeft: "3px" }}>Processesing..</span>
                    </div>
                  ) : (
                    "Confirm Your Order"
                  )}
                </button>

                <div
                  className="checkoutbtn"
                  style={{
                    width: "400px",
                    background: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  {" "}
                  <Link style={{ color: "black" }} to="/addtocart">
                    Return to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
