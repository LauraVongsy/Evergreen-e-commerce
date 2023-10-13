import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/categories.scss";

export default function CategoriesPage() {
  return (
    <div>
      <Banner />
      <Header />
      <div>
        <h1>Notre séléction de plantes d’intérieur:</h1>
        <div className="grid-container">
          <div className="grid">
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Notre séléction d’accessoire de jardinerie:</h1>
        <div className="grid-container">
          <div className="grid">
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
            <div className="category-card">
              <img
                className="card-img"
                src="/assets/categories/categorytest.png"
                alt=""
              />
              <p className="card-title">description categorie</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
