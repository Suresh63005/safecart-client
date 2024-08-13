import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import "./HomePage1.css";
import { getData } from "../../Services/Context.service";
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { UserContext } from "../../Services/CreateContext";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import SellerHeader from "../SellerHeader/SellerHeader";

const HomePage1 = () => {
  const [products, setProducts] = useState([]);

  const seller = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [seller.Sellerid]);

  async function fetchData() {
    if (seller.Sellerid) {
      const url = "http://localhost:5000/getsellerproducts/" + seller.Sellerid;
      const response = await getData(url);
      setProducts(response.data);
    }
  }

  return (
    <div>
      <SellerHeader />
      <div className="homestyle1" style={{ marginTop: "50px" }}>
        <div>
          <p className="homestylep1">
            Mans Silver Ridge Lite Long Sleeve Shirt
          </p>
          <p className="homestylep2">
            $600.00 <strike>$533.00</strike>
          </p>
          <button className="homestylebtn"> Shop Now</button>
        </div>
        <div className="homestyleimg1">
          <img
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-3-654732b647eb61699164957.webp"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <h3 className="homepage1choose">Choose Category</h3>
        <div className="row">
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-4-3-6558b255b81901700311871.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Electronics</b>
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-1-6558971bb6c2a1700304850.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Fashion</b>
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-2-1-65589718956611700304867.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Home & Living</b>
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-1-4-6558b25895b841700311711.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Garden & Outdoors</b>
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-4-2-6558b255b6af21700311825.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Sports & Fitness</b>
            </p>
          </div>
          <div className="col-lg-2 col-md-12 col-sm-12">
            <img
              src="https://safecart.bytesed.com/assets/uploads/media-uploader/category-4-6558b254f05381700311806.webp"
              alt=""
            />
            <p className="homepage1choosecat">
              <b>Personal Care & Beauty</b>
            </p>
          </div>
        </div>
      </div>
      <div className="popularProduct_area padding-top-50 padding-bottom-50">
        <div className="container container_1608">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-left section_borderBottom">
                <h2 className="title">Seller Products</h2>
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
                      <div className="product_offer"></div>
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
                            ₹{Price}
                          </span>
                          <s className="product_price_old">₹{OldPrice}</s>
                        </div>
                        <div className="product_card_cart mt-3">
                          <a
                            className="product_card_cart_outline radius-30"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              navigate("/edit-product/" + ProductId);
                            }}
                          >
                            Update
                          </a>

                          <div className="product_card_cart_right">
                            <a
                              href="#"
                              className="product_card_cart_btn_icon cart-loading icon add_to_compare_ajax"
                            >
                              <ScreenRotationAltIcon />
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
    </div>
  );
};

export default HomePage1;
