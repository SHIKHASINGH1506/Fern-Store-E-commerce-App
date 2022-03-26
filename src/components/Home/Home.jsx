import './home.css';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HeroImage}  from "../../assets/index";

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
                        <Link className="shop-btn" to="/Products">
                            SHOP NOW
                        </Link>
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
                                <Link to="/Products">
                                    <div>
                                        <img
                                            className="responsive-img homepage-feature-img"
                                            src={img}
                                            alt={categoryName}
                                        />
                                    </div>
                                    <p>{categoryName}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}