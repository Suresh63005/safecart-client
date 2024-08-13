import React from "react";
import "./BannerProducts.css";

const BannerProducts = () => {
  return (
    <div>
      <div className="banner_area padding-top-20 padding-bottom">
        <div className="container container_1608">
          <div className="row g-4">
            <div className="col-xxl-4">
              <div className="banner_height">
                <div className="row g-4">
                  <div className="col-xxl-12 col-lg-6">
                    <div className="banner_card bg_blue radius-5">
                      <div className="banner_card_flex">
                        <div
                          className="row"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingBottom: "26px",
                          }}
                        >
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="banner_card_contents">
                              <span className="banner_card_subtitle mb-2">
                                NOVEMBERS GADGET MADNESS
                              </span>
                              <h2 className="banner_card_title">20% OFF</h2>
                              <div className="btn_wrapper mt-4">
                                <a
                                  href="campaign/flash-sale"
                                  className="cmn_btn btn_bg_yellow radius-30 getOffer"
                                >
                                  GET Offer
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="banner_card_thumb">
                              <img
                                alt=""
                                src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card1-654756d8c47281699174142.webp"
                                className=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-12 col-lg-6">
                    <div className="banner_card bg_yellow text-center radius-5">
                      <div className="banner_card_contents">
                        <span className="banner_card_subtitle mb-2">
                          HOME APPLIANCES
                        </span>
                        <h2 className="banner_card_title">
                          CYBER MONDAY SPECIAL
                        </h2>
                      </div>
                      <div className="banner_card_thumb">
                        <img
                          alt=""
                          src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card2-654756d7f21061699174143.webp"
                          className=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8">
              <div className="banner_slider bg_blue banner_height radius-5">
                <div className="banner_slider_waveShape">
                  <img
                    src="https://safecart.bytesed.com/assets/frontend/img/banner/banner_waves.png"
                    alt="banner_waves"
                  />
                </div>
                <div className="banner_wrap">
                  <div className="row">
                    <div className=" col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="banner_contents">
                        <span className="banner_contents_subtitle mb-3">
                          WINTER 2024 Offer
                        </span>
                        <h2 className="banner_contents_title">
                          Grab the best fashion deals in this winter
                        </h2>
                        <div className="btn_wrapper mt-5 mt-lg-5">
                          <a
                            href="campaign/flash-sale"
                            className="cmn_btn btn_bg_black radius-30"
                            tabindex="-1"
                          >
                            Get Deals
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="banner_wrap_thumb">
                        <img
                          style={{ marginLeft: "43px" }}
                          alt=""
                          src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-man-654756d877ca21699174142.webp"
                          className=""
                        />
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

export default BannerProducts;
