import styled from "styled-components"
import PageHero from "../components/PageHero"
import Filters from "../components/Filters"
import Sort from "../components/Sort"
import ProductList from "../components/ProductList"
const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper>
        <div className=".section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  )
}


const Wrapper = styled.div`
  min-height: calc(100vh - (20vh + 10rem));
  .section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }


`

export default ProductsPage