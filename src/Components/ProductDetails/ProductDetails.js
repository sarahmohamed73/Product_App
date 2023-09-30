import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../APIs/config";
import StarRating from '../ProductList/StarRating';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Store/Slices/CartSlice'

function ProductDetails() {
  const [productDetails, setProductDetails] = useState([])
  const [Images, setImages] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const redirectToBuy = (id) => {
    navigate(`/BuyNow?id=${id}`)
  }
  
  useEffect(() => {
    axiosInstance.get(`/products/${params.id}`)
                 .then((result) => {
                  setProductDetails(result.data)
                  const FilterImages = result.data.images.filter((_, index) => index !=0 && index <= 3)
                  setImages(FilterImages)
                })
                 .catch((error) => console.log(error))
  }, [])

  const handleButtonClick = (id) => {
    dispatch(addToCart({...productDetails,quantity:1}))
    navigate(`/Cart?id=${id}`)
  };

  return (
    <div className="container">
      <div className="row mb-5">
        {/* Images */}
        <div className="col-lg-6" style={{height: '100vh'}}>
          <div className="main-image h-50">
            <img src={productDetails.thumbnail} className="h-100 w-100 rounded-2"/>
          </div>
          <br /><br />
          <div className="slider-image row row-cols-3 h-25">
            {Images.map((image) => {
              return (
                <div className="col-3 mx-3" width="100">
                  <img src={image} className="h-100 w-100 rounded-2"/>
                </div>
              )
            })}
          </div>
        </div>
        {/* Details */}
        <div className="col-lg-6 text-start px-5">
          <h1 className="">{productDetails.title}</h1>
          <p>{productDetails.description}</p>
          <p className="text-success mb-4"><StarRating rating={productDetails.rating} /></p>
          <hr />
          <div className="d-flex">
            <h3 style={{textDecoration: productDetails.discountPercentage && 'line-through'}}>${productDetails.price}</h3>
            {productDetails.discountPercentage && 
              <p>
                <span className="ms-2 text-danger">%{productDetails.discountPercentage}</span>
                <h3 className="ms-2 d-inline-block ">
                  {(productDetails.price - productDetails.price * (productDetails.discountPercentage / 100)).toFixed(2)}
                </h3>
              </p>
            }
          </div>
          <hr />
          {productDetails.stock == 0 ? 
            <span className="badge bg-danger p-2 mb-3">Out Of Stock</span> :
            <span className="badge bg-success p-2 mb-3">In Stock</span>
          }
          <p className="text bg-light w-50 p-2 mb-1"><strong className="text-uppercase">Category: </strong>{productDetails.category}</p>
          <p className="text bg-light w-50 p-2"><strong className="text-uppercase">Brand: </strong>{productDetails.brand}</p>
          <hr />
          <div className="row justify-content-evenly">
            <input type="number" id="typeNumber" min={1} max={10} className="col-5 form-control w-50" placeholder="Quantity"/>
            <p className="col-5 mb-0">only <span className="text-warning">{productDetails.stock} Items </span>Left! <br />Don't Miss It</p>
          </div>
          <div className="row mt-4 justify-content-evenly">
            <button type="button" className="col-4 btn btn-success rounded-5 py-2" onClick={() => redirectToBuy(productDetails.id)}>Buy Now</button>
            <button type="button" className="col-4 btn btn-outline-success rounded-5 py-2" onClick={() => handleButtonClick(productDetails.id)}>Add To Cart</button>
          </div>
        </div>   
      </div>
    </div>
  )
}

export default ProductDetails