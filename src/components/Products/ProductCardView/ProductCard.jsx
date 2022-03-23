import './productCard.css';
import { useProduct } from "../../../contexts/index";
import { addProductToCart } from "../../../services/index";
import { useAuth } from '../../../contexts/index'; 
import { isItemInCart } from "../../../utils/cart/cart";
import { useNavigate } from 'react-router';

const ProductCard = ({product}) => {
    const { 
        _id,
        title,
        productType, 
        rating, 
        price, 
        discountedPrice,
        img, 
        discountPercentage
    } = product;
    const navigate = useNavigate();
    const{state: {cart}, dispatch} = useProduct(); 
    const {state: {payload: {token}}} = useAuth(); 
    const isProductInCart = isItemInCart(cart, _id);

    //add items to cart
    const addToCartHandler = (products) => {
        token 
            ? isProductInCart
                ? navigate('/Cart') 
                : addProductToCart(dispatch, {product: products}, token)
            : navigate('/Login');
    }
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
                <button className="bttn bttn-primary" onClick={() => addToCartHandler(product)}>
                    <span className="bttn-icon">
                        <i className="fas fa-shopping-bag"></i>
                    </span>
                    {isProductInCart ? "View Cart" : "Add to Cart"} 
                </button>
            </div>
        </div>
    )
}

export {ProductCard};