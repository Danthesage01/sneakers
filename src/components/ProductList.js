import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GridView from './GridView'
import ListView from './ListView'
import { useFiltersContext } from "../context/FiltersContext"


const ProductList = () => {
  const { filteredProducts: products, gridView } = useFiltersContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000)
  }, [products])

  if (isLoading === true && products.length < 1) {
    return (
      <Heading>
          <div className="loading"></div>
      </Heading>
    )
  }

  if (isLoading === false && products.length < 1) {
    return (
      <Heading>
        Sorry, no products matched your search...
      </Heading>
    )
  }



  if (gridView === false) {
    return (
      <ListView products={products} />
    )
  }
  return (
    <GridView products={products} />
  )
}
const Heading = styled.h5`
  text-transform: none;
  font-size: 1.5rem;
.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid var(--clr-grey-1);
  border-radius: 50%;
  border-top-color: var(--clr-primary);
  -webkit-animation: loader 0.6s linear infinite;
          animation: loader 0.6s linear infinite;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}
  @media screen and (min-width: 668px){
  font-size: 2.5rem;
}
`
export default ProductList