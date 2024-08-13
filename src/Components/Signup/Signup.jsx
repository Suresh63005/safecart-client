import React from "react";
import Header from "../Header";
import FooterBottom from "../../FooterBottom";
import "./Signup.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  async function saveData(data) {
    let formData = new FormData();

    formData.append("Name", data.Name);
    formData.append("UserName", data.UserName);
    formData.append("Email", data.Email);
    formData.append("Country", data.Country);
    formData.append("Password", data.Password);
    formData.append("ComfirmPassword", data.ComfirmPassword);

    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    // alert("success");
    try {
      const res = await axios.post(
        `http://localhost:5000/postuserdetails`,
        formData,
        options
      );
      alert("success");
      navigate("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <Header />

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
                <h2 className="breadcrumb-title">Register</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="sign-in-area-wrapper padding-top-100 padding-bottom-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6">
              <div className="sign-in register">
                <h4 className="single-title">Create Account</h4>
                <div className="form-wrapper custom__form mt-4">
                  <form
                    onSubmit={handleSubmit((data) => {
                      saveData(data);
                    })}
                    className="account-form"
                  >
                    <input style={{ width: "100%" }} type="hidden" />
                    <div className="form-group">
                      <input
                        style={{ width: "100%" }}
                        type="text"
                        {...register("Name", { required: true, minLength: 3 })}
                        className="form-control"
                        placeholder="Name"
                      />
                      {errors.Name && errors.Name?.type === "required" && (
                        <div className="text-danger required">
                          name is required
                        </div>
                      )}
                      {errors.Name && errors.Name?.type === "minLength" && (
                        <div className="text-danger required">
                          Name must be 3 characters
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        style={{ width: "100%" }}
                        type="text"
                        {...register("UserName", {
                          required: true,
                          minLength: 5,
                        })}
                        className="form-control"
                        placeholder="Username"
                      />
                      {errors.UserName &&
                        errors.UserName?.type === "required" && (
                          <div className="text-danger required">
                            name is required
                          </div>
                        )}
                      {errors.UserName &&
                        errors.UserName?.type === "minLength" && (
                          <div className="text-danger required">
                            UserName must be 5 characters
                          </div>
                        )}
                    </div>
                    <div className="form-group">
                      <input
                        style={{ width: "100%" }}
                        type="email"
                        {...register("Email", { required: true })}
                        className="form-control"
                        placeholder="Email"
                      />
                      {errors.Email && errors.Email?.type === "required" && (
                        <div className="text-danger required">
                          Email is required
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <select
                        id="country"
                        className="form-control"
                        {...register("Country")}
                        style={{ width: "100%", height: "42px" }}
                      >
                        <option value="1">Select Country</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="America">America</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Landon">Landon</option>
                        <option value="Europe">Europe</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        style={{ width: "100%" }}
                        type="password"
                        {...register("Password", { required: true })}
                        className="form-control"
                        placeholder="Password"
                      />
                      {errors.Password &&
                        errors.Password?.type === "required" && (
                          <div className="text-danger required">
                            PassWord is required
                          </div>
                        )}
                    </div>
                    <div className="form-group">
                      <input
                        style={{ width: "100%" }}
                        type="password"
                        {...register("ComfirmPassword", { required: true })}
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                      {errors.ComfirmPassword &&
                        errors.ComfirmPassword?.type === "required" && (
                          <div className="text-danger required">
                            date is required
                          </div>
                        )}
                    </div>
                    <div className="form-group">
                      <div className="box-wrap form-check">
                        <div className="left">
                          <input
                            type="checkbox"
                            className="form-check-input "
                          />
                          <label
                            className="form-check-label"
                            for="toc_and_privacy"
                          >
                            Accept all
                            <a className="text-active">
                              Terms and Conditions
                            </a>{" "}
                            &amp;
                            <a className="text-active">Privacy Policy</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <button type="submit" className="btn-submit w-100">
                        Create Account
                      </button>
                    </div>
                  </form>
                  <div className="signin__account__para d-flex justify-content-center mt-4">
                    <p className="info">Already Have account?</p>
                    <a href="http://localhost:3000/login" className="active">
                      <strong>Sign in</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterBottom />
    </div>
  );
};

export default Signup;
