// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../styles/blog-carousel.scss';



// const articles = [
//     {
//         image: "/assets/articles/picCard1.png",
//         titre: "Découvrez nos meilleures ventes"
//     },
//     {
//         image: "/assets/articles/picCard2.png",
//         titre: "Notre séléction d'accessoire de jardinage d'intérieur"
//     },
//     {
//         image: "/assets/articles/picCard3.png",
//         titre: "Comment prendre soin de vos plantes..."
//     },
//     {
//         image: "/assets/articles/picCard4.png",
//         titre: "Qui sont les artisans que nous soutenons?"
//     },
//     {
//         image: "/assets/articles/picCard5.png",
//         titre: "Quels sont nos engagements pour la planète?"
//     },
//     {
//         image: "/assets/articles/picCard6.png",
//         titre: "Découvrez pourquoi vos plantes vous font du bien."
//     },
// ]
// const CarouselArrowPrev = (props) => {
//     const { onClick } = props;
//     return (
//         <button onClick={onClick} className="carousel-arrow-prev">
//             &lt;
//         </button>
//     );
// };

// const CarouselArrowNext = (props) => {
//     const { onClick } = props;
//     return (
//         <button onClick={onClick} className="carousel-arrow-next">
//             &gt;
//         </button>
//     );
// };



// const BlogCarousel = () => {
//     const settings = {
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false, // Désactivez les flèches par défaut
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className='blog-container'>
//             <div className='blog-desc'>
//                 <h1 className='blog-title'>Le Blog</h1>
//                 <span className='subtitle'>Apprenez à vous occuper de vos plantes, rencontrez nos artisans partenaires...</span>
//             </div>
//             <div className='carousel-container'>
//                 <CarouselArrowPrev className='prev-button' />
//                 <Slider className='slider' {...settings}>
//                     {articles.map((article, index) => (
//                         <div className='carousel-card' key={index}>
//                             <img className='card-img' src={article.image} alt="" />
//                             <h1 className='card-titre'>{article.titre}</h1>
//                         </div>
//                     ))}
//                 </Slider>
//                 <CarouselArrowNext className='next-button' />
//             </div>
//         </div>
//     )
// }

// export default BlogCarousel;



