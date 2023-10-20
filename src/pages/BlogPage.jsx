import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import "../styles/blogPage.scss"

export default function BlogPage() {
    return (
        <div className='blog-page'>
            <Header />
            <h1 className='le-blog'>Le Blog</h1>
            <div className='blog-container'>
                <div className='blog-summary'>
                    <ul>Nos derniers articles:</ul>
                    <li>Comment prendre soin de vos plantes?</li>
                    <li>Pourquoi vos plantes vous font du bien?</li>
                    <li>Qui sont les artisans que nous soutenons?</li>
                </div>
                <div className='blog-article'>
                    <img className='blog-art-img' src="/assets/articles/article-example.png" alt="" />
                    <div className='blog-text'>
                        <h2 className='blog-art-title'>titre de l'article</h2>
                        <p className='article-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
                            adipiscing nec, ultricies sed, dolor.
                            Cras elementum ultrices diam.
                            Maecenas ligula massa, varius a, semper congue, euismod non,
                            mi. Proin porttitor, orci nec nonummy molestie,
                            enim est eleifend mi, non fermentum diam nisl sit amet erat.
                            Duis semper. Duis arcu massa, scelerisque vitae,
                            consequat in, pretium a, enim. Pellentesque congue.
                            Ut in risus volutpat libero pharetra tempor.
                            Cras vestibulum bibendum augue.
                            Praesent egestas leo in pede. Praesent blandit odio eu enim.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non,mi.
                            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                            Duis semper.
                            Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor.
                            Cras vestibulum bibendum augue.  </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
