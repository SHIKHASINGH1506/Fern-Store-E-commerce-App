import './wishlist.css';

const Wishlist = () => {
    return (
        <div className="wishlist-wrapper">
            <div className="wishlist-container">
                <h5 className="wishlist-header py-4">Your Wishlist</h5>
                <div className="wishlist justify-center">
                    <div className="card-vertical">
                        <div className="card-image-container">
                            <img
                                className="responsive-img"
                                // src={require('../../assets/images/Fiddle-leaf.jpg')}
                                alt="model"
                            />

                            <button className="bttn bttn-outline-secondary bttn-float-icon wishlist-icon">
                                <i className="fas fa-heart"></i>
                            </button>
                        </div>
                        <div className="card-content-container">
                            <div className="card-title">Fiddle Leaf</div>
                            <div className="card-text">Indoor Plant</div>
                            <div className="card-price">
                                <span className="product-discounted-price">Rs. 650</span>
                            </div>
                            <button className="bttn bttn-secondary">
                                <span className="bttn-icon"
                                ><i className="fas fa-shopping-bag"></i></span
                                >Move to Bag
                            </button>
                        </div>
                    </div>

                    <div className="card-vertical">
                        <div className="card-image-container">
                            <img
                                className="responsive-img"
                                src="../assets/images/Products/Climber.jpg"
                            />

                            <button className="bttn bttn-outline-secondary bttn-float-icon wishlist-icon">
                                <i className="fas fa-heart"></i>
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
                            <button className="bttn bttn-secondary">
                                <span className="bttn-icon"
                                ><i className="fas fa-shopping-bag"></i></span
                                >Move to Bag
                            </button>
                        </div>
                    </div>

                    <div className="card-vertical">
                        <div className="card-image-container">
                            <img
                                className="responsive-img"
                                src="../assets/images/Products/zz.jfif"
                            />

                            <button className="bttn bttn-outline-secondary bttn-float-icon wishlist-icon">
                                <i className="fas fa-heart"></i>
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
                            <button className="bttn bttn-secondary">
                                <span className="bttn-icon"
                                ><i className="fas fa-shopping-bag"></i></span
                                >Move to Bag
                            </button>
                        </div>
                    </div>

                    <div className="card-vertical">
                        <div className="card-image-container">
                            <img
                                className="responsive-img"
                                src="../assets/images/Products/Small show-plant.jfif"
                            />

                            <button className="bttn bttn-outline-secondary bttn-float-icon wishlist-icon">
                                <i className="fas fa-heart"></i>
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
                            <button className="bttn bttn-secondary">
                                <span className="bttn-icon"
                                ><i className="fas fa-shopping-bag"></i></span
                                >Move to Bag
                            </button>
                        </div>
                    </div>

                    <div className="card-vertical">
                        <div className="card-image-container">
                            <img
                                className="responsive-img"
                                src="../assets/images/Products/Small show-plant.jfif"
                            />

                            <button className="bttn bttn-outline-secondary bttn-float-icon wishlist-icon">
                                <i className="fas fa-heart"></i>
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
                            <button className="bttn bttn-secondary">
                                <span className="bttn-icon"
                                ><i className="fas fa-shopping-bag"></i></span
                                >Move to Bag
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Wishlist }