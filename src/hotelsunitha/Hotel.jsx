import React from "react";
import "./Hotel.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Hotel = () => {
  return (
    <div className="hotel container">
      <div className="hotelcomfirmmsg">
        <div className="hotelcomfirmmsg1">
          <h3>Your Hotel Reservation </h3>{" "}
          <span className="confirmed">Confirmed</span>
        </div>
        <p className="hotelcomfirmmsg2">
          Contact EasySet24 If You Need To Change In Basics Information With
          1385 Booking Number
        </p>
      </div>

      <div className="comfirmdetails">
        <div className="row">
          <div className="comfirmimg col-12">
            {/* <img src={require("../assets/beach.png")} alt="img" /> */}
           <div className="bookingnoinfo">
           <div className="bookingNumber">
            Booking No. 1385 Details 
            <p>Check Your Information Here !</p>
           </div>
           <div className="bookingNumber">
            Hotel Roles
            <div className="checkouttimings"><p>Check-In At 14:00 Every Day  </p>
            <p>Check-In At 14:00 Every Day  </p>
            </div>
           </div>
           </div>
            <br/>
          </div>
        </div>
        <ul className="comfirmdetailscontent">
          <li className="list">
            <div className="comfirmdetailscontent-head">Stays</div>
            <div className="comfirmdetailscontent-body">5 Nights</div>
          </li>
          <li className="list">
            <div className="comfirmdetailscontent-head">
              <CalendarMonthIcon /> Check-In
            </div>
            <div className="comfirmdetailscontent-body">25 Jan 2024</div>
          </li>
          <li className="list">
            <div className="comfirmdetailscontent-head">
              <CalendarMonthIcon /> Check-Out
            </div>
            <div className="comfirmdetailscontent-body">30 Jan 2024</div>
          </li>
          <li className="list">
            <div className="comfirmdetailscontent-head">Quantity</div>
            <div className="comfirmdetailscontent-body">2 Rooms</div>
          </li>
          <li className="list">
            <div className="comfirmdetailscontent-head">Room Type</div>
            <div className="comfirmdetailscontent-body">Double</div>
          </li>
          <li className="list">
            <div className="comfirmdetailscontent-head">Bed Type</div>
            <div className="comfirmdetailscontent-body">Two Twin</div>
          </li>
        </ul>

        <div className="hotelmembersinfo">
          <div className="adultschild">
            Adults <span>2</span>, Children <span>3</span>, Infant{" "}
            <span>0</span>
          </div>
          <div className="adultschild">
            Additional Services Quantity <span>None</span>
          </div>
          <div className="adultschild">
            Meal Plan <span>Spanish</span>
          </div>
        </div>
      </div>

      <div className="cancelationpolicy">
        <div className="cancelationpolicy-head">
          Cancelation Policy
        </div>
         <p> Pay Attention <br/><br/>
         This Booking Represents The Conclusive Steps In the Hotel Reservation Process. It is COnceidered FInal and May Only Be Cancelled By The Hotel In The Event Of Unforeseen Circumstances Or Natural Disasters.
         </p>

      </div>
    </div>
  );
};

export default Hotel;
