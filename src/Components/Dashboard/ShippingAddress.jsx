import React, { useContext, useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { UserContext } from "../../Services/CreateContext";
import axios from "axios";
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  const [addressdetails, setAddressdetails] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    async function fetchAddress() {
      if (user && user.UserId) {
        try {
          const res = await axios.get(
            "http://localhost:5000/adressdetails/" + user.UserId
          );
          setAddressdetails(res.data);
        } catch (error) {
          console.error("Error fetching address details:", error);
        }
      }
    }
    fetchAddress();
  }, [user.UserId]);

  async function Addressdelete(ProductId) {
    if (ProductId > 0) {
      let formData = new FormData();
      formData.append("ProductID", ProductId);

      let options = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      let res = await axios.post(
        "http://localhost:5000/addressdelete",
        formData,
        options
      );
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="dashboard-main-div">
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
                    className="navbar dashboardmenu navbar-expand-lg navbar-light bg-light"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      float: "left",
                    }}
                  >
                    <div
                      className="navbar-toggler"
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
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul
                        className="navbar-nav dashboard-menu-items"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <li className="nav-item active">
                          <a className="nav-link" href="#">
                            <AccountCircleOutlinedIcon /> Suresh
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            style={{ color: "#006045", fontWeight: "700" }}
                            className="nav-link"
                            href="/dashboard"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/dashboard/edit-profile"
                          >
                            Edit Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/dashboard/change-password"
                          >
                            Change Password
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            My Orders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Chat List
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Refund Request
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Wallet history
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Shipping Address
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Support Ticket
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="dashboradtable">
                        <h5 style={{ marginBottom: "20px" }}>
                          Shipping Address
                        </h5>
                        {addressdetails.length > 0 ? (
                          <table className="table table-bordered">
                            <thead className="table-secondary">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Country</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {addressdetails.map((item) => (
                                <tr key={item.AddressId}>
                                  <td style={{ width: "100px" }}>
                                    <div className="add">
                                      <div>{item.AddressId}</div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action dashboardaction">
                                      {item.FullName}
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="action dashboardaction"
                                      style={{
                                        padding: "1px",
                                        fontSize: "15px",
                                        borderRadius: "10px",
                                      }}
                                    >
                                      {item.Address}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action dashboardaction">
                                      {item.Country}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action dashboardaction">
                                      {item.State}
                                    </div>
                                  </td>
                                  <td>
                                    <div className="action dashboardaction">
                                      <button
                                        onClick={() => {
                                          Addressdelete(item.AddressId);
                                        }}
                                        className="btn bg-dark dashboardactionbtn"
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ) : (
                          <div>No address details found.</div>
                        )}
                      </div>
                    </div>
                    <div style={{ marginLeft: "10px" }} className="checkoutbtn">
                      <Link style={{ color: "white" }} to="/address">
                        + New Address
                      </Link>
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

export default ShippingAddress;
