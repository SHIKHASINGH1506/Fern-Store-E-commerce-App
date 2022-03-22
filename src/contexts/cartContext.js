import { createContext, useContext, useReducer } from "react";
import {cartReducer, initialCartState} from "../reducers/index";

const CartContext = createContext();
const useCart = () => useContext(CartContext);
const { Provider } = CartContext;

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  return (
    <Provider value={{state, dispatch}}>
      {children}
    </Provider>
  )
}

export {CartProvider, useCart}