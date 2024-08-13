import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Services/CreateContext";
import axios from "axios";
import { Link } from "react-router-dom";

const AddAddress = () => {
  const user = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function saveData(data) {
    if (user.length !== 0) {
      let formData = new FormData();

      formData.append("FullName", data.FullName);
      formData.append("Address", data.Address);
      formData.append("State", data.State);
      formData.append("Country", data.Country);
      formData.append("City", data.City);
      formData.append("Zipcode", data.Zipcode);
      formData.append("Mobile", data.Mobile);
      formData.append("Email", data.Email);
      formData.append("OrderNotes", data.OrderNotes);
      formData.append("UserId", user.UserId);

      const options = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // alert("success");
      try {
        const res = await axios.post(
          `http://localhost:5000/postaddress`,
          formData,
          options
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div>
      <div className="checkout-main-div">
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
                  <h2 className="breadcrumb-title"> Add Address</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container"
          style={{
            width: "1250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSubmit((data) => {
              saveData(data);
            })}
          >
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="billingdetailsform">
                  <h3>Billing Details</h3>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      {...register("FullName", {
                        required: true,
                        minLength: 3,
                      })}
                      placeholder="Type First Name"
                      className="form-control"
                    />

                    {errors.FullName &&
                      errors.FullName?.type === "required" && (
                        <div className="text-danger required">
                          FullName is required
                        </div>
                      )}
                    {errors.FullName &&
                      errors.FullName?.type === "minLength" && (
                        <div className="text-danger required">
                          FullName must be 3 characters
                        </div>
                      )}
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      {...register("Address", {
                        required: true,
                      })}
                      placeholder="Type Address"
                      className="form-control"
                    />

                    {errors.Address && errors.Address?.type === "required" && (
                      <div className="text-danger required">
                        Address is required
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>Country</label>
                        <input
                          type="text"
                          {...register("Country", {
                            required: true,
                          })}
                          placeholder="Select an Country"
                          className="form-control"
                        />
                        {errors.Country &&
                          errors.Country?.type === "required" && (
                            <div className="text-danger required">
                              Country is required
                            </div>
                          )}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>State</label>
                        <input
                          type="text"
                          {...register("State", {
                            required: true,
                          })}
                          placeholder="Type First Name"
                          className="form-control"
                        />
                        {errors.State && errors.State?.type === "required" && (
                          <div className="text-danger required">
                            State is required
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>City/Town</label>
                        <input
                          type="text"
                          {...register("City", {
                            required: true,
                          })}
                          placeholder="Select an Country"
                          className="form-control"
                        />
                        {errors.City && errors.City?.type === "required" && (
                          <div className="text-danger required">
                            City is required
                          </div>
                        )}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>Zip Code</label>
                        <input
                          type="number"
                          {...register("Zipcode", {
                            required: true,
                          })}
                          placeholder="Type First Name"
                          className="form-control"
                        />
                        {errors.Zipcode &&
                          errors.Zipcode?.type === "required" && (
                            <div className="text-danger required">
                              Zipcode is required
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>MObile Number</label>
                        <input
                          type="number"
                          {...register("Mobile", {
                            required: true,
                          })}
                          placeholder="Select an Country"
                          className="form-control"
                        />
                        {errors.Mobile &&
                          errors.Mobile?.type === "required" && (
                            <div className="text-danger required">
                              Mobile is required
                            </div>
                          )}
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <label>Email Address</label>
                        <input
                          type="text"
                          {...register("Email", {
                            required: true,
                          })}
                          placeholder="Type First Name"
                          className="form-control"
                        />
                        {errors.Email && errors.Email?.type === "required" && (
                          <div className="text-danger required">
                            Email is required
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Order Notes</label>
                    <textarea
                      placeholder="Type Messages"
                      {...register("OrderNotes", {
                        required: true,
                      })}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div
                  className="form-group"
                  style={{ display: "flex", gap: "10px", marginTop: "30px" }}
                >
                  <input
                    style={{ width: "15px" }}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label style={{ fontWeight: "500" }}>
                    Create An Accounts{" "}
                  </label>
                </div>
              </div>
              <div>
                <div className="ordersummary" style={{ background: "white" }}>
                  <button
                    type="submit"
                    className="checkoutbtn"
                    style={{ width: "400px", border: "none" }}
                  >
                    {" "}
                    Save Address
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
