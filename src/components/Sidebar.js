import React from 'react'
import { useGlobalContext } from '../context/ProductsContext'
import styled from 'styled-components'
import { links } from '../utils/constant'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { useUserContext } from '../context/UsersContext'
const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext() 
  const { myUser } = useUserContext()
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? "show-sidebar sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <button className='close-btn' 
          type='button'
          onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, title, url }) => {
            return (
              <li key={id}>
                <Link to={url} className="link" onClick={closeSidebar}>{title}</Link>
              </li>
            )
          })}
         {myUser && <Link to="/checkout" className='link' onClick={closeSidebar}>checkout</Link>
         }
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div` 
text-align: center;
margin: 0;
  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .links {
    margin-bottom: 2rem;
  }
  .links .link {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links .link:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-primary);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`
export default Sidebar
