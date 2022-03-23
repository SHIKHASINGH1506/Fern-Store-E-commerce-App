import axios from 'axios';
const cartBaseUrl = '/api/user/cart';
const addProductToCart = async (dispatch, data, token) => {
  const postCartUrl = '/api/user/cart';
  const Headers = {authorization: token};
  const {data: {cart}} = await axios.post(cartBaseUrl, data, {headers: Headers});
  dispatch({type: 'UPDATE_CART', payload: cart});
}

const updateCartItem = async (dispatch, id, data, token) => {
  const updateCartItemQuantityUrl = '/api/user/cart/';
  const Headers = {authorization: token};
  const {data: {cart}} = await axios.post(updateCartItemQuantityUrl+id, data, {headers: Headers});
  dispatch({type: 'UPDATE_CART', payload: cart});
}

const deleteCartItem = async (dispatch, id, token) => {
  const deleteCartItemBaseUrl = '/api/user/cart/';
  const Headers = {authorization: token};
  const {data: {cart}} = await axios.delete(deleteCartItemBaseUrl+id, {headers: Headers});
  dispatch({type: 'UPDATE_CART', payload: cart});
}

export {addProductToCart, updateCartItem, deleteCartItem}