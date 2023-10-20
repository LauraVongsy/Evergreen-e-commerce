import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Dropdown from "react-bootstrap/Dropdown";
import "../styles/smallplants.scss";

export default function Succulentes() {
    return (
        <div>
            <Banner />
            <Header />
            <div>
                <h1 className="category-title">Plantes de petite taille:</h1>
                <div className="needs">
                    <p className="category-subtitle">Les besoins de ma plante:</p>
                    <img
                        className="indicators"
                        src="/assets/icons/Water.png"
                        alt="waterdrop icon"
                    />
                    <img
                        className="indicators"
                        src="/assets/icons/Sun.png"
                        alt="sun icon"
                    />
                    <img
                        className="indicators"
                        src="/assets/icons/Heat.png"
                        alt="heat icon"
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Trier par:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Prix</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Popularité</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Difficulté</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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
