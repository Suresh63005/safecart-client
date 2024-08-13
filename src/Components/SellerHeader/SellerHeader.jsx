import React, { useContext, useEffect, useState } from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AccessibleIcon from "@mui/icons-material/Accessible";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
// import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../../Services/CreateContext";

const SellerHeader = () => {
  const user = useContext(UserContext);

  const navigate = useNavigate();
  function logoutuser() {
    document.cookie = "user=;";
    navigate("/sellerlogin");
  }

  return (
    <div>
      <div className="navbar  navbar-top">
        <div className="co">
          <div className="navbar-left ">
            <ul className="nav flex-row social ">
              <li className="nav-item ">
                <a className="nav-link">
                  <InstagramIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AccessibleIcon />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <TwitterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="co">
          <div className="navbar-right">
            <ul className="nav menubar">
              <li className="nav-item">
                <a
                  className="nav-link becomeseller"
                  style={{
                    background: "#ffc107",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  <Link
                    to="/sellersignup"
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Become a seller
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link sellerlogin">
                  <Link to="/sellerlogin">Seller login </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/productcreation">Add Product</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/contact">Contact</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/tracking"> Tracking order </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar bg-light navbar-middle">
        <div className="middle-navbar-left">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <Link to="/">
                {" "}
                <div className="navbar-middle-logo">
                  <img
                    src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo1698825016.webp"
                    alt=""
                  />
                </div>{" "}
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form
                action="#"
                className="input-group  searchbar single-searchbar searchbar-suggestions"
              >
                <input
                  autoComplete="off"
                  id="search_form_input"
                  type="text"
                  placeholder="Search for products"
                  className="form-control w-50 ms-5 headerserachbar"
                />
                <label
                  style={{}}
                  type="submit"
                  className="input-group-text searchicon"
                >
                  <SearchIcon />
                </label>
                <div
                  className="search-suggestion d-none show"
                  id="search_suggestion_wrap"
                >
                  <div className="search-inner">
                    <div className="category-suggestion item-suggestions">
                      <h6 className="item-title">Category Suggestions</h6>
                      <ul
                        id="search_result_categories"
                        className="category-suggestion-list mt-4"
                      >
                        <li className="list">
                          <a className="item">Electronics</a>
                        </li>
                        <li className="list">
                          <a className="item">Fashion</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-suggestion item-suggestions">
                      <h6 className="item-title">Product Suggestions</h6>
                      <ul
                        id="search_result_products"
                        className="product-suggestion-list mt-4"
                      >
                        <li
                          className="list"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                          }}
                        ></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="middle-navbar-right">
          <div className="location">
            <LocationOnIcon />
            <span>
              <Link to="/tracking" style={{ color: "black" }}>
                Order Tracking
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="navbar  navbar-bottom">
        <div className="navbar-bottom-left">
          <div className="categories">
            <button
              class="btn"
              style={{ padding: "0" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <span>
                <MenuIcon />
              </span>
            </button>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
              style={{ zIndex: "9999" }}
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  Category All
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <div>
                  <Link to="/productcreation">
                    {" "}
                    <b>Products Creation</b>
                  </Link>
                </div>
              </div>
            </div>
            Categories
          </div>
          <h3 className="line">|</h3>
          <div className="navbar-bottom-dropdowns">
            <div className="drp">
              <Link to="/homepage1">Home Page</Link>
            </div>
            <div className="drp">
              {" "}
              <Link to="/about">About</Link>{" "}
            </div>
            <div className=" drp">Shop Page</div>
            <div className="headerpagebtn drp">Pages</div>

            <ul className="header-pages">
              <li className="list">
                {" "}
                <a href="/termsconditions">Terms & Conditions</a>{" "}
              </li>
              <li className="list">
                {" "}
                <a href="http://localhost:3000/signup">Privacy </a>{" "}
              </li>
            </ul>

            <div className=" drp">
              {" "}
              <Link style={{ color: "black" }} to="/termsconditions">
                Terms & Conditions
              </Link>
            </div>
            <div className="drp">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="navbar-bottom-middle">
          <button
            className="btn homepagebutton"
            style={{ padding: "0", display: "none" }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvashomepage"
            aria-controls="offcanvashomepage"
          >
            <span>
              <MenuIcon />
            </span>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvashomepage"
            aria-labelledby="offcanvashomepageLabel"
            style={{ zIndex: "9999" }}
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div
              class="offcanvas-body"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
                fontSize: "20px",
              }}
            >
              <div className="dropdown-toggle drp" data-toggle="dropdown">
                <Link to="/homepage1">Home Page</Link>
              </div>
              <div className="drp">
                {" "}
                <Link to="/about">About</Link>{" "}
              </div>
              <div className="dropdown-toggle drp" data-toggle="dropdown">
                Shop Page
              </div>
              <div className="dropdown-toggle drp" data-toggle="dropdown">
                Pages
              </div>
              <div className="dropdown-toggle drp" data-toggle="dropdown">
                Blog
              </div>
              <div className="drp">
                <Link to="/contact">Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-bottom-right">
          <div className="icons"></div>
          {user.length == 0 ? (
            <div className="login">
              <PersonOutlineIcon />
              <span>Login/Register</span>
              <ul class="account-list-item">
                <li class="list">
                  {" "}
                  <a a href="http://localhost:3000/login">
                    Sign In as Seller{" "}
                  </a>{" "}
                </li>
                <li class="list">
                  {" "}
                  <a href="http://localhost:3000/signup">
                    Sign Up as Seller{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          ) : (
            <div className="login">
              <PersonOutlineIcon />
              <span>
                <b>{user.OwnerName}</b>{" "}
              </span>
              <ul class="account-list-item">
                <li class="list">
                  {" "}
                  <a href="" onClick={() => logoutuser()}>
                    Logout
                  </a>{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerHeader;
