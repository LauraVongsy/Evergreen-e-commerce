import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/categories.scss";

export default function CategoriesPage() {


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        console.log(response);
        const data = await response.json();
        console.log(data);
        setCategories(data);
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    };

    fetchResults();
  }, []);



  return (
    <div>
      <Banner />
      <Header />
      <div>
        <h1>Toutes nos catégories de produits:</h1>
        <div className="categories-grid-container">
          <div className="categories-grid">
            {categories ? categories.map((category, index) => (
              <div className="category-card" key={index}>
                <Link to={`/categories/${category.category_id}`} className="card-img"><img

                  src={category.category_picture}
                  alt=""
                /></Link>

                <p className="card-title">{category.category_description}</p>
              </div>
            )) : "loading"}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

