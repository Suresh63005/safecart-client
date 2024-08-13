import axios from "axios";
import React, { useContext, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { UserContext } from "../../Services/CreateContext";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const [oldpassworderror, setOldpassworderror] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useContext(UserContext);

  async function saveData(data) {
    if (user.length != 0) {
      if (
        user.Password === data.OldPassword &&
        data.NewPassword === data.ConfirmPassword
      ) {
        let formData = new FormData();

        formData.append("NewPassword", data.NewPassword);
        formData.append("ConfirmPassword", data.ConfirmPassword);
        formData.append("UserId", user.UserId);

        const options = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };

        try {
          const res = await axios.post(
            `http://localhost:5000/changepassword`,
            formData,
            options
          );
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        setOldpassworderror(true);
      }
    }
  }
  return (
    <div className="changepassword-main-div">
      <div>
        {/* start */}
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
                  <h2 className="breadcrumb-title">Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dahsboard">
          <div className="container" style={{ maxWidth: "1250px" }}>
            <div className="row">
              <div className="col-lg-12 col-sm-12">
                <div className="user-dashboarrd-wrapper">
                  <nav
                    class="navbar dashboardmenu navbar-expand-lg navbar-light bg-light"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      float: "left",
                    }}
                  >
                    <div
                      class="navbar-toggler"
                      type="button"
                      style={{
                        border: "none",
                        background: "#006045",
                        padding: "10px 8px 10px 8px",
                      }}
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <SettingsSuggestOutlinedIcon
                        style={{ color: "whitesmoke" }}
                      />
                    </div>

                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul
                        class="navbar-nav dashboard-menu-items"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <li class="nav-item active">
                          <a class="nav-link" href="#">
                            <AccountCircleOutlinedIcon /> Suresh
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/dashboard">
                            Dashboard
                          </a>
                        </li>
                        <li
                          class="nav-item"
                          //   style={{ border: "1px solid #006045" }}
                        >
                          <a class="nav-link" href="/dashboard/edit-profile">
                            Edit Profile
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            style={{ color: "#006045", fontWeight: "700" }}
                            class="nav-link"
                            href="#"
                          >
                            Change Password
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            My Orders
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Chat List
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Refund Request
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Wallet history
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            href="/dashboard/shipping-address"
                          >
                            Shipping Address
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Support Ticket
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="row">
                    <div className="col-lg-12">
                      <div
                        className="sign-in register"
                        style={{ background: "#fff" }}
                      >
                        {oldpassworderror == true && (
                          <div className="text-danger">
                            {" "}
                            Old Password /Confirm Password is not matched
                          </div>
                        )}
                        <h4 className="single-title">Change Password</h4>
                        <div className="form-wrapper custom__form mt-4">
                          <form
                            onSubmit={handleSubmit((data) => {
                              saveData(data);
                            })}
                            className="account-form"
                          >
                            <input style={{ width: "100%" }} type="hidden" />
                            <div className="form-group">
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                Old Password
                              </label>
                              <input
                                style={{ width: "100%" }}
                                type="password"
                                {...register("OldPassword", {
                                  required: true,
                                })}
                                className="form-control"
                                placeholder="Old Password"
                              />
                            </div>
                            <div className="form-group">
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                New Password
                              </label>
                              <input
                                style={{ width: "100%" }}
                                type="password"
                                {...register("NewPassword", {
                                  required: true,
                                  minLength: 3,
                                })}
                                className="form-control"
                                placeholder="New Password"
                              />

                              {errors.NewPassword &&
                                errors.NewPassword?.type === "required" && (
                                  <div className="text-danger required">
                                    NewPassword is required
                                  </div>
                                )}
                              {errors.NewPassword &&
                                errors.NewPassword?.type === "minLength" && (
                                  <div className="text-danger required">
                                    NewPassword must be 3 characters
                                  </div>
                                )}
                            </div>
                            <div className="form-group">
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                Confirm Password
                              </label>
                              <input
                                style={{ width: "100%" }}
                                type="password"
                                {...register("ConfirmPassword", {
                                  required: true,
                                  minLength: 3,
                                })}
                                className="form-control"
                                placeholder="Confirm Password"
                              />

                              {errors.ConfirmPassword &&
                                errors.ConfirmPassword?.type === "required" && (
                                  <div className="text-danger required">
                                    ConfirmPassword is required
                                  </div>
                                )}
                              {errors.ConfirmPassword &&
                                errors.ConfirmPassword?.type ===
                                  "minLength" && (
                                  <div className="text-danger required">
                                    ConfirmPassword must be 3 characters
                                  </div>
                                )}
                            </div>
                            <div className="btn-wrapper">
                              <button
                                type="submit"
                                className="btn-submit w-50"
                                style={{
                                  borderRadius: "5px",
                                  fontWeight: "500",
                                }}
                              >
                                Save Changes
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
