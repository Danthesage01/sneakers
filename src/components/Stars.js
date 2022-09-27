import React from 'react'
import styled from 'styled-components';
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"
const Stars = ({stars, reviews}) => {
const tStars = Array.from({length: 5},(_,index)=>{
const fracNo = index + 0.5
const wholeNo = index + 1
return(
 <span key={index}>
  {stars >= wholeNo ? <BsStarFill /> : stars >= fracNo ? <BsStarHalf /> : <BsStar />}
 </span>
)
})
  return (
    <Wrapper>
    <div className="stars">
    {tStars}
    </div>
    <p className="reviews">
     {reviews} customer reviews
    </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #FF9529;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars