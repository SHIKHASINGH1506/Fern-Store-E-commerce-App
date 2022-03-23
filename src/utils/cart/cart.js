const isItemInCart = (cart, id) => {
  return cart.find(cartInItem => cartInItem._id === id);
}

const getPriceDetails = (cart) => {
  return cart.reduce(
    ({totalPrice, priceAfterDiscount, totalDiscount}, item) => 
    {
      totalPrice = totalPrice+(item.price*item.qty);
      priceAfterDiscount = priceAfterDiscount+(item.discountedPrice*item.qty);
      totalDiscount = totalDiscount+(item.discount*item.qty); 
    return {totalPrice, priceAfterDiscount, totalDiscount};
    },
    {
      totalPrice: 0,
      priceAfterDiscount: 0,
      totalDiscount: 0
    }
  );
}

export { isItemInCart, getPriceDetails };