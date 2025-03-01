import { Link, NavLink } from "react-router-dom";
import "./SortItem.css";

const SortItem = ({ item }) => {
  return (
    <NavLink className={"sort-item rounded-[10px]"} to={item.link}>
      <div className="md:text-[14px] item transition-all font-semibold duration-300 p-[10px] px-[25px] rounded-[10px] cursor-pointer">
        {item.title}
      </div>
    </NavLink>
  );
};

export default SortItem;
