export const filterReducer = (state, action) => {
  switch (action.type) {
    case "INIT_CATEGORIES": {
      const obj = action.payload.reduce(
        (prev, current) => ({ 
          ...prev, 
          [current.categoryName]: false 
        }), 
        {}
      );
      return {
        ...state,
        cateogries: obj
      };
    }
    case 'INIT_PRODUCTS': {
      return{
        ...state,
        products: action.payload
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
          ...state.categories, 
          ...action.payload 
        }
      };
    case 'STAR_RATING':
      return{
        ...state,
        starRating: action.payload
      };
    case 'PRICE':
      return { 
        ...state, 
        priceRange: action.payload 
      };
    case 'CLEAR': 
      for(const cat in state.categories)
        state.categories[cat] = false;
      return {
        ...state,
        sortBy: "",
        categories: state.categories,
        priceRange: 1300,
        starRating: "",
        products: action.payload
      }
    default:
      return state;
  }
};
