import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./pages/HomePage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CategoriesPage from "./pages/CategoriesPage";
import SmallPlants from "./pages/SmallPlants";
import MediumPlants from "./pages/MediumPlants";
import LargePlants from "./pages/LargePlants";
import CartPage from "./pages/CartPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/1" element={<SmallPlants />} />
        <Route path="/categories/2" element={<MediumPlants />} />
        <Route path="/categories/3" element={<LargePlants />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
