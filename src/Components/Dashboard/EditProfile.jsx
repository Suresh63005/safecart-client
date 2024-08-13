import React, { useContext } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { useForm } from "react-hook-form";
import { UserContext } from "../../Services/CreateContext";
import axios from "axios";

const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useContext(UserContext);

  async function saveData(data) {
    if (user.length != 0) {
      let formData = new FormData();

      formData.append("Name", data.Name);
      formData.append("UserName", data.UserName);
      formData.append("Email", data.Email);
      formData.append("Country", data.Country);
      formData.append("UserId", user.UserId);

      const options = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      try {
        const res = await axios.post(
          `http://localhost:5000/updateuserdetails`,
          formData,
          options
        );
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className="editprofile-main-div">
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
                          <a
                            style={{ color: "#006045", fontWeight: "700" }}
                            class="nav-link"
                            href="/dashboard/edit-profile"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="/dashboard/change-password">
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
                        <h4 className="single-title">Edit Profile</h4>
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
                                Name
                              </label>
                              <input
                                style={{ width: "100%" }}
                                type="text"
                                defaultValue={user.Name}
                                {...register("Name", {
                                  required: true,
                                  minLength: 3,
                                })}
                                className="form-control"
                                placeholder="Name"
                              />
                              {errors.Name &&
                                errors.Name?.type === "required" && (
                                  <div className="text-danger required">
                                    name is required
                                  </div>
                                )}
                              {errors.Name &&
                                errors.Name?.type === "minLength" && (
                                  <div className="text-danger required">
                                    Name must be 3 characters
                                  </div>
                                )}
                            </div>
                            <div className="form-group">
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                User Name
                              </label>
                              <input
                                style={{ width: "100%" }}
                                type="text"
                                {...register("UserName", {
                                  required: true,
                                  minLength: 5,
                                })}
                                defaultValue={user.UserName}
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
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                Email
                              </label>
                              <input
                                style={{ width: "100%" }}
                                defaultValue={user.Email}
                                type="email"
                                {...register("Email", { required: true })}
                                className="form-control"
                                placeholder="Email"
                              />
                              {errors.Email &&
                                errors.Email?.type === "required" && (
                                  <div className="text-danger required">
                                    Email is required
                                  </div>
                                )}
                            </div>
                            <div className="form-group">
                              <label style={{ marginBottom: "10px" }}>
                                {" "}
                                Select Country
                              </label>
                              <select
                                id="country"
                                className="form-control"
                                value={user.Country}
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

                            <div className="btn-wrapper">
                              <button
                                style={{ borderRadius: "5px" }}
                                type="submit"
                                className="btn-submit w-50"
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

export default EditProfile;
