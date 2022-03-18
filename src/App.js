import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  Navbar,
  ProductListing,
  Login,
  Signup,
  Cart,
  Wishlist
} from "./components/index";
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
