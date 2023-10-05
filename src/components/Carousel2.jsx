import PropTypes from "prop-types";
import { useReducer } from "react";
import "../styles/carousel2.scss";



export default function Carousel2({ property1, className }) {
    const [state, dispatch] = useReducer(reducer, {
        property1: property1 || "default",
    });

    return (
        <div className={`carousel ${className}`}>
            <div className="overlap">
                <div className="card" />
                <img className="pic-card" alt="Pic card" src={state.property1 === "default" ? "/assets/articles/picCard1.png" : "/assets/articles/picCard4.png"} />
                <div className="title-card" />
                <div className="qui-sont-les">
                    {state.property1 === "variant-2" && <p className="p">Qui sont les artisans que nous soutenons...</p>}

                    {state.property1 === "default" && <>Découvrez nos meilleures ventes...</>}
                </div>
            </div>
            <div className="overlap-group">
                <div className="card" />
                <img
                    className="pic-card"
                    alt="Pic card"
                    src={state.property1 === "default" ? "/assets/articles/picCard2.png" : "/assets/articles/picCard5.png"}
                />
                <div className="title-card" />
                <div className={`quels-sont-nos ${state.property1}`}>
                    {state.property1 === "variant-2" && (
                        <p className="p">
                            Quels sont nos engagements <br />
                            pour la planète?
                        </p>
                    )}

                    {state.property1 === "default" && (
                        <p className="p">
                            Notre séléction d’accessoires
                            <br />
                            de jardinage d’intérieur...
                        </p>
                    )}
                </div>
            </div>
            <div className="div">
                <div className="card" />
                <img
                    className="pic-card"
                    alt="Pic card"
                    src={state.property1 === "default" ? "/assets/articles/picCard3.png" : "/assets/articles/picCard6.png"}
                />
                <div className="title-card" />
                <div className="d-couvrez-pourquoi">
                    {state.property1 === "variant-2" && <p className="p">Découvrez pourquoi vos plantes vous font du bien...</p>}

                    {state.property1 === "default" && <p className="p">Comment prendre soin de vos plantes...</p>}
                </div>
            </div>
            <div className={`ellipse property-1-${state.property1}`} />
            <div className={`ellipse-2 property-1-0-${state.property1}`} />
            <div className={`overlap-2 property-1-1-${state.property1}`}>
                <div
                    className="rectangle"
                    onClick={() => {
                        dispatch("click");
                    }}
                />
                <div className="text-wrapper">&lt;</div>
            </div>
            <div className={`overlap-3 property-1-3-${state.property1}`}>
                <div
                    className="rectangle-2"
                    onClick={() => {
                        dispatch("click_95");
                    }}
                />
                <div className="text-wrapper">&gt;</div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    switch (action) {
        case "click":
            return {
                ...state,
                property1: "variant-2",
            };

        case "click_95":
            return {
                ...state,
                property1: "variant-2",
            };
    }

    return state;
}

Carousel2.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};
