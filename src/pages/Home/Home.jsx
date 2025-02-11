import "./Home.css";
import HomeCarousel from "./../../components/carousel/HomeCarousel";
import Brand from "../../components/brand/Brand";
import Advantages from "./../../components/advantages/Advantages";
import Info from "./../../components/info/Info";
import Category from "./../../components/category/Category";

const Home = () => {
  return (
    <div className="home-wrapper bg-[#FAFAFA]">
      <HomeCarousel />
      <Category />
      <Brand />
      <Advantages />
      <Info />
    </div>
  );
};

export default Home;
