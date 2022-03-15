import './home.css';
import {
    LowMaintainanceCategory,
    IndoorCategory,
    AirPurifierCategory,
    HeroImage
  } from "../../assets/index";

export const Home = () => {
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
                    <div className="feature-box">
                        <a href="">
                            <div>
                                <img
                                    className="responsive-img homepage-feature-img"
                                    src={LowMaintainanceCategory}
                                />
                            </div>
                            <p>Indoor Plant</p>
                        </a>
                    </div>
                    <div className="feature-box">
                        <a href="">
                            <div>
                                <img
                                    className="responsive-img homepage-feature-img"
                                    src={IndoorCategory}
                                />
                            </div>
                            <p>Air Purifying</p>
                        </a>
                    </div>
                    <div className="feature-box">
                        <a href="">
                            <div>
                                <img
                                    className="responsive-img homepage-feature-img"
                                    src={AirPurifierCategory}
                                />
                            </div>
                            <p>Low Maintainance</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}