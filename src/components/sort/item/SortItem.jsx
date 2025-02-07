import "./SortItem.css";

const SortItem = ({ item }) => {
  return (
    <div className="md:text-[14px] item transition-all font-semibold duration-300 p-[10px] px-[25px] rounded-[10px] bg-[#EEEDED] cursor-pointer hover:bg-gradient-to-b hover:from-[#ffb12a] hover:to-[#ef8100] hover:text-white">
      {item}
    </div>
  );
};

export default SortItem;
