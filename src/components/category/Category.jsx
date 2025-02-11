import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/categorySlice";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { motion } from "motion/react";
import "./Category.css";

const Category = () => {
  const {
    status,
    categories: data,
    isLoading,
  } = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle")
      dispatch(
        fetchAllCategories({
          isAll: true,
        }),
      );
    else if (status === "succeeded") setCategories(data);
  }, [status, data, dispatch]);

  return (
    <div className="container mx-auto">
      {<ShowCategories categories={categories.slice(0, 6)} />}
    </div>
  );
};

const ShowCategories = ({ categories, isLoading }) => {
  return (
    <>
      <div className="pt-[50px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-[30px]">Категории</h3>
          <Link to={"/all-categories"} className={"flex items-center"}>
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
        {isLoading ? (
          <CategorySkeleton />
        ) : (
          <div className="flex flex-nowrap overflow-x-auto gap-[10px] items-stretch mt-10">
            {categories.map((category) => (
              <CategoryItem key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export const CategoryItem = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="bg-[#fff] rounded">
      <motion.div
        animate={{ scale: [0, 1], opacity: [0, 1] }}
        className="px-[15px] py-[20px] rounded-[15px]"
      >
        <div className="category-image w-[150px] h-[106px] mx-auto">
          <img className="w-[100%] h-[100%]" src={category.image} alt="image" />
        </div>
        <div className="category-body">
          <p className="text-center line-clamp-2 mt-[29px]">{category.title}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const CategorySkeleton = () => {
  return (
    <>
      <div className="flex gap-3 mt-10 flex-nowrap overflow-x-auto items-stretch">
        <Skeleton count={1} width={"200px"} height={"200px"} />
        <Skeleton count={1} width={"200px"} height={"200px"} />
        <Skeleton count={1} width={"200px"} height={"200px"} />
        <Skeleton count={1} width={"200px"} height={"200px"} />
        <Skeleton count={1} width={"200px"} height={"200px"} />
        <Skeleton count={1} width={"200px"} height={"200px"} />
      </div>
    </>
  );
};

export default Category;
