import React, { useContext, useEffect, useState } from "react";
import "./FakeProducts.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { getData } from "../Services/Context.service";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../Services/CreateContext";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const FakeProducts = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState({});
  const navigate = useNavigate();

  const user = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const url = "http://localhost:5000/getproducts";
    const response = await getData(url);
    setProducts(response.data);
  }

  async function addDataToCart(ProductId) {
    if (user.length === 0) {
      navigate("/login");
    } else {
      setLoading((prev) => ({ ...prev, [ProductId]: true }));

      let userid = user.UserId;
      let productid = ProductId;

      let formData = new FormData();
      formData.append("UserId", userid);
      formData.append("ProductID", productid);
      formData.append("Quantity", quantity);

      let options = {
        headers: {
          "content-type": "multi-part/form-data",
        },
      };

      try {
        await axios.post(
          "http://localhost:5000/postaddtocart",
          formData,
          options
        );
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading((prev) => ({ ...prev, [ProductId]: false }));
        }, 2000);
      }
    }
  }

  async function wishlistProduct(ProductId) {
    if (user.length === 0) {
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

      try {
        await axios.post(
          "http://localhost:5000/postwishlist",
          formData,
          options
        );
      } catch (error) {
        console.error(error);
      }
    }
    window.location.reload();
  }

  return (
    <div className="popularProduct_area padding-top-50 padding-bottom-50">
      <div className="container container_1608">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-left section_borderBottom">
              <h2 className="title">Popular Products</h2>
              <div className="btn_wrapper">
                <a className="viewAll_btn">
                  View All
                  <ChevronRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="popularProducts_products">
          <div className="row  gy-5 mt-1">
            {products.map((product) => {
              const {
                ProductId,
                ProductName,
                Price,
                OldPrice,
                Discount,
                ProductImage,
              } = product;
              return (
                <div
                  className="col-xxl-2 col-xl-3 col-md-4 col-sm-2"
                  key={ProductId}
                >
                  <div className="product_card ">
                    <div className="product_offer">
                      <span className="product_offer_para">
                        {loading[ProductId] ? (
                          <div className="checkoutbtn itemaddedtocart">
                            <CheckOutlinedIcon /> Item Added Successfully
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                    <div className="product_card_thumb">
                      <a>
                        <img src={ProductImage} alt="" />
                      </a>
                    </div>
                    <div className="newlyarrived">New Arrival</div>
                    <div className="product_card_contents mt-3">
                      <h6
                        style={{ fontSize: "16px", fontWeight: "500" }}
                        className="product_card_contents_title mt-2"
                      >
                        <a href={`/shoppage/${ProductId}`}>{ProductName}</a>
                      </h6>
                      <div className="product_price mt-2">
                        <span className="product_price_current color-two">
                          ${Price}
                        </span>
                        <s className="product_price_old">${OldPrice}</s>
                      </div>
                      <div className="product_card_cart mt-3">
                        <a
                          className="product_card_cart_outline radius-30"
                          style={{ cursor: "pointer" }}
                          onClick={() => addDataToCart(ProductId)}
                        >
                          {loading[ProductId] ? (
                            <div>
                              <div
                                class="spinner-border text-success spinner-border-sm"
                                role="status"
                              >
                                <span class="visually-hidden">Loading...</span>
                              </div>
                              <span>Adding...</span>
                            </div>
                          ) : (
                            "Add to Cart"
                          )}
                        </a>

                        <div className="product_card_cart_right">
                          <a
                            href="#"
                            className="product_card_cart_btn_icon cart-loading icon add_to_compare"
                          >
                            <ScreenRotationAltIcon />
                          </a>
                          <a
                            className="add_to_wishlist_ajax icon cart-loading product_card_cart_btn_icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => wishlistProduct(ProductId)}
                          >
                            <FavoriteBorderOutlinedIcon />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeProducts;
