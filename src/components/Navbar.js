import styled from "styled-components"
import { links } from "../utils/constant"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import CartButtons from "./CartButtons"
import { useGlobalContext } from "../context/ProductsContext"
import { useUserContext } from "../context/UsersContext"
const Navbar = () => {
  const {openSidebar} = useGlobalContext()
  const { myUser} = useUserContext()
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <button type="button" className="nav-toggle" 
          onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map(link => {
            const { id, url, title } = link
            return (
              <li key={id}>
                <Link to={url} className="nav-link">{title}</Link>
              </li>
            )
          })}
          {
            myUser && <li>
              <Link to="/checkout" className="nav-link">
                checkout
              </Link>
            </li>
          }
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
 height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
     .nav-header {
       display: none;
     }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      .nav-link {
        color: var(--clr-grey-3);
        font-size: 1.5rem;
         font-weight: 500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Navbar
