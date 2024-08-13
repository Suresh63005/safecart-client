import React from "react";
import "./AllProducts.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AllProducts = () => {
  return (
    <div className="allProduct_area padding-top-50 padding-bottom-50">
      <div className="container container_1608">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-left section_borderBottom">
              <div className="allProduct_tab">
                <ul className="tabs tabs_two">
                  <li
                    data-tab-two="top_rated"
                    class="vendor_search_tab tabs_list_two"
                  >
                    Top Rated
                  </li>
                  <li
                    data-tab-two="top_selling"
                    class="vendor_search_tab tabs_list_two"
                  >
                    Top Selling
                  </li>
                  <li
                    data-tab-two="weekly_top"
                    class="vendor_search_tab tabs_list_two"
                  >
                    Weekly Top
                  </li>
                </ul>
              </div>
              <div className="btn_wrapper">
                <a class="viewAll_btn">
                  View All
                  <ChevronRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="all_vendor_list">
          <div className="row g-4 mt-4">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/whatsapp-image-2023-12-19-at-95933-pm1703077555.jpeg"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/img-20240123-1934421708323899.jpg"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>ONE PIECE FASHION LTD</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="	https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-2-65477806930d91699186278.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-5-65477606a93aa1699186270.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Laura Gislason</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-3-654778084c75c1699186279.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-7-654776074d9541699186272.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Chance Jakubowski</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-4-654777ff7fa771699186280.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-8-65477607defff1699186272.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Mr. Waldo Bins</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="	https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-5-65477800521181699186281.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="	https://safecart.bytesed.com/assets/uploads/media-uploader/logo-65477608023bd1699186273.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Peter Abshire Sr.</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="allProduct_item radius-10 bg-white">
                <div className="allProduct_item_thumb">
                  <a>
                    <img
                      alt=""
                      src="https://safecart.bytesed.com/assets/uploads/media-uploader/imgae-8-65477803d781e1699186282.webp"
                    />
                  </a>
                </div>
                <div className="allProduct_item_contents">
                  <div className="allProduct_item_brand overflow-hidden">
                    <a>
                      <img
                        alt=""
                        src="https://safecart.bytesed.com/assets/uploads/media-uploader/logo-3-65477606119721699186274.webp"
                      />
                    </a>
                  </div>
                  <h4 className="allProduct_item_title mt-2">
                    <a>Wilhelmine Schuster</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
