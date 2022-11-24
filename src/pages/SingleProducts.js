import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageHero from "../components/PageHero";
import { useGlobalContext } from "../context/ProductsContext";
import { SPURL } from "../utils/constant";
import Loading from "../components/Loading";
import Error from "../pages/Error";
import Stars from "../components/Stars";
import AddToCart from "../components/AddToCart";
import { Link } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import { formatPrice } from "../utils/helpers";

const SingleProducts = () => {
  const {
    fetchSP,
    singleProduct: product,
    singleProduct_isLoading: isLoading,
    singleProduct_isError: isError,
  } = useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSP(`${SPURL}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }

    // eslint-disable-next-line
  }, []);


  const { id: SKU, fields } = product;

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <Wrapper>
      <PageHero
        title={fields && fields.name}
        product={product}
      />
      {fields && (
        <div className="section section-center page">
          <Link
            to="/products"
            className="btn btn-product"
          >
            back to products
          </Link>
          <div className="product-center">
            <ProductImages images={fields.images} />
            <section className="content">
              <h2>{fields.name}</h2>
              <Stars
                stars={fields.stars}
                reviews={fields.reviews}
              />
              <h5 className="price">{formatPrice(fields.price)}</h5>
              <p className="desc">{fields.description}</p>
              <p className="info">
                <span>Available : </span>
                <span className={fields.stock === 0 ? "out" : "in"}>
                  {fields.stock > 0
                    ? `${fields.stock} In Stock`
                    : "Out of Stock"}{" "}
                </span>
              </p>
              <p className="info">
                <span>SKU : </span>
                {SKU}
              </p>
              <p className="info">
                <span>Brand : </span>
                {fields.brand}
              </p>
              <hr />
              {fields.stock > 0 && <AddToCart product={product.fields} />}
            </section>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - (20vh + 10rem));
  }
  .section {
    padding: 5rem 0;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .btn-product {
    border-radius: 5px;
  }
  .out {
    color: var(--clr-red-dark);
  }
  .in {
    color: var(--clr-primary);
  }
`;

export default SingleProducts;
