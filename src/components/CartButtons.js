import styled from "styled-components"
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/ProductsContext"
import { useCartContext } from "../context/CartContext"
import { useUserContext } from "../context/UsersContext"
const CartButtons = () => {
  const { closeSidebar } = useGlobalContext()
  const { totalItems, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart"
        className="cart-btn"
        onClick={closeSidebar} >
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">
            {totalItems}
          </span>
        </span>
      </Link>
      {myUser ? (<button type="button" className="auth-btn" onClick={() => 
      {
        clearCart()
      logout({ returnTo: window.location.origin })}
      }>
        Logout
      </button>) : (<button type="button" className="auth-btn" onClick={loginWithRedirect}
      >Login</button>) }
      
    
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-black);
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    color: var(--clr-black);
    letter-spacing: var(--spacing);
  } 

`

export default CartButtons