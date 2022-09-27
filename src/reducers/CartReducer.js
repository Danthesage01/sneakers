import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS
} from "../ACTIONS";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, product } = action.payload
      const tempItem = state.cart.find(it => it.id === id + color)
      if (tempItem) {
        const tempCart = state.cart.map(cartIt => {
          if (cartIt.id === id + color) {
            let newAmount = cartIt.amount + amount
            if (newAmount > cartIt.max) {
              newAmount = cartIt.max
            }
            return { ...cartIt, amount: newAmount }
          }
          return cartIt
        })

        return { ...state.cart, cart: tempCart }
      }
      else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image.subImages[0].url,
          price: product.price,
          max: product.stock,
        }
        return { ...state, cart: [...state.cart, newItem] }
      }
    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter(item => item.id !== action.payload)
      return { ...state, cart: tempCart }
    case CLEAR_CART:
      return { ...state, cart: [] }
    case TOGGLE_CART_ITEM_AMOUNT:
      const { cartId, value } = action.payload
      const tCart = state.cart.map(item => {
        if (item.id === cartId) {
          if (value === "inc") {
            let nAmount = item.amount + 1
            if (nAmount > item.max) {
              nAmount = item.max
            }
            return { ...item, amount: nAmount }
          }
          if (value === "dec") {
            let nAmount = item.amount - 1
            if (nAmount < 1) {
              nAmount = 1
            }
            return { ...item, amount: nAmount }
          }
        }
        return item
      })
      return { ...state, cart: tCart }
      case COUNT_CART_TOTALS:
        const {totalItems, totalAmount} = state.cart.reduce((total, cartItem)=>{
          const { amount, price} = cartItem
          total.totalItems += amount 
          total.totalAmount += price * amount 
          return total
        }, {
          totalItems: 0,
          totalAmount: 0
        })
      return{...state, totalItems, totalAmount}
    default:
      throw new Error(`No matching ${action.type} - action type`)
  }

}

export default CartReducer