import React, { useState } from "react";
import Header from "../Header";
import FooterTop from "../FooterTop";
import FooterBottom from "../../FooterBottom";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import SellerHeader from "../SellerHeader/SellerHeader";

const SellerSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function saveData(data) {
    let formData = new FormData();
    formData.append("Ownername", data.ownername);
    formData.append("Businessname", data.businessname);
    formData.append("Email", data.email);
    formData.append("Username", data.username);
    formData.append("Password", data.password);

    let options = {
      headers: {
        "content-type": "multipart/form-data",
      },
      body: formData,
    };
    let res = await axios.post(
      "http://localhost:5000/postsellerdetails",
      formData,
      options
    );
    navigate("/sellerlogin");
  }

  return (
    <div>
      <SellerHeader />
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
                <h2 className="breadcrumb-title">Vendor Register</h2>
                <br />
                <h5>Home | Register </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="vendor-signin-area"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="container container-one" style={{ maxWidth: "600px" }}>
          <div className="vendor-sigin-wrapper">
            <form
              onSubmit={handleSubmit((data) => {
                saveData(data);
              })}
            >
              <div className="vendor-sigin-wrapper-inner">
                <h5 className="welcome-title ">Welcome Back!</h5>
                <h2 className="main-title "></h2>
                <div className="dashboard-form mt-4">
                  <div className="username">
                    <label className="form-label">Owner Name</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("ownername", { required: true })}
                      placeholder="Owner Name"
                    />
                    {errors.ownername &&
                      errors.ownername?.type === "required" && (
                        <div className="text-danger required">
                          Owner Name is required
                        </div>
                      )}
                  </div>
                  <div className="username">
                    <label className="form-label">Business Name</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("businessname", { required: true })}
                      placeholder="Business Name"
                    />
                    {errors.businessname &&
                      errors.businessname?.type === "required" && (
                        <div className="text-danger required">
                          Business Name is required
                        </div>
                      )}
                  </div>
                  <div className="username">
                    <label className="form-label"> Enter Email</label>
                    <input
                      className="form-control"
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Type ypur Email"
                    />
                    {errors.email && errors.email?.type === "required" && (
                      <div className="text-danger required">
                        email is required
                      </div>
                    )}
                  </div>
                  <div className="username">
                    <label className="form-label">User Name</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register("username", { required: true })}
                      placeholder="Username"
                    />
                    {errors.username &&
                      errors.username?.type === "required" && (
                        <div className="text-danger required">
                          Username is required
                        </div>
                      )}
                  </div>
                  <div className="username">
                    <label className="form-label">Enter Password</label>
                    <input
                      type="Password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="form-control"
                    />
                    {errors.password &&
                      errors.password?.type === "required" && (
                        <div className="text-danger required">
                          Password is required
                        </div>
                      )}
                  </div>

                  <div className="remember-password-flex d-flex flex-wrap justify-content-between align-items-center remember">
                    <div className="dashboard-checkbox">
                      <input
                        className="check-input"
                        type="checkbox"
                        id="agree"
                      />
                      <label htmlFor="agree" className="checkbox-label">
                        Remember
                      </label>
                    </div>
                  </div>
                  <div className="dashboard-btn-wrapper mt-4">
                    <button
                      type="submit"
                      className="btn-submit dashboard-bg w-100"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="dashboard-bottom-contents">
                  <div className="account-bottom">
                    <span className="account-title mt-3">
                      Don't have account?
                    </span>
                    <a className="signup-login mt-3">
                      <Link style={{ color: "black" }} to="/signup">
                        Signup Now
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <FooterBottom />
    </div>
  );
};

export default SellerSignup;
