import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from '../../APIs/config'
import ProductCard from "./ProductCard";

function ProductList() {
  const [productList, setProductList] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((result) => setProductList(result.data.products))
      .catch((error) => console.log(error));
  }, []);

  const redirectToDetails = (id) => {
    navigate(`/Details/${id}`)
  }

  const redirectToCart = () => {
    navigate(`/Cart`)
  }

  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 justify-content-center align-items-center ">
      {productList.map((product) => {
        return (
          <div className="col d-flex justify-content-center align-items-center" key={product.id}>
            <ProductCard product={product} navigateDetail={(id) => redirectToDetails(id)} navigateCart={() => redirectToCart()}/>
          </div>
        );
      })}
    </div>
    )
}

export default ProductList