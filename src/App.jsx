import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AllCategories from "./components/all-categories/AllCategories";
import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/Home/Home";
import PoliceAgreement from "./pages/policeAgreement/PoliceAgreement";
import ProductDetail from "./components/products/detail/ProductDetail";
import Contacts from "./components/contacts/Contacts";
import ReturnOrder from "./components/returnOrder/ReturnOrder";

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
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;
