import axios from "axios";
import { 
  createContext, 
  useContext, 
  useReducer, 
  useEffect, 
  useState } from "react";

import { productReducer } from '../reducers/productReducer';

const ProductContext = createContext();
const useProduct = () => useContext(ProductContext);
const initialState =  {
    sortBy: "",
    categories: {},
    priceRange: 600,
    starRating: "",
    cart: [],
    wishlist: [],
    products:[]
  };
const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        (async () => {
            try{
                const {data : {categories}} = await axios.get('/api/categories');
                dispatch({
                  type: "INIT_CATEGORIES", 
                  payload: categories
                });
            }catch(error)
            {
              console.log(error);
            }
        })();
    }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch, loader, setLoader }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, useProduct };
