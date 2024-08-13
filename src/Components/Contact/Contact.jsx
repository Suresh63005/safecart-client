import React from "react";
import "./Contact.css";
import Header from "../Header";
import FooterBottom from "../../FooterBottom";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Contact = () => {
  return (
    <div className="contact-main-div">
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
                <h2 className="breadcrumb-title">Contact</h2>
                <ul
                  className="breadcrumb-list"
                  style={{ marginTop: "10px", marginRight: "20px" }}
                >
                  <li
                    style={{ listStyle: "none", color: "black" }}
                    className="breadcrumb-list"
                  >
                    <a style={{ color: "black", fontSize: "20px" }} href="">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="contact-us-area-wrapper">
          <div className="container">
            <div className="row g-4 gx-5">
              <div className="col-md-5 col-lg-4">
                <div className="address-wrapper">
                  <div className="title-section">
                    <h4 className="title">Contact with us</h4>
                  </div>
                  <ul
                    class="address-list"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <li class="single-address-item">
                      <div class="icon-box">
                        <CallOutlinedIcon />
                      </div>
                      <div class="content">
                        <h5 class="title">Call us:</h5>
                        <p class="info">+012 789654321</p>
                      </div>
                    </li>
                    <li class="single-address-item">
                      <div class="icon-box">
                        <EmailOutlinedIcon />
                      </div>
                      <div class="content">
                        <h5 class="title">Email us:</h5>
                        <p class="info">company@mail.com</p>
                      </div>
                    </li>
                    <li class="single-address-item">
                      <div class="icon-box">
                        <QueryBuilderOutlinedIcon />
                      </div>
                      <div class="content">
                        <h5 class="title">Service Hour:</h5>
                        <p class="info">10.00 am - 08.00 pm</p>
                      </div>
                    </li>
                    <li class="single-address-item">
                      <div class="icon-box">
                        <LocationOnOutlinedIcon />
                      </div>
                      <div class="content">
                        <h5 class="title">Address:</h5>
                        <p class="info">
                          2779 Rubaiyat Road,Traverse City, MI 49684
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 col-lg-8">
                <div className="get-in-touch-wrapper">
                  <h3 className="title">Get in touch</h3>
                  <div className="w-100"> </div>
                  <form
                    class="custom-form-builder-form "
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <input type="hidden" name="custom_form_id" value="1" />
                    <div class="error-message"></div>
                    <div class="form-group">
                      <label style={{ fontWeight: "500" }} for="name">
                        Your Name
                      </label>{" "}
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                        placeholder="Your Name"
                        required="required"
                      />
                    </div>{" "}
                    <div class="form-group">
                      {" "}
                      <label style={{ fontWeight: "500" }} for="your-mail">
                        Your Email
                      </label>{" "}
                      <input
                        type="email"
                        id="your-mail"
                        name="your-mail"
                        class="form-control"
                        placeholder="Your Email"
                        required="required"
                      />
                    </div>{" "}
                    <div class="form-group">
                      <label style={{ fontWeight: "500" }} for="your-subject">
                        Your Subject
                      </label>{" "}
                      <input
                        type="text"
                        id="your-subject"
                        name="your-subject"
                        class="form-control"
                        placeholder="Your Subject"
                      />
                    </div>{" "}
                    <div class="form-group textarea">
                      <label style={{ fontWeight: "500" }} for="your-message">
                        Your Message
                      </label>{" "}
                      <textarea
                        name="your-message"
                        id="your-message"
                        cols={28}
                        rows={5}
                        class="form-control "
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        style={{
                          marginTop: "20px",
                          fontSize: "18px",
                          fontWeight: "500",
                        }}
                        class="btn-submit btn-sm default-btn btn-default"
                      >
                        Submit
                      </button>
                      <div class="ajax-loading-wrap hide">
                        <div class="sk-fading-circle">
                          <div class="sk-circle1 sk-circle"></div>
                          <div class="sk-circle2 sk-circle"></div>
                          <div class="sk-circle3 sk-circle"></div>
                          <div class="sk-circle4 sk-circle"></div>
                          <div class="sk-circle5 sk-circle"></div>
                          <div class="sk-circle6 sk-circle"></div>
                          <div class="sk-circle7 sk-circle"></div>
                          <div class="sk-circle8 sk-circle"></div>
                          <div class="sk-circle9 sk-circle"></div>
                          <div class="sk-circle10 sk-circle"></div>
                          <div class="sk-circle11 sk-circle"></div>
                          <div class="sk-circle12 sk-circle"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15225.714626787256!2d78.43432064679601!3d17.439185735306857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c55bb43183%3A0x1abc135b23ee2703!2sAmeerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1714808606570!5m2!1sen!2sin"
          style={{
            height: "500px",
            width: "100%",
            marginTop: "15px",
            borderRadius: "8px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
