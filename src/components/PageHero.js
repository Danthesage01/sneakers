import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="page-hero-title">
          <h3 className={title === "error" ? "error-title" : null}>
            {product && <Link to="/products">/products</Link>}/{title}
          </h3>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 20vh;
  background: var(--clr-grey-10);
  width: 100%;
  display: grid;
  place-items: center;
  color: var(--clr-grey-5);
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
h3, a {
    color: var(--clr-grey-5);
    text-transform: capitalize;
    font-size: 2rem;
    padding: 0.5rem;
    font-weight: 500;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  .error-title{
    color: var(--clr-red-dark)
  }
`

export default PageHero