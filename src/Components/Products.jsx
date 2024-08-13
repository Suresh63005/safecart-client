import React from "react";
import "./Products.css";
const Products = () => {
  return (
    <div className="main">
      <div className="banner_area ">
        <div className="container bg-light">
          <div className="row g-4">
            <div className="col-xxl-4">
              <div className="banner-height">
                <div className="row g-4">
                  <div className="col-xxl-12 col-lg-6">
                    <div className="card bg_blue radius-5 padding-20">
                      <div className="banner-card-flex">
                        <div className="banner-card-contents">
                          <span className="banner-card-subtitle mb-2">
                            NOVEMBERS GADGET MADNESS
                          </span>
                          <h2 className="banner-card-titile">20% OFF</h2>
                          <div className="btn mt-4">
                            <a href="#" className="btn btn_bg_yellow radius-30">
                              GET OFFER
                            </a>
                          </div>
                        </div>
                        <div className="banner_card_tumb">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card1-654756d8c47281699174142.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-12 col-lg-6">
                    <div className="card bg_yellow radius-5 padding-20">
                      <div className="banner-card-flex">
                        <div className="banner-card-contents">
                          <span className="banner-card-subtitle mb-2">
                            NOVEMBERS GADGET MADNESS
                          </span>
                          <h2 className="banner-card-titile">20% OFF</h2>
                        </div>
                        <div className="banner_card_tumb">
                          <img
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-card1-654756d8c47281699174142.webp"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8">
              <div className="banner_slider bg_blue banner_height radius-5">
                <div class="banner__slider__waveShape">
                  <img
                    src="https://safecart.bytesed.com/assets/frontend/img/banner/banner_waves.png"
                    alt="banner_waves"
                  />
                </div>
                <div class="banner__wrap">
                  <div class="banner__contents">
                    <span class="banner__contents__subtitle mb-3">
                      WINTER 2024 Offer
                    </span>
                    <h2 class="banner__contents__title">
                      Grab the best fashion deals in this winter
                    </h2>
                    <div class="btn_wrapper mt-5 ">
                      <a
                        href="campaign/flash-sale"
                        class="cmn_btn btn_bg_black radius-30"
                        tabindex="-1"
                      >
                        Get Deals
                      </a>
                    </div>
                  </div>
                  <div class="banner__wrap__thumb">
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/banner-man-654756d877ca21699174142.webp"
                      class=""
                    />
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

export default Products;
