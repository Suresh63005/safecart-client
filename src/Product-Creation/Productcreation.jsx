import React, { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Services/CreateContext";
import { updateData } from "../Services/Context.service";

const Productcreation = () => {
  const { ProductId } = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [propimage, setPropimg] = useState();
  const [btnText, setBtnText] = useState("Add Product");
  const [productdetails, setProductdetails] = useState({});

  const navigate = useNavigate();
  const seller = useContext(UserContext);

  function loadImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
      setPropimg(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  async function saveData(data) {
    let formData = new FormData();
    formData.append("ProductId", ProductId);
    formData.append("Productname", data.productname);
    formData.append("Price", data.price);
    formData.append("Oldprice", data.oldprice);
    formData.append("Discount", data.discount);
    formData.append("ProductImage", propimage);
    formData.append("Catergory", data.catergory);
    formData.append("SellerId", seller.Sellerid);

    let options = {
      headers: {
        "content-type": "multipart/form-data",
      },
      body: formData,
    };
    let res = await axios.post(
      "http://localhost:5000/postproduct",
      formData,
      options
    );
    navigate("/homepage1");
  }

  useEffect(() => {
    updataData();
  }, []);

  const updataData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/getshoppageproducts/" + ProductId
      );
      let data = response.data[0];
      setPropimg(data.ProductImage);
      setProductdetails(data);

      setBtnText("Update Property");
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
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
                <h2 className="breadcrumb-title">Product Register</h2>
                <br />
                <h5>Home | Register </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vendor-signin-area" style={{ marginTop: "50px" }}>
        <div className="container container-one" style={{ maxWidth: "600px" }}>
          <div className="vendor-sigin-wrapper">
            <form
              onSubmit={handleSubmit((data) => {
                saveData(data);
              })}
            >
              <div className="vendor-sigin-wrapper-inner">
                <h5 className="welcome-title ">Welcome Back!</h5>
                <h2 className="main-title "></h2>
                <div className="dashboard-form mt-4">
                  <div className="username">
                    <label className="form-label">Product Name</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={productdetails.ProductName}
                      {...register("productname", { required: true })}
                      placeholder="Product Name"
                    />
                    {errors.ownername &&
                      errors.productname?.type === "required" && (
                        <div productname="text-danger required">
                          Product Name is required
                        </div>
                      )}
                  </div>
                  <div className="username">
                    <label className="form-label">Enter Price</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register("price", { required: true })}
                      defaultValue={productdetails.Price}
                      placeholder="Price"
                    />
                    {errors.price && errors.price?.type === "required" && (
                      <div className="text-danger required">
                        Price is required
                      </div>
                    )}
                  </div>
                  <div className="username">
                    <label className="form-label"> Enter Old Price</label>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={productdetails.OldPrice}
                      {...register("oldprice", { required: true })}
                      placeholder="Enter oldprice"
                    />
                    {errors.oldprice &&
                      errors.oldprice?.type === "required" && (
                        <div className="text-danger required">
                          oldprice is required
                        </div>
                      )}
                  </div>
                  <div className="username">
                    <label className="form-label">Discount</label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue={productdetails.Discount}
                      {...register("discount", { required: true })}
                      placeholder="Discount"
                    />
                    {errors.discount &&
                      errors.discount?.type === "required" && (
                        <div className="text-danger required">
                          Discount is required
                        </div>
                      )}
                  </div>

                  <div className="username">
                    <input
                      type="file"
                      className="form-control"
                      {...register("productimg")}
                      placeholder="Add Photoes"
                      onChange={(event) => {
                        loadImage(event);
                      }}
                      style={{ marginBottom: "5px" }}
                    />
                    <img style={{ width: "200px" }} src={propimage} alt="" />
                  </div>
                  <div className="username">
                    <label className="form-label">Select Category</label>
                    <select
                      style={{ fontSize: "16px" }}
                      class="form-control"
                      aria-label=".form-select-lg example"
                      name=""
                      defaultValue={productdetails.Category}
                      placeholder="Location"
                      {...register("catergory")}
                    >
                      {" "}
                      <option value="1">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Beauty">Beauty</option>
                      <option value="Sports&Fitness">Sports&Fitness </option>
                      <option value="Furniture">Furniture </option>
                    </select>
                  </div>

                  <div className="dashboard-btn-wrapper mt-4">
                    <button
                      type="submit"
                      className="btn-submit dashboard-bg w-100"
                    >
                      {btnText}
                    </button>
                  </div>
                </div>
                <div className="dashboard-bottom-contents">
                  <div className="account-bottom">
                    <span className="account-title mt-3">
                      Don't have account?
                    </span>
                    <a className="signup-login mt-3">
                      <Link style={{ color: "black" }} to="/signup">
                        Signup Now
                      </Link>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productcreation;
