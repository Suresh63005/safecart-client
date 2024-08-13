import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
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
import { getData } from "../Services/Context.service";
import axios from "axios";
import { UserContext } from "../Services/CreateContext";

const Header = () => {
  const user = useContext(UserContext);

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [cartcount, setCartcount] = useState({ cartcount: 0 });
  const [countWishlist, setCountWishlist] = useState({ wishlistcount: 0 });
  const [addtoCart, setAddtoCart] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchdata();
  //   addtocartcount();
  //   wishlistcount();
  // }, []);

  useEffect(() => {
    if (user.UserId) {
      fetchdata();
      addtocartcount();
      wishlistcount();
      Addtocartfetchdata();
    }
  }, [user.UserId]);

  const totalPrice = addtoCart.reduce((sum, product) => sum + product.Price, 0);

  async function fetchdata() {
    const url = "http://localhost:5000/getproducts";
    const response = await getData(url);
    setProducts(response.data);
  }
  async function addtocartcount() {
    if (user.length !== 0) {
      const response = await axios.get(
        "http://localhost:5000/getaddtocartcount/" + user.UserId
      );
      setCartcount(response.data[0]);
    } else {
      setCartcount();
    }
  }

  async function addtocartdelete(ProductId) {
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
        "http://localhost:5000/addtocartdelete",
        formData,
        options
      );
      window.location.reload();
    }
  }
  async function wishlistcount() {
    if (user.length !== 0) {
      const response = await axios.get(
        "http://localhost:5000/getwishlistcount/" + user.UserId
      );
      setCountWishlist(response.data[0]);
    } else {
      setCountWishlist({ wishlistcount: "0" });
    }
  }

  async function Addtocartfetchdata() {
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

  function removeDisplay() {
    document
      .getElementById("search_suggestion_wrap")
      .classList.remove("d-none");
  }
  function addDisplay() {
    document.getElementById("search_suggestion_wrap").classList.add("d-none");
  }

  function logoutuser() {
    document.cookie = "user=;";
    navigate("/login");
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
                  <Link to="/faq">FAQ</Link>
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
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    removeDisplay();
                  }}
                  placeholder="Search for products"
                  className="form-control w-50 ms-5 headerserachbar"
                />
                <label
                  style={{}}
                  type="submit"
                  onClick={() => {
                    addDisplay();
                  }}
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
                        >
                          {products
                            .filter((product) =>
                              product.ProductName.toLowerCase().includes(
                                search.toLowerCase()
                              )
                            )
                            .map((product) => {
                              return (
                                <div className="product-suggestion-item">
                                  <div className="product-image">
                                    <img src={product.ProductImage} alt="img" />
                                  </div>
                                  <div className="product-info">
                                    <div className="product-info-top">
                                      <h6 className="product-name">
                                        <a
                                          href={`/shoppage/${product.ProductId}`}
                                        >
                                          {product.ProductName}
                                        </a>
                                      </h6>
                                    </div>
                                    <div className="product-price mt-2">
                                      <div className="price-update-through">
                                        <span className="flash-price fw-500">
                                          ₹{product.Price}
                                        </span>
                                        <span className="flash-old-prices ">
                                          ₹{product.OldPrice}
                                        </span>
                                      </div>
                                      <span className="stock-out">
                                        In Stock
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </li>
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
          {/* <div className="navbar-bottom-middle">
            <button
              className="btn homepagebutton"
              style={{ padding: "0" }}
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
              <div class="offcanvas-body">
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
          </div> */}
          <div className="icons">
            <div className="icon">
              <Link to="/wishlist">
                <FavoriteBorderIcon />
              </Link>
              <div class="icon-notification">{countWishlist.wishlistcount}</div>
            </div>
            <div className="icon header-addtocart-icon">
              <Link to="/addtocart">
                <ShoppingCartIcon />
              </Link>
              <div className="icon-notification">{cartcount.cartcount}</div>

              <div
                className="headeraddtocartdropdown"
                style={{
                  boxShadow: "0 0 10px rgba(221, 221, 221, .4)",
                  padding: "20px",
                }}
              >
                <div
                  className="header-addtocart-products"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {addtoCart.map((product) => {
                    const itemprice = product.Price * product.Quantity;
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="product-suggestion-item">
                          <div
                            className="product-image"
                            style={{ width: "80px", height: "80px" }}
                          >
                            <img src={product.ProductImage} alt="img" />
                          </div>

                          <div className="product-info">
                            <div className="product-info-top">
                              <h6 className="product-name">
                                <a href={`/shoppage/${product.ProductId}`}>
                                  {product.ProductName}
                                </a>
                              </h6>
                            </div>
                            <div className="product-price mt-2">
                              <div className="price-update-through">
                                <span
                                  style={{
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    color: "#198754",
                                  }}
                                  className="flash-price "
                                >
                                  ${itemprice}
                                </span>

                                <span
                                  style={{
                                    marginLeft: "50px",
                                    fontWeight: "500",
                                  }}
                                >
                                  Qnt: {product.Quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          onClick={() => {
                            addtocartdelete(product.ProductId);
                          }}
                          style={{ fontWeight: "500", cursor: "pointer" }}
                        >
                          <ClearOutlinedIcon style={{ color: "grey" }} />
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="header-total-amount">
                  <div>Total Amount</div>
                  <div>${totalPrice.toFixed(2)}</div>
                </div>

                <div
                  className="checkoutbtn"
                  style={{ width: "100%", marginTop: "20px" }}
                >
                  {" "}
                  <Link style={{ color: "white" }} to="/checkout">
                    Checkout
                  </Link>
                </div>
                <div
                  className="checkoutbtn"
                  style={{
                    width: "100%",
                    marginTop: "20px",
                    background: "white",
                    color: "#198754",
                    border: "1px solid #198754",
                  }}
                >
                  {" "}
                  <Link style={{ color: "#198754" }} to="/addtocart">
                    View Cart
                  </Link>
                </div>
              </div>
            </div>
            <div className="icon">
              <ScreenRotationAltIcon />
            </div>
          </div>
          {user.length == 0 ? (
            <div className="login">
              <PersonOutlineIcon />
              <span>Login/Register</span>
              <ul class="account-list-item">
                <li class="list">
                  {" "}
                  <a a href="http://localhost:3000/login">
                    Sign In as User{" "}
                  </a>{" "}
                </li>
                <li class="list">
                  {" "}
                  <a href="http://localhost:3000/signup">
                    Sign Up as User{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          ) : (
            <div className="login">
              <PersonOutlineIcon />
              <span>
                <b>{user.Name}</b>{" "}
              </span>
              <ul class="account-list-item">
                <li class="list">
                  {" "}
                  <Link to="/dashboard">DashBoard </Link>{" "}
                </li>
                <li class="list">
                  {" "}
                  <a href="/dashboard/edit-profile"> EditProfile</a>{" "}
                </li>
                <li class="list">
                  {" "}
                  <a href=""> Change Password</a>{" "}
                </li>
                <li class="list">
                  {" "}
                  <a href="/dashboard/shipping-address">
                    Shipping Address
                  </a>{" "}
                </li>
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

export default Header;
