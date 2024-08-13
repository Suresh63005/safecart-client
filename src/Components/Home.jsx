import React from "react";
import Header from "./Header";
import Products from "./Products";
import FakeProducts from "./FakeProdutcs";
import CategoriesTop from "./CategoriesTop";
import CategoriesBottom from "./CategoriesBottom";
import Logoipsum from "./Logoipsum";
import WinterProducts from "./WinterProducts";
import AllProducts from "../AllProducts";
import FooterTop from "./FooterTop";
import FooterBottom from "../FooterBottom";
import BannerProducts from "./BannerProducts/BannerProducts";
const Home = () => {
  return (
    <div>
      <Header />
      <BannerProducts />
      {/* <Products /> */}
      <FakeProducts />
      <CategoriesTop />
      <CategoriesBottom />
      <FakeProducts />
      <Logoipsum />
      <WinterProducts />
      <AllProducts />
      <FakeProducts />
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Home;
