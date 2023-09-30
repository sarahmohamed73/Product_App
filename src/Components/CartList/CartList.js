import './CartList.css'
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity, removeProduct} from '../../Store/Slices/CartSlice'
import cartImage from "../../Assets/Images/empty-cart-4816550-4004141.webp"
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Cart() {
  const counter = useSelector((state) => state.cart.counter)
  const cart = useSelector((state) => state.cart.cart)

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total +=  product.price * product.quantity
    });
    return total;
  };

  const dispatch = useDispatch()
  return (
    <>
      <div className="container">
        {counter === 0 ? 
        <div>
          <img src={cartImage} className="" style={{width: '40%'}}/>
          <h4>You Cart Is Empty!</h4>
          <NavLink to='/' className="text-success">&larr; Back to Home Page and Continue Shopping</NavLink>
        </div>
        :
        <>
          <table className="table">
            <thead>
              <tr className="table-head">
                <th className="border-0">Description</th>
                <th className="border-0">Quantity</th>
                <th className="border-0">Remove</th>
                <th className="border-0">Price</th>
              </tr>
            </thead>
            <tbody className="products">
            {cart.map((product) => {
              return (
                <>
                  <tr className='border border-1 border-bottom-0 border-start-0 border-end-0'>
                    <th class="border-0">
                      <div class="align-items-center d-flex">
                        <img src={product.thumbnail} width="100" className="me-4"></img>
                        <div class="text-start ml-3 mt-3">
                          <h5>{product.title}</h5>
                          <p className="fs-6 fw-normal">{product.description}</p>
                        </div>
                      </div>
                    </th>
                    <td class="align-middle border-0">
                      <div class="d-flex align-items-center justify-content-center px-3">
                          <button type="button" class="btn btn-success px-3 h-100 rounded-0" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                          <h4 className="px-3 py-1 h-100 m-0">{product.quantity}</h4>
                          <button type="button" class="btn btn-secondary px-3 h-100 rounded-0" onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                      </div>
                    </td>
                    <td class="align-middle border-0">
                      <a className="text-secondary w-100 text-center" onClick={() => dispatch(removeProduct(product.id))}>
                        <FontAwesomeIcon icon={faTrash} />
                      </a>
                    </td>
                    <td class="align-middle border-0">
                      ${product.price * product.quantity}
                    </td>
                  </tr>
                </>
              )
            })}
            </tbody>
          </table>
          <div className='text-end'>
            <span className='bg-light py-3 px-5'>
              <strong className='text-uppercase'>Total: </strong>
              ${getTotalPrice()}
            </span>
          </div>
        </>
        }
      </div>
    
    </>
  )
}

export default Cart