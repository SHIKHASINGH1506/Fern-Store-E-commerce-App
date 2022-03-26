import "./App.css";
import 'react-toastify/dist/ReactToastify.min.css';

import { Routes, Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import {
  Home,
  Navbar,
  ProductListing,
  Login,
  Signup,
  Cart,
  Wishlist,
  Loader
} from "./components";
import Mockman from 'mockman-js';
import { useProduct } from "./contexts";

function App() {
  const {loader} = useProduct();
  return (
    <div className="App">
      {loader && <Loader />}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
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
