import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/ProductsContext";
import Loading from "./Loading";
import Error from "./Error";
import Product from "./Product";
const Featured = () => {
  const {
    products_isLoading: isLoading,
    products_isError: isError,
    featured_products: featured,
  } = useGlobalContext();
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <Wrapper>
      <div className="featured">
        <div className="title">
          <h2>Featured Sneakers</h2>
        </div>
        <div className="featured-center section-center">
          {featured.map((product) => {
            return (
              <Product
                key={product.id}
                {...product}
              />
            );
          })}
        </div>
        <Link
          to="/products"
          className="btn"
        >
          all sneakers
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .featured-center {
    margin: 3rem auto 2rem auto;
    display: grid;
    gap: 1rem;
    min-height: 6rem;
    position: relative;
  }
  .title h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
  }
  .featured {
    .btn {
      display: block;
      width: 11rem;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media screen and (min-width: 992px) {
    .featured-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1200px) {
    .featured-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.8rem;
    }
    .product .img {
      height: 13rem;
    }
  }
`;

export default Featured;
