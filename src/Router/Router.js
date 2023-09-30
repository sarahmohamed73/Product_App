import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products"
import ProductDetails from "../Pages/Details"
import Cart from "../Pages/Cart"
import BuyNow from "../Pages/BuyNow"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Products />}/>
      <Route path="/Details/:id" element={<ProductDetails />}/>
      <Route path="/Cart" element={<Cart />}/>
      <Route path="/BuyNow" element={<BuyNow />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}

export default Router