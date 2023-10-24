import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Dropdown from "react-bootstrap/Dropdown";
import "../styles/smallplants.scss";
import { useParams } from "react-router-dom";

export default function SmallPlants() {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  console.log(id);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });

        console.log(response);
        const data = await response.json();
        console.log(data);
        setCategory(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Une erreur est survenue :", error);
      }
    };

    fetchResults();
  }, [id]);

  return (!isLoading ?
    <div>
      <Banner />
      <Header />
      <div>
        <h1 className="category-title">{category[0].category.category_description}</h1>
        {/* (+id-1) permet de convertir id en chiffre avec le + et de lui soustraire 1 pour l'index */}

        <Dropdown className="dropdown-categories">
          <Dropdown.Toggle variant="success" id="dropdown-basic-categories">
            Trier par:
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Prix</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Popularité</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Difficulté</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>


        <div className="grid-container">
          <div className="grid">
            {category.map((product, index) => {
              return (<Link to={`/products/${product.id_product}`} className="category-card" key={index}>
                <img
                  className="card-img"
                  src={product.product_image}
                  alt=""
                />
                <p className="card-title">{product.product_name}</p>
              </Link>)
            })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div> : "loading"


  );
}
