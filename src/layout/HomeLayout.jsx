import React from "react";
import Nav from "./../components/nav/Nav";
import Sort from "./../components/sort/Sort";
import { Outlet } from "react-router-dom";
import Brand from "../components/brand/Brand";
import Footer from './../components/footer/Footer';

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Sort />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
