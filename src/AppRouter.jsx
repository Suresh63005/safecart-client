import React from "react";
import Cart from "./Components/Cart";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Contact from "./Components/Contact/Contact";
import HomePage1 from "./Components/Home/HomePage1";
import TrackingOrder from "./Components/TrackingOrder/TrackingOrder";
import Faq from "./Components/Faq/Faq";
import Signup from "./Components/Signup/Signup";
import Header from "./Components/Header";
import FooterTop from "./Components/FooterTop";
import FooterBottom from "./FooterBottom";
import Hotel from "./hotelsunitha/Hotel";
import SellerSignup from "./Components/SellerSignup/SellerSignup";
import SellerLogin from "./Components/SellerLogin/SellerLogin";
import Productcreation from "./Product-Creation/Productcreation";
import Addtocart from "./Components/Addtocart/Addtocart";
import Wishlist from "./Components/Wishlist/Wishlist";
import Checkout from "./Components/Checkout/Checkout";
import Shoppage from "./Components/Shoppage/Shoppage";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditProfile from "./Components/Dashboard/EditProfile";
import ChangePassword from "./Components/Dashboard/ChangePassword";
import ShippingAddress from "./Components/Dashboard/ShippingAddress";
import AddAddress from "./Components/Dashboard/Add-Address";
import { About } from "./Components/About/About";
import { Termsconditions } from "./Components/TermsConditions/TermsConditions";
import OrderSuccessfull from "./Components/OrderSuccessfull/OrderSuccessfull";
import SellerHeader from "./Components/SellerHeader/SellerHeader";
import Todolist from "./Components/todolist/Todolist";

const AppRouter = () => {
  return (
    <div className="a">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route
          path="/login"
          element={
            <div>
              {" "}
              <Header />
              <Login />
              <br />
              <br />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              {" "}
              <Header />
              <Contact /> <FooterBottom />{" "}
            </div>
          }
        />
        <Route path="/homepage1" element={<HomePage1 />} />
        <Route
          path="/tracking"
          element={
            <div>
              {" "}
              <Header />
              <TrackingOrder /> <FooterBottom />{" "}
            </div>
          }
        />
        <Route
          path="/faq"
          element={
            <div>
              {" "}
              <Header />
              <Faq /> <FooterBottom />{" "}
            </div>
          }
        />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/about" element={} /> */}
        <Route path="/sellersignup" element={<SellerSignup />} />
        <Route
          path="/sellerlogin"
          element={
            <div>
              <SellerHeader />
              <SellerLogin />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/productcreation"
          element={
            <div>
              <Header />
              <Productcreation />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/edit-product/:ProductId"
          element={
            <div>
              <Header />
              <Productcreation />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/todolist"
          element={
            <div>
              <Todolist/>
            </div>
          }
        />
        <Route
          path="/addtocart"
          element={
            <div>
              <Header />
              <Addtocart />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/wishlist"
          element={
            <div>
              <Header />
              <Wishlist />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/shoppage/:ProductId"
          element={
            <div>
              <Header />
              <Shoppage />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/dashboard"
          element={
            <div>
              <Header />
              <Dashboard />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/dashboard/edit-profile"
          element={
            <div>
              <Header />
              <EditProfile />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/dashboard/change-password"
          element={
            <div>
              <Header />
              <ChangePassword />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/dashboard/shipping-address"
          element={
            <div>
              <Header />
              <ShippingAddress />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/address"
          element={
            <div>
              <Header />
              <AddAddress />
              <br />
              <FooterBottom />
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <About />
            </div>
          }
        />
        <Route
          path="/termsconditions"
          element={
            <div>
              <Termsconditions />
            </div>
          }
        />
        <Route
          path="/ordersuccessfull"
          element={
            <div>
              <OrderSuccessfull />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
