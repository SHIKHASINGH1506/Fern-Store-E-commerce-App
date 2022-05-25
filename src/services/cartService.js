import axios from 'axios';

const cartBaseUrl = '/api/user/cart';

const addProductToCart = async (dispatch, data, showToast) => {
  const token = localStorage.getItem("token");
  const Headers = {authorization: token};
  try{
    const {data: {cart}, status} = await axios.post(cartBaseUrl, data, {headers: Headers});
    if(status>=200 && status<=300){
      dispatch({type: 'UPDATE_CART', payload: cart}); 
      showToast('Added to cart!', 'success');
    }
    else{
      throw new Error("Couldn't add to cart!")
    }

  }catch(error){
    console.log(error.message);
  }
}

const updateCartItem = async (dispatch, id, data) => {
  const token = localStorage.getItem("token");
  const updateCartItemQuantityUrl = '/api/user/cart/';
  const Headers = {authorization: token};
  const {data: {cart}} = await axios.post(updateCartItemQuantityUrl+id, data, {headers: Headers});
  dispatch({type: 'UPDATE_CART', payload: cart});
}

const deleteCartItem = async (dispatch, id) => {
  const token = localStorage.getItem("token");
  const deleteCartItemBaseUrl = '/api/user/cart/';
  const Headers = {authorization: token};
  const {data: {cart}} = await axios.delete(deleteCartItemBaseUrl+id, {headers: Headers});
  dispatch({type: 'UPDATE_CART', payload: cart});
}

const clearCart = async () => {
  const token = localStorage.getItem("token");
  const Headers = {authorization: token};
  return await axios.delete('/api/user/carts', {headers: Headers});
}

export {addProductToCart, updateCartItem, deleteCartItem, clearCart}