import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./Wishlist.css";

import axios from "axios";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Services/CreateContext";

const Wishlist = () => {
  const user = useContext(UserContext);
  const [wishlistItem, setwishlistItem] = useState([]);

  useEffect(() => {
    if (user.UserId) {
      fetchdata();
    }
  }, [user.UserId]);

  async function wishlistdelete(ProductId) {
    if (ProductId > 0) {
      let formData = new FormData();
      formData.append("ProductID", ProductId);
      formData.append("UserId", user.UserId);

      let options = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let res = await axios.post(
        "http://localhost:5000/wishlistdelete",
        formData,
        options
      );
      window.location.reload();
    }
  }

  async function addDataToCart(ProductId) {
    if (user.length == 0) {
      Navigate("/login");
    } else {
      let userid = user.UserId;
      let productid = ProductId;

      let formData = new FormData();

      formData.append("UserId", userid);
      formData.append("ProductID", productid);
      formData.append("Quantity", 1);

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
    }
  }

  async function fetchdata() {
    if (user.length !== 0) {
      try {
        const response = await axios.get(
          "http://localhost:5000/getwishlistproducts/" + user.UserId
        );
        setwishlistItem(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      console.log("user doesnt exist");
    }
  }
  return (
    <div className="wishlist-main-div">
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
                <h2 className="breadcrumb-title">Wishlist</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {wishlistItem.length == 0 ? (
        <div className="noproducts">
          {" "}
          <img
            style={{ height: "400px" }}
            src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-2-6550c6c1108c11699792609.webp"
            alt=""
          />{" "}
          <div className="noproductstitle">
            <b>No Products Added To The Wishlist</b>
          </div>
        </div>
      ) : (
        <div className="carttable container " style={{ width: "1180px" }}>
          <table class="table table-bordered">
            <thead className="table-secondary">
              <tr>
                <th scope="col">
                  Product Name
                  <br />
                </th>
                <th scope="col">Unite Price</th>

                <th scope="col">Total Price </th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              {wishlistItem.map((item) => {
                const totalprice = item.Price * 1;
                return (
                  <tr>
                    <td style={{ width: "300px" }}>
                      {" "}
                      <div className="addtocartimgtitle">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <img src={item.ProductImage} alt="" />
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <b>{item.ProductName}</b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="action"> ${item.Price.toFixed(2)}</div>
                    </td>

                    <td>
                      <div className="action" style={{ color: "#006045 " }}>
                        $ {totalprice.toFixed(2)}
                      </div>
                    </td>
                    <td>
                      <div className="action">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="adddeletebtn">
                              <button
                                onClick={() => {
                                  wishlistdelete(item.ProductId);
                                }}
                                className="btn adddeleteicon"
                              >
                                <DeleteOutlineIcon />
                              </button>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="addwishbtn">
                              <button
                                onClick={() => {
                                  addDataToCart(item.ProductId);
                                  wishlistdelete(item.ProductId);
                                }}
                                className="btn addwishicon"
                              >
                                <ShoppingCartIcon />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
