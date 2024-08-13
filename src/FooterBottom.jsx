import React from "react";
import "./FooterBottom.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const FooterBottom = () => {
  return (
    <footer
      data-footer-variant="2"
      className="footer-area white-color footer-four homeFour-bg"
    >
      <div className="container container_1608">
        <div className="footer-top-contents footer-top-border padding-top-55 padding-bottom-80">
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget">
                <div className="footer-inner mt-4">
                  <h6 className="widget-title logo-style-one footer-logo-wrapper d-none">
                    <img
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo1698825016.webp"
                      className="footer-logo"
                      alt=""
                    />
                  </h6>
                  <h6 className="widget-title logo-style-two footer-logo-wrapper">
                    <img
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/image-3601699785184.png"
                      className="footer-logo"
                      alt=""
                    />
                  </h6>
                  <p className="widget-para mt-4">
                    The best multi-vendor ecommerce website for you. You can
                    easily buy your product according to your choice.
                  </p>
                  <ul className="footer-social-list mt-4">
                    <li className="lists">
                      <a href="https://twitter.com/xgenious1">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li className="lists">
                      <a href="https://www.facebook.com/xgenious">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li className="lists">
                      <a href="lorem">
                        <AccessibleForwardIcon />
                      </a>
                    </li>
                    <li className="lists">
                      <a href="#">
                        <InstagramIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footerWidget widget">
                <h6 className="widget-title">Helpful Links</h6>
                <div className="footer-lnner mt-4">
                  <ul className="footer-link-list">
                    <li>
                      <a>Home</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                    <li>
                      <a>Contact</a>
                    </li>
                    <li>
                      <a>Shop Page</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footerWidget widget">
                <h6 className="widget-title">Store Info</h6>
                <div className="footer-lnner mt-4">
                  <ul className="footer-link-address">
                    <li>
                      <span className="address">
                        <a href="#1">
                          <LocationOnIcon />
                          Dhaka, Bangladesh
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="address">
                        <a href="#1">
                          <PhoneIphoneIcon />
                          0113213131322
                        </a>
                      </span>
                    </li>
                    <li>
                      <span className="address">
                        <a href="#1">
                          <EmailIcon />
                          support@safecart.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget footerWidget widget">
                <h6 className="widget-title">GET IN TOUCH</h6>
                <div className="footer-lnner mt-4">
                  <p className="info">Sign up to our mailing list now!</p>
                  <div className="subscribe-form">
                    <form method="POST">
                      <div className="form-message-show"></div>
                      <div className="widget-form-single">
                        <input
                          type="hidden"
                          name="_token"
                          value="59n2fCyn356ncPErn4WHJQt2umT6sVwnhLBpLt8K"
                        />
                        <input
                          type="email"
                          name="email"
                          className="form--control"
                          placeholder="Your mail here"
                        />
                        <button type="submit">
                          <SendIcon />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area copyright-border">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="copyright-contents">
                <span>
                  © 2024 All right reserved by
                  <a>Bytesed MN </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
