import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  cart : [],
  counter: 0
}

const cart = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    // New Item
    addToCart: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload.id)
      if(product) {
        product.quantity++
        state.counter++
      } else {
        state.cart.push({...action.payload, quantity: 1})
        state.counter++
      }
    },

    // Increment
    incrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload)
      if(product.quantity >= product.stock) {
        product.quantity = product.stock
      } else {
        product.quantity++
        state.counter++
      }
    },

    // Decrement
    decrementQuantity: (state, action) => {
      const product = state.cart.find((product) => product.id === action.payload)
      if(product.quantity === 1) {
        product.quantity = 1
      } else {
        product.quantity--
        state.counter--
      }
    },

    // Remove
    removeProduct: (state, action) => {
      state.counter = state.counter - state.cart.find((product) => product.id === action.payload).quantity
      const updatedCart = state.cart.filter((product) => product.id !== action.payload)
      state.cart = updatedCart
    }
  }
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct
} = cart.actions

export default cart.reducer