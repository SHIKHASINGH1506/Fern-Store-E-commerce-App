import './product-listing.css';
import { Navbar } from "../Navbar/Navbar";


const ProductListing = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="general-wrapper">
                <div className="product-page">
                    {/* Sidebar */}
                    <div className="product-sidebar mr-6">
                        <aside className="side-navbar">
                            <header className="nav-header py-4">
                                <div className="title px-4 bold">Filters</div>
                                {/* <a href="" className="link-text-primary">clear</a> */}
                            </header>
                            <div className="drawer-menu">
                                <div className="price-filter">
                                    <div className="list-title px-4 my-2 bold">Price</div>
                                    <div className="slider px-4">
                                        <div className="range">
                                            <input type="range" id="price" name="price"
                                                min="250" max="2000" />
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-filter">
                                    <div className="list-title px-4 my-2 bold">Rating</div>
                                    <div className="checklist">
                                        <label className="list-item" for="checkbox-1">
                                            <input
                                                className="mr-4"
                                                type="radio"
                                                id="checkbox-1"
                                                name="rating"
                                                checked
                                            />
                                            4 stars & above
                                        </label>
                                        <label className="list-item" for="checkbox-2">
                                            <input
                                                className="mr-4"
                                                type="radio"
                                                id="checkbox-2"
                                                name="rating"
                                            />
                                            3 stars & above
                                        </label>
                                        <label className="list-item" for="checkbox-3">
                                            <input
                                                className="mr-4"
                                                type="radio"
                                                id="checkbox-3"
                                                name="rating"
                                            />
                                            2 stars & above
                                        </label>

                                    </div>
                                </div>
                                <div className="category-filter">
                                    <div className="list-title px-4 my-2 bold">Cateogry</div>
                                    <div className="checklist">
                                        <label className="list-item" for="checkbox-1">
                                            <input
                                                className="mr-4"
                                                type="checkbox"
                                                name=""
                                                id="checkbox-1"
                                                name="checkbox-1"
                                                checked
                                            />
                                            Indoor Plants
                                        </label>
                                        <label className="list-item" for="checkbox-2">
                                            <input
                                                className="mr-4"
                                                type="checkbox"
                                                name=""
                                                id="checkbox-2"
                                                name="checkbox-2"
                                            />
                                            Outdoor Plants
                                        </label>
                                        <label className="list-item" for="checkbox-3">
                                            <input
                                                className="mr-4"
                                                type="checkbox"
                                                name=""
                                                id="checkbox-3"
                                                name="checkbox-3"
                                            />
                                            Kids
                                        </label>
                                        <label className="list-item" for="checkbox-4">
                                            <input
                                                className="mr-4"
                                                type="checkbox"
                                                name=""
                                                id="checkbox-4"
                                                name="checkbox-4"
                                            />
                                            Planters
                                        </label>
                                    </div>
                                </div>
                                <div className="sort-filter">
                                    <div className="checklist">
                                        <div className="list-title px-4 my-2 bold">Sort by</div>
                                        <label className="list-item" for="checkbox-1">
                                            <input
                                                className="mr-4"
                                                type="radio"
                                                name=""
                                                id="checkbox-1"
                                                name="checkbox-1"
                                                checked
                                            />
                                            price low-to-high
                                        </label>
                                        <label className="list-item" for="checkbox-2">
                                            <input
                                                className="mr-4"
                                                type="radio"
                                                name=""
                                                id="checkbox-2"
                                                name="checkbox-2"
                                            />
                                            price high-to-low
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    {/* Product listing page */}
                    <div className="product-container">
                        <h5 className="product-header py-4">Products</h5>
                        <div className="product-list">
                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Fiddle-leaf.jpg"
                                        alt="model"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Climber.jpg"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/zz.jfif"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span>  */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Small show-plant.jfif"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Climber.jpg"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span>  */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Fern.jfif"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Leafy.jfif"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>

                            <div className="card-vertical">
                                <div className="card-image-container">
                                    <img
                                        className="responsive-img"
                                        src="../assets/images/Products/Aloevera.jpg"
                                    />
                                    <div className="card-badge-container">
                                        <span className="badge bg-primary"
                                        >4.3<i className="fas fa-star"></i
                                        ></span>
                                    </div>
                                    <button className="bttn bttn-outline-secondary bttn-float-icon">
                                        <i className="far fa-heart"></i>
                                    </button>
                                </div>
                                <div className="card-content-container">
                                    <div className="card-title">Fiddle Leaf</div>
                                    <div className="card-text">Indoor Plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 650</span>
                                        {/* <span className="product-original-price">Rs. 2999</span>
                            <span className="product-discount">(20% OFF)</span> */}
                                    </div>
                                    <button className="bttn bttn-primary">
                                        <span className="bttn-icon"
                                        ><i className="fas fa-shopping-bag"></i></span
                                        >Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export {ProductListing}