import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./pages/HomePage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import CategoriesPage from "./pages/CategoriesPage";
import SmallPlants from "./pages/SmallPlants";
import Orchids from "./pages/OrchidsPage";
import LargePlants from "./pages/LargePlants";
import CartPage from "./pages/CartPage";
import Succulentes from "./pages/SucculentesPage";
import Tools from "./pages/ToolsPage";
import Pots from "./pages/PotsPage";
import SoilsPage from "./pages/SoilsPage"
import Terrarium from "./pages/TerrariumsPage";
import BlogPage from "./pages/BlogPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/1" element={<SmallPlants />} />
        <Route path="/categories/2" element={<Succulentes />} />
        <Route path="/categories/3" element={<LargePlants />} />
        <Route path="/categories/8" element={<Orchids />} />
        <Route path="/categories/4" element={<Pots />} />
        <Route path="/categories/5" element={<Tools />} />
        <Route path="/categories/6" element={<SoilsPage />} />
        <Route path="/categories/7" element={<Terrarium />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
