import "./Home.css";
import HomeCarousel from "./../../components/carousel/HomeCarousel";
import Brand from "../../components/brand/Brand";
import Advantages from "./../../components/advantages/Advantages";
import Info from "./../../components/info/Info";
import Category from "./../../components/category/Category";
import NewProducts from "../../components/products/news/NewProducts";
import PopularProducts from "../../components/products/populars/PopularProducts";
import Team from "../../components/team/Team";

const Home = () => {
  return (
    <div className="home-wrapper bg-[#FAFAFA]">
      <HomeCarousel />
      <Category />
      <NewProducts />
      <Brand />
      <PopularProducts />
      <Advantages />
      <Team />
      <Info />
    </div>
  );
};

export default Home;
