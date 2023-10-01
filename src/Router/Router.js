import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../Components/Loader/Loader"
// import Products from "../Pages/Products"
// import ProductDetails from "../Pages/Details"
// import Cart from "../Pages/Cart"
// import BuyNow from "../Pages/BuyNow"
// import Register from "../Pages/Register"
// import Login from "../Pages/Login"
// import NotFound from "../Pages/NotFound"
const Products = React.lazy(() => import("../Pages/Products"))
const ProductDetails = React.lazy(() => import("../Pages/Details"))
const Cart = React.lazy(() => import("../Pages/Cart"))
const BuyNow = React.lazy(() => import("../Pages/BuyNow"))
const Register = React.lazy(() => import("../Pages/Register"))
const Login = React.lazy(() => import("../Pages/Login"))
const NotFound = React.lazy(() => import("../Pages/NotFound"))

function Router() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path="/Details/:id" element={<ProductDetails />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/BuyNow" element={<BuyNow />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Suspense>
  )
}

export default Router