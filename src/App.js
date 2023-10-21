import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./pages/HomePage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CategoriesPage from "./pages/CategoriesPage";
import SmallPlants from "./pages/CategoryPage";


import CartPage from "./pages/CartPage";

import BlogPage from "./pages/BlogPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:id" element={<SmallPlants />} />

        <Route path="/blog" element={<BlogPage />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
