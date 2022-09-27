import React from 'react'
import styled from 'styled-components'
import { useFiltersContext } from '../context/FiltersContext'
import { formatPrice, getUniqueValues } from "../utils/helpers"
import { FaCheck } from "react-icons/fa"
const Filters = () => {
  const {
    filters: {
      text,
      brand,
      gender,
      color,
      minPrice,
      maxPrice,
      price,
      shipping
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFiltersContext()

  const brands = getUniqueValues(allProducts, "brand")
  const shoeGender = getUniqueValues(allProducts, "gender")
  const colors = getUniqueValues(allProducts, "colors")

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input type="text" 
            name='text' 
            value={text} placeholder="search..." className='search-input'
            onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>Brands</h5>
            {brands.map((b, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  name="brand"
                  className={brand === b ? "active" : null}
                >{b}</button>
              )
            })}
          </div>
          <div className="form-control">
            <h5>Gender</h5>
            <select name="gender"
              value={gender}
              onChange={updateFilters}
              className="gender">
              {shoeGender.map((s, index) => {
                return (
                  <option key={index} value={s}>
                    {s}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              {
                colors.slice(0, 6).map((c, index) => {
                  if (c === "all") {
                    return (
                      <button
                        key={index}
                        name='color'
                        onClick={updateFilters}
                        data-color="all"
                        className={color === "all" ? "all-btn active" : "all-btn"}
                      >
                        all
                      </button>
                    )
                  }
                  return (
                    <button key={index}
                      name="color"
                      style={{ background: c }}
                      className={color === c ? "color-btn active" : "color-btn"}
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">
              {formatPrice(price)}
            </p>
            <input type="range" name='price' onChange={updateFilters} 
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input 
            type="checkbox" 
            name="shipping" 
            id='shipping' 
            onChange={updateFilters}
            checked={shipping}
            />
          </div>
        </form>
        <button type="button" 
        onClick={clearFilters}
        className="clear-btn"> {" "}clear filters</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }  
  button:hover {
    border: 1px solid var(--clr-primary);
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .gender {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
    background: #6C757E;
    width: fit-content;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-primary);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    opacity: 0.5;
    color: var(--clr-white);
    border: none;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .all-btn:hover {
    border: none;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: 100px 20px;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
     .shipping {
        grid-template-columns: auto 1fr;
     }
  }
`
export default Filters