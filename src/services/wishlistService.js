import axios from 'axios';

const wishlistBaseUrl='/api/user/wishlist';

const addProductToWishlist = async (dispatch, data, showToast) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Headers = {authorization: token};
  try{
    const {data: {wishlist}, status} = await axios.post(wishlistBaseUrl, data, {headers: Headers});
    if(status>=200 && status<=300){
      dispatch({type: 'UPDATE_WISHLIST', payload: wishlist});
      showToast('Added to your wishlist', 'success');
    }
    else{
      throw new Error("Couldn't add to wishlist");
    }
  }
  catch(error){
    console.log(error.response.data);
  }
}

const deleteProductFromWishlist = async (dispatch, id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const Headers = {authorization: token};
  const {data: {wishlist}} = await axios.delete(`${wishlistBaseUrl}/${id}`, {headers: Headers});
  dispatch({type: 'UPDATE_WISHLIST', payload: wishlist});
}
 
export {addProductToWishlist, deleteProductFromWishlist};