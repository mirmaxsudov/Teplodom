import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../features/category/categorySlice";
import "./AllCategories.css";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchAllCategories({ isAll: true }));
    }
  }, [categories, dispatch]);

  return (
    <>
      <div className="container mx-auto px-[10px] lg:px-[150px] py-[60px] md:pb-[120px] pt-[10px]">
        <h3 className="font-semibold text-[30px] my-5">Категории</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-[20px] gap-[10px]">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </>
  );
};

const CategoryItem = ({ category }) => {
  return (
    <>
      <div className="category-item px-[15px] py-[20px] rounded-[15px] bg-[#FFFFFF]">
        <div className="category-image w-[150px] h-[106px] mx-auto">
          <img className="w-[100%] h-[100%]" src={category.image} alt="image" />
        </div>
        <div className="category-body">
          <p className="text-center line-clamp-2 mt-[29px]">{category.title}</p>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
