import Advantages from "../components/advantages/Advantages";
import Brand from "../components/brand/Brand";
import HomeCarousel from "../components/carousel/HomeCarousel";
import Category from "../components/category/Category";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper bg-[#FAFAFA]">
      <HomeCarousel />
      <Category />
      <Brand />
      <Advantages />
    </div>
  );
};

export default Home;
