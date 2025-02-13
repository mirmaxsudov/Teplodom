import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../item/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../features/products/productSlice";

const NewProducts = () => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productState.status === "idle") dispatch(fetchAllProducts());
  }, [productState, dispatch]);

  return (
    <section className="new-products py-[100px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-[30px]">
          <h2 className="font-semibold text-[30px]">Новинки на сайте</h2>
          <Link to={`/category/products/new`} className={"flex items-center"}>
            <span className="show-all-categories">Все категории</span>{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15582 5.15643C9.05593 5.25871 9 5.396 9 5.53896C9 5.68192 9.05593 5.81921 9.15582 5.92149L14.7368 11.6468L9.15582 17.3709C9.05593 17.4732 9 17.6105 9 17.7534C9 17.8964 9.05593 18.0337 9.15582 18.136C9.20438 18.1858 9.26243 18.2255 9.32656 18.2525C9.39068 18.2796 9.45958 18.2936 9.52918 18.2936C9.59879 18.2936 9.66769 18.2796 9.73181 18.2525C9.79594 18.2255 9.85399 18.1858 9.90255 18.136L15.8374 12.0465C15.9417 11.9395 16 11.7961 16 11.6468C16 11.4974 15.9417 11.354 15.8374 11.2471L9.90255 5.15758C9.85399 5.10771 9.79594 5.06807 9.73181 5.04101C9.66769 5.01394 9.59879 5 9.52918 5C9.45958 5 9.39068 5.01394 9.32656 5.04101C9.26243 5.06807 9.20438 5.10771 9.15582 5.15758V5.15643Z"
                fill="url(#paint0_linear_1_28)"
                stroke="url(#paint1_linear_1_28)"
                strokeWidth="0.2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_28"
                  x1="12.5"
                  y1="5"
                  x2="12.5"
                  y2="18.2936"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0077B6" />
                  <stop offset="1" stopColor="#003661" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_28"
                  x1="12.5"
                  y1="5"
                  x2="12.5"
                  y2="18.2936"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0077B6" />
                  <stop offset="1" stopColor="#003661" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-[30px]">
          {!productState.isLoading && (
            <>
              {productState.allProducts.slice(0, 8).map((p, i) => (
                <ProductItem key={i} product={p} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const NewProductsSkeleton = () => {};

export default NewProducts;
