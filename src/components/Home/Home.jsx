import './home.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import {HeroImage} from "../../assets/index";

export const Home = () => {
const [categories, setCateogries] = useState([]);
useEffect(() => {
    (async() => {
      const {data: {categories}} = await axios.get('/api/categories');
      setCateogries(() => categories);
    })();
}, []);

    return (
        <div className="landing-page-layout">
            <div className="hero-img-wrapper">
                <div className="text-overlay">
                    <h1 className="text-overlay-title">LIVE WITH NATURE</h1>
                    <button className="bttn bttn-primary bttn-lg">
                        <a className="shop-btn" href="./Components/Products/product.html">
                            SHOP NOW</a
                        >
                    </button>
                </div>
                <a href="#">
                    <picture>
                        <img
                            className="home-page-banner responsive-img"
                            src={HeroImage}
                            alt="plants"
                        />
                    </picture>
                </a>
            </div>

            <div className="homepage-feature-section">
                <header className="homepage-feature-header py-4 text-center">
                    <h4 className="homepage-feature-title">Featured Cateogry</h4>
                </header>
                <div className="asideSection">
                    {categories.map( ({_id, img, categoryName}) => {
                        return(
                            <div className="feature-box" key={_id}>
                                <a href="/Products">
                                    <div>
                                        <img
                                            className="responsive-img homepage-feature-img"
                                            src={img}
                                            alt={categoryName}
                                        />
                                    </div>
                                    <p>{categoryName}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}