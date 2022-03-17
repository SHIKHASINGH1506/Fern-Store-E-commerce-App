import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Home} from "./components/Home/Home";
import {Navbar} from "./components/Navbar/Navbar";
import {ProductListing} from "./components/Products/ProductListingView/ProductListing";
import {Login} from "./components/Auth/Login/Login";
import{Signup} from "./components/Auth/Signup/Signup";
import {Cart} from "./components/Cart/Cart";
import {Wishlist} from "./components/Wishlist/Wishlist";
import Mockman from 'mockman-js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mock' element={<Mockman/>}></Route>
        <Route path='/Products' element={<ProductListing/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/Wishlist' element={<Wishlist/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
