import React, { useState } from 'react'
import styled from 'styled-components';

const ProductImages = ({ subImages = [{ url: "https://thesageconcepts.com/wp-content/uploads/2022/09/allstar3.jpg" }] }) => {
 const [main, setMain] = useState(subImages[0])

 return (
  <Wrapper>
   <img src={main.url} alt="main" className="main" />
    <div className="gallery">
     {subImages.map((image, index) => {
      return (
       <img src={image.url}
        key={index}
        alt="extra"
        onClick={() => setMain(subImages[index])}
        className={main.id === image.id ? "active img" : "img"}
       />
      )
     })}
    </div>
  </Wrapper>
 )
}


const Wrapper = styled.section`
.main {
    height: 300px;
     box-shadow: 0px 0px 0px .03rem var(--clr-primary);
  }
  img{
    width: 100%;
    display: block;
    border-radius: var(--radius);
   margin-top: 1rem;
    object-fit: cover;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }

`
export default ProductImages