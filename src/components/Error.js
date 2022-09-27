import React from 'react'
import styled from 'styled-components'

const Error = () => {
  return (
   <Wrapper>
   <div className="featured-center section-center">
    <div className='error'>
     <p>
            There is an error. 
           <br /> 
           Please check your internet connection.
     </p> 
     </div>
   </div>
   </Wrapper>
  )
}

const Wrapper = styled.div`
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
.error{
   line-height: 2;
  text-align: center;
  max-width: 45em;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 1rem;
  color: var(--clr-red-light);
  font-size: 1.5rem;
}
`

export default Error