import axios from 'axios';

const wishlistBaseUrl='/api/user/wishlist';

const addProductToWishlist = async (dispatch, data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Headers = {authorization: token};
  const {data: {wishlist}} = await axios.post(wishlistBaseUrl, data, {headers: Headers});
  dispatch({type: 'UPDATE_WISHLIST', payload: wishlist});
}

const deleteProductFromWishlist = async (dispatch, id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Headers = {authorization: token};
  const {data: {wishlist}} = await axios.delete(`${wishlistBaseUrl}/${id}`, {headers: Headers});
  dispatch({type: 'UPDATE_WISHLIST', payload: wishlist});
}
 
export {addProductToWishlist, deleteProductFromWishlist};