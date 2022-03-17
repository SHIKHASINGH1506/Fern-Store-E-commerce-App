import './productCard.css';
const ProductCard = ({product}) => {
    const { 
        title,
        productType, 
        rating, 
        price, 
        discountedPrice,
        img, 
        discountPercentage
    } = product;
    return (
        <div className="card-vertical">
            <div className="card-image-container">
                <img
                    className="responsive-img"
                    src={img}
                    alt={title}
                />
                <div className="card-badge-container">
                    <span className="badge bg-primary">
                        {rating}<i className="fas fa-star"></i>
                    </span>
                </div>
                <button className="bttn bttn-outline-secondary bttn-float-icon">
                    <i className="far fa-heart"></i>
                </button>
            </div>
            <div className="card-content-container">
                <div className="card-title">{title}</div>
                <div className="card-text"> {productType} </div>
                <div className="card-price">
                    <span className="product-discounted-price">
                       Rs. {discountedPrice}
                    </span>
                    <span className="product-original-price">Rs. {price}</span>
                    <span className="product-discount">{discountPercentage}</span>
                </div>
                <button className="bttn bttn-primary">
                    <span className="bttn-icon">
                        <i className="fas fa-shopping-bag"></i>
                    </span>
                     Add to Cart
                </button>
            </div>
        </div>
    )
}

export {ProductCard};