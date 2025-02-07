import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeLayout from "./layout/HomeLayout";
import AllCategories from "./components/all-categories/AllCategories";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="/all-categories" element={<AllCategories />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <Analytics />
    </>
  );
};

export default App;
