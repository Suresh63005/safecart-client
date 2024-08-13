import React, { useContext, useEffect, useRef, useState } from "react";
import "./Shoppage.css";
import { getData } from "../../Services/Context.service";
import { useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";

import { UserContext } from "../../Services/CreateContext";
import axios from "axios";
import {
  EmailIcon,
  EmailShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
   TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const Shoppage = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { ProductId } = useParams();
  const user = useContext(UserContext);

  const quantityRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchdata();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
  };

  async function addDataToCart(ProductId) {
    if (user.length == 0) {
      navigate("/login");
    } else {
      let userid = user.UserId;
      let productid = ProductId;

      let formData = new FormData();

      formData.append("UserId", userid);
      formData.append("ProductID", productid);
      formData.append("Quantity", quantityRef.current.value);

      let options = {
        headers: {
          "content-type": "multi-part/form-data",
        },
      };

      let res = await axios.post(
        "http://localhost:5000/postaddtocart",
        formData,
        options
      );
      window.location.reload();
    }
  }

  async function wishlistproduct(ProductId) {
    if (user.length == 0) {
      navigate("/login");
    } else {
      let userid = user.UserId;
      let productid = ProductId;

      let formData = new FormData();

      formData.append("ProductID", productid);
      formData.append("UserId", userid);

      let options = {
        headers: {
          "content-type": "multi-part/form-data",
        },
      };

      let res = await axios.post(
        "http://localhost:5000/postwishlist",
        formData,
        options
      );
    }
  }

  function incdecQuantity(type) {
    switch (type) {
      case "inc":
        if (quantityRef.current.value == 0) {
          quantityRef.current.value = 1;
        } else {
          setQuantity(parseInt(quantityRef.current.value) + 1);
        }
        break;
      case "dec":
        if (quantityRef.current.value == 0) {
          quantityRef.current.value = 0;
        } else {
          setQuantity(parseInt(quantityRef.current.value) - 1);
        }
        break;
    }
  }

  async function fetchdata() {
    const url = "http://localhost:5000/getshoppageproducts/" + ProductId;
    const response = await getData(url);
    setProducts(response.data);
  }
  return (
    <div>
      <div className="container">
        {products.map((item) => {
          return (
            <div className="shoppage">
              <div className="row">
                <div className="col-lg-9 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                      <div className="shoppageimg">
                        <img src={item.ProductImage} alt="" />
                      </div>
                      <center>
                        <div className="row">
                          <div className="shoppageduplicateimg">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="shoppageimg">
                                <img src={item.ProductImage} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <div className="shoppageimg">
                                <img src={item.ProductImage} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </center>
                    </div>
                    <div
                      className="col-lg-5 col-md-12 col-sm-12"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <div className="shoppagetitle">{item.ProductName}</div>
                      <p style={{ color: "green" }}>In Stock (164)</p>
                      <div className="shoppage-price">
                        ${item.Price}{" "}
                        <span>
                          {" "}
                          <s>${item.OldPrice}</s>{" "}
                        </span>
                      </div>

                      <div className="shoppage-shippingpage">
                        No Import Fees Deposit and $25.56 Shipping to Bangladesh
                      </div>

                      <div className="shoppagequantity">
                        <div>Quantity</div>:
                        <div
                          className="incdec"
                          style={{ width: "30%", borderRadius: "0px" }}
                        >
                          <input
                            type="button"
                            className="btn"
                            value="-"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              fontSize: "30px",
                            }}
                            onClick={() => {
                              incdecQuantity("dec");
                            }}
                          />
                          <input
                            className="productincdeccount"
                            type="text"
                            value={quantity}
                            style={{
                              width: "15%",
                              border: "none",
                              fontSize: "15px",
                              fontWeight: "600",
                            }}
                            ref={quantityRef}
                          />
                          <input
                            type="button"
                            className="btn"
                            style={{
                              padding: "0px",
                              margin: "0px",
                              fontSize: "30px",
                            }}
                            value="+"
                            onClick={() => {
                              incdecQuantity("inc");
                            }}
                          />
                        </div>
                        <div>In Stock (164)</div>
                      </div>
                      <div className="shoppage-actionbuttons">
                        <div
                          className="checkoutbtn shoppageaddtocart"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            addDataToCart(item.ProductId);
                          }}
                        >
                          {" "}
                          Add to Cart
                        </div>
                        <br />
                        <div
                          className="checkoutbtn shoppagewishlist"
                          style={{
                            background: "white",
                            border: "1px solid green",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            wishlistproduct(ProductId);
                          }}
                        >
                          {" "}
                          Wishlist
                        </div>
                        <br />
                        <div className="checkoutbtn"> Buy now</div>
                        <br />
                        <div
                          className="checkoutbtn"
                          style={{
                            background: "white",
                            border: "1px solid grey",
                            color: "black",
                          }}
                        >
                          {" "}
                          Add Compare
                        </div>
                      </div>
                      <hr style={{ margin: "0px" }} />

                      <div className="shoppage-paymentmethods">
                        <div>Guaranteed Safe Checkout</div>
                        <div style={{ marginTop: "20px" }}>
                          <Slider {...settings}>
                            <div>
                              <div className="shoppagepayment">
                                <img
                                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/grid-mid16398240121650183083-6549e6c726bd91699342096.webp"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <div className="shoppagepayment">
                                <img
                                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/payment91699342388.webp"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <div className="shoppagepayment">
                                <img
                                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo1658814161-6549e6cba270b1699342102.webp"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <div className="shoppagepayment">
                                <img
                                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/83-836574-paytabs-in-the-news-paytabs1658816083-6549e6d10ce861699342094.webp"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <div className="shoppagepayment">
                                <img
                                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/101699342657.png"
                                  alt=""
                                />
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                      <div className="shoppage-category">
                        <div>
                          Category: <span>{item.Category}</span>
                        </div>
                        <div>
                          Sub Category: <span>{item.Category}</span>
                        </div>
                        <div>
                          Child Category:{" "}
                          <span>
                            Android Phones iPhones Refurbished Phones Gaming
                            Phones Business Phones Feature Phones Rugged Phones
                          </span>
                        </div>
                        <div>
                          sku: <span>{item.ProductName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12">
                  <div className="shoppagedelivery">
                    <div className="deliveryfeatures">
                      <div className="deliveryicon">
                        <RocketLaunchOutlinedIcon />
                        <div className="deliverytitle">Express Delivery</div>
                      </div>
                      <div className="deliverytime">Get it within 24 hours</div>
                    </div>
                    <div className="deliveryfeatures">
                      <div className="deliveryicon">
                        <LocalShippingOutlinedIcon />
                        <div className="deliverytitle">Standard Delivery</div>
                      </div>
                      <div className="deliverytime">3-5 business days</div>
                    </div>
                    <div className="deliveryfeatures">
                      <div className="deliveryicon">
                        <NightsStayOutlinedIcon />
                        <div className="deliverytitle">Evening Delivery</div>
                      </div>
                      <div className="deliverytime">After 6pm deliveries</div>
                    </div>
                  </div>

                  <div className="shoppage-socialmedia">
                    <div>Share:</div>
                    <div className="shoppage-socialmediaicons">
                      <div className="sp_icons">
                        <FacebookMessengerShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <FacebookMessengerIcon size={32} round={true} />{" "}
                        </FacebookMessengerShareButton>
                      </div>
                      <div className="sp_icons">
                        <FacebookShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <FacebookIcon size={32} round={true} />{" "}
                        </FacebookShareButton>
                      </div>
                      <div className="sp_icons">
                        <TwitterShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <TwitterIcon size={32} round={true} />{" "}
                        </TwitterShareButton>
                      </div>
                      <div className="sp_icons">
                        <TelegramShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <TelegramIcon size={32} round={true} />{" "}
                        </TelegramShareButton>
                      </div>
                      <div className="sp_icons">
                        <WhatsappShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <WhatsappIcon size={32} round={true} />{" "}
                        </WhatsappShareButton>
                      </div>
                      <div className="sp_icons">
                        <EmailShareButton
                          url={`http://localhost:3000/shoppage/${ProductId}`}
                        >
                          <EmailIcon size={32} round={true} />{" "}
                        </EmailShareButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoppage;
