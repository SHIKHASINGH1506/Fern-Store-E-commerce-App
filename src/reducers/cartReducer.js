const initialCartState = {
  totalPrice: 0,
  totalQuantity: 0,
  cartList: []
}

const cartReducer = (state, action) => {
  console.log(action);
  const {totalPrice, totalQuantity, cartList} = state;
  const {type, payload} = action;
  switch(type){
    case('ADD_TO_CART'):
      const product = cartList.find(item => item._id===payload._id);
      if(product)
        return{
          ...state,
          totalPrice: totalPrice + payload.discountedPrice,
          totalQuantity: totalQuantity + payload.qty,
          cartList: cartList.map(cartItem => {
            if (cartItem._id === payload._id)
              return {...cartItem, qty: cartItem.qty + 1};
            return cartItem;
          })
        };
      return {
        ...state,
        totalPrice: totalPrice + payload.discountedPrice,
        totalQuantity: totalQuantity + payload.qty._id,
        cartList: [...cartList, payload]
      };
      case('INCREASE_QTY'):
        return{
          ...state,
          totalPrice: totalPrice + cartList.find(item => item._id===payload._id).discountedPrice,
          totalQuantity: totalQuantity + 1,
          cartList: cartList.map(cartItem => {
            if (cartItem._id === payload._id)
              return {...cartItem, qty: cartItem.qty + 1};
            return cartItem;
          })
        };
      case('DECREASE_QTY'):
        return{
          ...state,
          totalPrice: totalPrice - cartList.find(item => item._id===payload._id).discountedPrice,
          totalQuantity: totalQuantity - 1,
          cartList: cartList.map(cartItem => {
            if (cartItem._id === payload._id)
              return {...cartItem, qty: cartItem.qty - 1};
            return cartItem;
          })
        };
      default: return state;
  }
 
}

export { cartReducer, initialCartState };