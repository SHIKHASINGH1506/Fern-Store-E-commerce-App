import {addProductToCart, updateCartItem, deleteCartItem} from "./cartService";
import {addProductToWishlist, deleteProductFromWishlist} from "./wishlistService";
import {loginUser, signupUser} from "./authService";
import { getProductData } from "./productService";

export {
    addProductToCart, 
    updateCartItem, 
    deleteCartItem,
    addProductToWishlist,
    deleteProductFromWishlist,
    loginUser,
    signupUser,
    getProductData
};
export {getAllAddress, addAddress, updateAddress, deleteAddress} from "./addressService";