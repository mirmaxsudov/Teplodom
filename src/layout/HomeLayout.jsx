import React from "react";
import Nav from "./../components/nav/Nav";
import Sort from "./../components/sort/Sort";
import { Outlet } from "react-router-dom";
import Brand from "../components/brand/Brand";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Sort />
      <Outlet />
    </>
  );
};

export default HomeLayout;
