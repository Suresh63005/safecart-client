import React from "react";
import shoplogo from "../../assets/shoplogo.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Shopclues.css";
const Shopclues = () => {
  return (
    <div className="shop-main">
      <div className="shop-navbar">
        <div className="shop-logo">
          <img src={shoplogo} alt="logo" />
        </div>
        <div className="shop-searchbar">
          <input className="" type="text" placeholder="what is on your mind" />
          <button className="shop-btn">Search</button>
        </div>
        <div className="shop-menu">
          <div className="sharelocation">
            <div className="sharelocation-spans">
              <span>Share</span>
              <span>Location</span>
            </div>
            <LocationOnIcon />
          </div>
          <div className="notification">
            <NotificationsIcon />
          </div>
          <div className="notification">
            <FavoriteBorderIcon />
          </div>
          <div className="notification">
            <ShoppingCartIcon />
          </div>
          <div className="signin">
            <span>Signin</span>
          </div>
        </div>
      </div>

      <div className="shop-body">
        <div className="shop-wrapper">
          <div className="wrapper-box">
            <img
              src="https://cdn.shopclues.com/images/banners/2023/Apr/14/2Platinum_Srushty_14April23.jpg"
              alt=""
            />
          </div>
          <div className="wrapper-box">
            <img
              src="https://cdn.shopclues.com/images/banners/2023/Apr/14/1Platinum_Srushty_14April23.jpg"
              alt=""
            />
          </div>
          <div className="wrapper-box">
            <img
              src="https://cdn.shopclues.com/images/banners/2023/Apr/14/3Platinum_Srushty_14April23.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopclues;
