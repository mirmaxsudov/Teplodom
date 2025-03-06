import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AllCategories from "./components/all-categories/AllCategories";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home/Home";
import PoliceAgreement from "./pages/policeAgreement/PoliceAgreement";
import ProductDetail from "./components/products/detail/ProductDetail";
import Contacts from "./components/contacts/Contacts";
import ReturnOrder from "./components/returnOrder/ReturnOrder";
import Basket from "./components/basket/Basket";
import { ToastContainer } from "react-toastify";
import Suppliers from "./components/suppliers/Suppliers";
import DiscountProducts from "./components/products/discountProducts/DiscountProducts";
import NewProducts from "./components/products/news/NewProducts";
import FavoriteProducts from "./components/products/favorites/FavoriteProducts";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/all-categories" element={<AllCategories />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/police-agreement" element={<PoliceAgreement />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/return" element={<ReturnOrder />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/discount" element={<DiscountProducts />} />
            <Route path="/favorites" element={<FavoriteProducts />} />
            <Route path="/new" element={<NewProducts n={9999} isWithCategory={false} />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
      <Analytics />
    </>
  );
};

export default App;
