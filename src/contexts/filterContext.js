import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { filterReducer } from '../reducers/filterReducer';

const FilterContext = createContext();
const useFilter = () => useContext(FilterContext);
const initialState =  {
    sortBy: "",
    categories: {},
    priceRange: 600,
    starRating: "",
    products:[]
  };
const FilterContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);

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
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContextProvider, useFilter };
