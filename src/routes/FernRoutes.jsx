import { Routes, Route } from 'react-router-dom';
import { FernPrivateRoutes } from './FernPrivateRoutes';
import {
  Home,
  ProductListing,
  Login,
  Signup,
  Cart,
  Wishlist,
} from "components";

const FernRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/Home" element={<Home />} /> 
            <Route path='/Products' element={<ProductListing/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path="/" element={<FernPrivateRoutes />}>
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="/account" />
            </Route>
        </Routes>               
    );
}

export { FernRoutes as Routes };