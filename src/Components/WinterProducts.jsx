import React from "react";
import "./WinterProducts.css";

const WinterProducts = () => {
  return (
    <div className="winterProducts_area padding-top-50 padding-bottom-50">
      <div className="container container_1608">
        <div className="row g-4">
          <div className="col-xl-7">
            <div className="winterProduct radius-10 winter_bg1">
              <div className="row align-items-end">
                <div className="col-md-6">
                  <div className="winterProduct_contents">
                    <div className="winterProduct_subtitle">
                      <h2 className="winterProduct_title">winter</h2>
                      ON the Door
                    </div>
                    <div class="winterProduct_list mt-4">
                      <span className="winterProduct_list_item">Skin Care</span>
                      <span className="winterProduct_list_item">
                        Fashion Wear
                      </span>
                      <span className="winterProduct_list_item">
                        Electronic Items
                      </span>
                      <span className="winterProduct_list_item">Furniture</span>
                    </div>
                    <div className="btn_wrapper mt-5">
                      <a class="cmn_btn btn_bg_3 radius-5">Get Offers</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="winterProduct_thumb">
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/winter1-65475b51a5c6c1699175279.webp"
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="winterProducts">
              <div className="row g-4">
                <div className="col-xl-12 col-md-6">
                  <div className="winterProduct_single radius-10 winter_bg2">
                    <div className="row align-items-center flex-row-reverse">
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="winterProduct_single_contents text-center">
                          <h3 className="winterProduct_single_contents_title">
                            Enjoy your texas style winter fashion 2023
                          </h3>
                          <div class="btn_wrapper mt-4">
                            <a
                              href="campaign/flash-sale"
                              class="cmn_btn btn_bg_2 radius-5"
                            >
                              View Products
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div
                          className="winterProduct_single_thumb bg_image"
                          style={{
                            background:
                              "url(https://safecart.bytesed.com/assets/uploads/media-uploader/winter-text-65475b50756da1699175280.webp)",
                          }}
                        >
                          <img
                            alt=""
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/winter2-65475b51452b01699175279.webp"
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-12 col-md-6">
                  <div className="winterProduct_single radius-10 winter_bg3">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="winterProduct_single_contents text-center">
                          <h3 className="winterProduct_single_contents_title">
                            NAILS CARE? GET YOUR WINTER KIT NOW
                          </h3>
                          <div className="btn_wrapper mt-4">
                            <a className="cmn_btn btn_bg_black radius-5">
                              View product
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-6">
                        <div className="winterProduct_single_thumb">
                          <img
                            alt=""
                            src="https://safecart.bytesed.com/assets/uploads/media-uploader/winter3-65475b5085a8b1699175280.webp"
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
    </div>
  );
};

export default WinterProducts;
