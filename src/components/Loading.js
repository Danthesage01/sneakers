import React from 'react'
import styled from 'styled-components'

const Loading = () => {
 return (
  <Wrapper>
   <div className='featured-center section-center'>
    <div className="section-loading">
     <div className="loading"></div>
    </div>
   </div>
  </Wrapper>
 )
}

export default Loading

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
.section-loading {
  text-align: center;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
`