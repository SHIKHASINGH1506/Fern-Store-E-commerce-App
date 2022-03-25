export const productReducer = (state, action) => {
  const {type, payload} = action;
  const {categories} = state;
  switch (type) {
    case "INIT_CATEGORIES": {
      return {
        ...state,
        categories: payload.reduce(
          (prev, current) => ({ 
            ...prev, 
            [current.categoryName]: false 
          }), 
          {}
        )
      }
    };
    case 'INIT_PRODUCTS': {
      return{
        ...state,
        products: payload
      }
    }
    case 'LOW_TO_HIGH':
      return { 
        ...state, 
        sortBy: "lowtoHigh" };
    case 'HIGH_TO_LOW':
      return { 
        ...state, 
        sortBy: "hightoLow" };
    case 'CATEOGRY':
      return  {
        ...state,
        categories: { 
          ...categories, 
          ...payload 
        }
      };
    case 'STAR_RATING':
      return{
        ...state,
        starRating: payload
      };
    case 'PRICE':
      return { 
        ...state, 
        priceRange: payload 
      };
    case 'UPDATE_CART': 
      return {
        ...state,
        cart: [...action.payload]
      }
    case 'UPDATE_WISHLIST':
      return {
        ...state,
        wishlist: [...action.payload]
      }
    case 'LOGOUT':
      return {
        ...state,
        cart: [],
        wishlist: []
      }
    case 'CLEAR': 
      for(const cat in categories)
        categories[cat] = false;
      return {
        ...state,
        sortBy: "",
        categories: categories,
        priceRange: 1300,
        starRating: "",
        products: payload
      }
    default:
      return state;
  }
};
