import React, { useContext } from "react";
import "./Dashboard.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { UserContext } from "../../Services/CreateContext";
const Dashboard = () => {
  const user = useContext(UserContext);
  return (
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

                  <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
                        <a
                          style={{ color: "#006045", fontWeight: "700" }}
                          class="nav-link"
                          href="/dashboard"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/dashboard/edit-profile">
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
                        <a class="nav-link" e>
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
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="user-dashboard-card style-01 ">
                      <div className="icon">
                        <CalendarMonthOutlinedIcon />
                      </div>
                      <div className="content">
                        <h4 className="title">Total Orders</h4>
                        <span className="number">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="user-dashboard-card style-01 ">
                      <div className="icon">
                        <CalendarMonthOutlinedIcon />
                      </div>
                      <div className="content">
                        <h4 className="title">Support Tickets</h4>
                        <span className="number">0</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="dashboradtable">
                      <table class="table table-bordered">
                        <thead className="table-secondary">
                          <tr>
                            <th scope="col">Order</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Amount</th>
                            <th scope="col">action dashboardaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ width: "100px" }}>
                              {" "}
                              <div className="add">
                                <div>#36</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div className="action dashboardaction">
                                {" "}
                                May 21,2024
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div
                                className="action dashboardaction"
                                style={{
                                  color: "#fff ",
                                  background: "rgba(255, 193, 7,1)",
                                  padding: "1px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                Pending
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                $ 1113.00
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                <button className="btn bg-dark dashboardactionbtn">
                                  {" "}
                                  View details
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "100px" }}>
                              {" "}
                              <div className="add">
                                <div>#36</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div className="action dashboardaction">
                                {" "}
                                May 21,2024
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div
                                className="action dashboardaction"
                                style={{
                                  color: "#fff ",
                                  background: "rgba(255, 193, 7,1)",
                                  padding: "1px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                Pending
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                $ 1113.00
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                <button className="btn bg-dark dashboardactionbtn">
                                  {" "}
                                  View details
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "100px" }}>
                              {" "}
                              <div className="add">
                                <div>#36</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div className="action dashboardaction">
                                {" "}
                                May 21,2024
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div
                                className="action dashboardaction"
                                style={{
                                  color: "#fff ",
                                  background: "rgba(255, 193, 7,1)",
                                  padding: "1px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                Pending
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                $ 1113.00
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                <button className="btn bg-dark dashboardactionbtn">
                                  {" "}
                                  View details
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "100px" }}>
                              {" "}
                              <div className="add">
                                <div>#36</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div className="action dashboardaction">
                                {" "}
                                May 21,2024
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div
                                className="action dashboardaction"
                                style={{
                                  color: "#fff ",
                                  background: "rgba(255, 193, 7,1)",
                                  padding: "1px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                Pending
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                $ 1113.00
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                <button
                                  className="btn bg-dark dashboardactionbtn"
                                  style={{ color: "white" }}
                                >
                                  {" "}
                                  View details
                                </button>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: "100px" }}>
                              {" "}
                              <div className="add">
                                <div>#36</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div className="action dashboardaction">
                                {" "}
                                May 21,2024
                              </div>
                            </td>
                            <td>
                              {" "}
                              <div
                                className="action dashboardaction"
                                style={{
                                  color: "#fff ",
                                  background: "rgba(255, 193, 7,1)",
                                  padding: "1px",
                                  fontSize: "15px",
                                  borderRadius: "10px",
                                }}
                              >
                                Pending
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                $ 1113.00
                              </div>
                            </td>
                            <td>
                              <div className="action dashboardaction">
                                <button className="btn bg-dark dashboardactionbtn">
                                  {" "}
                                  View details
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Dashboard;
