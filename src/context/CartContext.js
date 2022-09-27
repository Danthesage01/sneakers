import React, { useContext, useEffect, useReducer } from "react"
import reducer from "../reducers/CartReducer"
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS
} from "../ACTIONS";

const getLS = () => {
  let cart = localStorage.getItem("cart")
  if (cart) {
    return cart = JSON.parse(localStorage.getItem("cart"))
  }
  else {
    return []
  }
}

const initialState = {
  cart: getLS(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 10000,
}

const CartContext = React.createContext()
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } })
  }
  // remove
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }
  // toggle
  const toggleAmount = (id, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { cartId: id, value } })
  }

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }
  useEffect(() => {
    dispatch({type: COUNT_CART_TOTALS})
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      removeItem,
      toggleAmount,
      clearCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}

export default CartProvider