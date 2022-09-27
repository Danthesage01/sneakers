import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa"
import { formatPrice } from '../utils/helpers';
const Product = ({ image, name, price, id }) => {
  return (
    <Wrapper>
      <div className="product-container">
        <img src={image.url} alt={name} className="product-img img" />
        <div className="product-icons">
          <Link to={`/products/${id}`} className="product-icon">
            <FaSearch />
          </Link>
        </div>
      </div>
      <footer className='footer'>
        <h4 className='name'>{name}</h4>
        <h4 className='price'> {formatPrice(price)}</h4>
      </footer>
    </Wrapper>
  )
}


const Wrapper = styled.article`
.product-img {
  height: 15rem;
  object-fit: cover;
  border-radius: var(--radius);
}
.product-container {
  position: relative;
}
.product-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  display: flex;
  transition: var(--transition);
}
.product-icon {
  width: 2.25rem;
  height: 2.25rem;
  background: var(--clr-primary);
  color: var(--clr-white);
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: var(--transition);
  cursor: pointer;
  font-size: 1rem;
  border-color: transparent;
  margin: 0 0.5rem;
}
.product-icon:hover {
  background: var(--clr-primary-light);
}
.product-container:hover .product-icons {
  opacity: 1;
}
footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h4, {
    font-weight: 400;
  }
footer .name{
  font-weight: bold;
}
 footer .price {
    color: var(--clr-primary);
    letter-spacing: var(--spacing);
  }
@media screen and (min-width: 1200px) {
  .product .img {
    height: 13rem;
  }
}
`
export default Product