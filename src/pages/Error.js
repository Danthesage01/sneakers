import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import PageHero from "../components/PageHero"

const Error = () => {

  const navigate  = useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
        navigate("/products")
    }, 5000)
  }, [navigate])
  return (
    <Wrapper>
      <PageHero title="error"/>
      <section className="section-center">
        <p className="error-text">
          Hey buddy,
          <br />
          It seems like you missed your way.
          <br />
          You will be redirected shortly to the product page.
          <br />
          You can complete your shopping there.
        </p>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section` 
min-height: calc(100vh - 10rem);
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.error-text {
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