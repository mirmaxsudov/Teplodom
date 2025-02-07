import Brand from "../components/brand/Brand";
import Category from "../components/category/Category";
import Nav from "../components/nav/Nav";
import Sort from "../components/sort/Sort";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper bg-[#FAFAFA]">
      <Category />
      <Brand />
    </div>
  );
};

export default Home;
