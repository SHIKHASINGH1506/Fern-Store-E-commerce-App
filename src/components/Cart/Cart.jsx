import './cart.css';

const Cart = () => {
    return (
        <div className="general-wrapper">
            <div className="cart-wrapper">
                <h5 className="cart-header py-4">Your Cart (2)</h5>
                <div className="cart-body">
                    <div className="cart-item-list">
                        <div className="card-horizontal cart-item">
                            <div className="card-image-container">
                                <img
                                    className="responsive-img"
                                    src="../assets/images/Products/Aloevera.jpg"
                                    alt="model"
                                />
                            </div>
                            <div className="card-horizontal-content-container">
                                <button className="btn-close py-2" id="close-btn-alert">
                                    <i className="fas fa-times" aria-hidden="true"></i>
                                </button>
                                <div className="text-conatiner">
                                    <div className="card-title">Aloe Vera</div>
                                    <div className="card-text">Indoor Plant from succulents group</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 550</span>
                                        <span className="product-original-price">Rs. 650</span>
                                        <span className="product-discount">(20% OFF)</span>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button className="bttn bttn-outline-secondary text-sm">
                                        Move to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card-horizontal cart-item">
                            <div className="card-image-container">
                                <img
                                    className="responsive-img"
                                    src="../assets/images/Products/Climber.jpg"
                                    alt="model"
                                />
                            </div>
                            <div className="card-horizontal-content-container">
                                <button className="btn-close py-2" id="close-btn-alert">
                                    <i className="fas fa-times" aria-hidden="true"></i>
                                </button>
                                <div className="text-conatiner">
                                    <div className="card-title">Hanging Plant</div>
                                    <div className="card-text">Outdoor plant</div>
                                    <div className="card-price">
                                        <span className="product-discounted-price">Rs. 450</span>
                                        <span className="product-original-price">Rs. 500</span>
                                        <span className="product-discount">(20% OFF)</span>
                                    </div>
                                </div>
                                <div className="button-container">
                                    <button className="bttn bttn-outline-secondary text-sm">
                                        Move to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="item-price-card">
                        <div className="price-card-header py-4 bold">Order Details</div>
                        <div className="order-body">
                            <div className="order-breakup py-4">
                                <div className="order-item">
                                    <span>Bag Total (3 Items)</span>
                                    <span> Rs 2500</span>
                                </div>
                                <div className="order-item">
                                    <span>Discount</span>
                                    <span>Rs -350</span>
                                </div>
                                <div className="order-item">
                                    <span>Delivery</span>
                                    <span>Free</span>
                                </div>
                            </div>
                            <div className="order-amount py-2 d-flex justify-between bold">
                                <span>Total Amount</span>
                                <span>Rs 2000</span>
                            </div>
                        </div>
                        <button className="bttn bttn-primary bttn-order">place order</button>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export { Cart }