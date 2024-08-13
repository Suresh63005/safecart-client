import React, { useEffect, useState } from "react";
import "./SellerLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const SellerLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showEmailPasswordErrMsg, setShowEmailPasswordErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function saveData(data) {
    setLoading(true);
    let formData = new FormData();

    formData.append("Email", data.email);
    formData.append("Password", data.password);

    let options = {
      headers: {
        "content-type": "multipart/form-data",
      },
      body: formData,
    };
    let res = await axios.post(
      "http://localhost:5000/checkseller",
      formData,
      options
    );
    setTimeout(() => {
      if (res.data[0] != undefined) {
        setShowEmailPasswordErrMsg(false);
        // localStorage.setItem("user", JSON.stringify(res.data[0]));

        //current date
        let date = new Date();
        date.setMinutes(date.getMinutes() + 60);

        document.cookie = `user=${JSON.stringify(
          res.data[0]
        )}; expires=${date.toUTCString()};path='/'`;
        navigate("/homepage1");
      } else {
        setShowEmailPasswordErrMsg(true);
      }
      window.location.reload();
      setLoading(false);
    }, 3000);
  }

  useEffect(() => {
    let user = null;

    if (
      document.cookie != null &&
      document.cookie != "" &&
      document.cookie.split("=")[1] != "null"
    ) {
      try {
        user = JSON.parse(document.cookie.split("=")[1]);
      } catch (error) {
        console.log("Error Parsing Cookie:", error);
      }
    }

    if (user) {
      setTimeout(() => {
        navigate("/homepage1");
      }, 3000);
    }
  }, [navigate]);

  return (
    <div>
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
                <h2 className="breadcrumb-title">Vendor login</h2>
                <br />
                <h5>Home | Login </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30px" }} className="vendor-signin-area">
        <div className="container container-one" style={{ maxWidth: "600px" }}>
          <div className="vendor-sigin-wrapper">
            {showEmailPasswordErrMsg === true && (
              <div className="text-danger">Incorrect email/password</div>
            )}
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
                    <label className="form-label">Email</label>
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
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      placeholder="Type Password"
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
                    <a
                      href="#1"
                      className="forgot-password mt-3"
                      style={{ color: "black" }}
                    >
                      {" "}
                      Forgot Password?
                    </a>
                  </div>
                  <div className="dashboard-btn-wrapper mt-4">
                    <button
                      type="submit"
                      className="btn-submit dashboard-bg w-100"
                    >
                      {loading ? (
                        <div>
                          <div
                            class="spinner-border text-light spinner-border-sm"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <span>Login success.. redirecting..</span>
                        </div>
                      ) : (
                        "Sign In"
                      )}
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
    </div>
  );
};

export default SellerLogin;
