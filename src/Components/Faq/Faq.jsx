import React from "react";
import "./Faq.css";
import Header from "../Header";
import FooterBottom from "../../FooterBottom";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

const Faq = () => {
  return (
    <div className="faq-main-div">
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
                <h2 className="breadcrumb-title">FAQ</h2>
                <ul
                  className="breadcrumb-list"
                  style={{ marginTop: "10px", marginRight: "20px" }}
                >
                  <li
                    style={{ listStyle: "none", color: "black" }}
                    className="breadcrumb-list"
                  >
                    <a
                      style={{
                        color: "black",
                        fontSize: "20px",
                        marginLeft: "15px",
                        fontSize: "18px",
                      }}
                      href=""
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-area-wrapper padding-top-100 padding-bottom-100">
        <div className="container container_720">
          <div className="row g-4 gx-5">
            <div className="col-md-12 col-lg-6">
              <div className="faq-accordion">
                <div
                  className="accordion"
                  style={{ width: "100%" }}
                  id="faq_accordion"
                >
                  <div className="card">
                    <div className="card-header card-active" id="heading1">
                      <h5 className="mb-0">
                        <a
                          className="accordion-btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          Dashwood marianne in of entrance be on wondered
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse1"
                      className="collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="card-body">
                        <p className="info">
                          Not attention say frankness intention out dashwoods
                          now curiosity. Stronger ecstatic as no judgment
                          daughter speedily thoughts. Worse downs nor might she
                          court did nay forth these.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading2">
                      <h5 className="mb-0">
                        <a
                          className="accordion-btn btn-link collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          Wondered sociable he carriage in speedily
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse2"
                      className="collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="card-body">
                        <p className="info">
                          Not attention say frankness intention out dashwoods
                          now curiosity. Stronger ecstatic as no judgment
                          daughter speedily thoughts. Worse downs nor might she
                          court did nay forth these.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading3">
                      <h5 className="mb-0">
                        <a
                          className="accordion-btn btn-link  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          Not attention say frankness intention out dashwoods
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse3"
                      className="collapse "
                      aria-labelledby="heading3"
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="card-body">
                        <p className="info">
                          Not attention say frankness intention out dashwoods
                          now curiosity. Stronger ecstatic as no judgment
                          daughter speedily thoughts. Worse downs nor might she
                          court did nay forth these.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading4">
                      <h5 className="mb-0">
                        <a
                          className="accordion-btn btn-link  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          Stronger ecstatic as no judgment daughter speedily
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse4"
                      className="collapse "
                      aria-labelledby="heading4"
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="card-body">
                        <p className="info">
                          Not attention say frankness intention out dashwoods
                          now curiosity. Stronger ecstatic as no judgment
                          daughter speedily thoughts. Worse downs nor might she
                          court did nay forth these.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="heading5">
                      <h5 className="mb-0">
                        <a
                          className="accordion-btn btn-link  collapsed "
                          data-bs-toggle="collapse"
                          data-bs-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Worse downs nor might she court did nay forth
                        </a>
                      </h5>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse "
                      aria-labelledby="heading5"
                      data-bs-parent="#faq_accordion"
                    >
                      <div className="card-body">
                        <p className="info">
                          Not attention say frankness intention out dashwoods
                          now curiosity. Stronger ecstatic as no judgment
                          daughter speedily thoughts. Worse downs nor might she
                          court did nay forth these.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="faq-form-wrapper">
                <h3 className="faq-form-title">Have Questions?</h3>
                <div className="faq_container mt-4">
                  <form
                    action=""
                    method="post"
                    id="custom_form_builder_c9zsYYFccV"
                    className="custom-form-builder-form logistic-quote-form"
                    enctype="multipart/form-data"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="2eU0WTTpqlnsEeV7N8l1Kq9dUU2ra720G5OzFCYh"
                    />
                    <input type="hidden" name="custom_form_id" value="2" />
                    <div className="error-message"></div>
                    <div className="form-group">
                      <label for="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>{" "}
                    <div className="form-group">
                      <label for="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>{" "}
                    <div className="form-group textarea">
                      <label for="message">Your Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="5"
                        className="form-control text"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-submit btn-sm default-btn logistics-btn"
                      >
                        Submit
                      </button>
                      <div className="ajax-loading-wrap hide"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
