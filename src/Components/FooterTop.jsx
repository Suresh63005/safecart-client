import React, { useContext } from "react";
import "./FooterTop.css";
import { UserContext } from "../Services/CreateContext";

const FooterTop = () => {
  const userdetails = useContext(UserContext);
  return (
    <div className="counter_area counter_shadow padding-top-50 padding-bottom-50 margin-top-50">
      <div className="container container_1608">
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <div className="counter_item text-center">
              <div class="counter_item_icon">
                <img
                  alt=""
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon1699176811.svg"
                  className=""
                />
              </div>
              <div class="counter_item_contents mt-3">
                <h3 class="counter_item_title">1,900+ Vendors</h3>
                <p class="counter_item_para mt-2">
                  1,900 Vendors are working with us around the US
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="counter_item text-center">
              <div class="counter_item_icon">
                <img
                  alt=""
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-21699176810.svg"
                  className=""
                />
              </div>
              <div class="counter_item_contents mt-3">
                <h3 class="counter_item_title">9,102+ Customers</h3>
                <p class="counter_item_para mt-2">
                  9,102+ customers are making retained purcheses every now &
                  then
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="counter_item text-center">
              <div class="counter_item_icon">
                <img
                  alt=""
                  src="https://safecart.bytesed.com/assets/uploads/media-uploader/svg/icon-11699176810.svg"
                  className=""
                />
              </div>
              <div class="counter_item_contents mt-3">
                <h3 class="counter_item_title">12 Awards</h3>
                <p class="counter_item_para mt-2">
                  We won 12 awards for excellency in customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
