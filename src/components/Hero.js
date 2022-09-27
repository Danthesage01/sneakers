import { Link } from "react-router-dom"
import styled from "styled-components"
import backIMG from "../assets/hero-image.PNG"
const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h2>Quality brands of</h2>
        <h1>sneakers </h1>
        <h2>for you</h2>
        <Link to="/products" className="btn hero-btn">Get yours</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  margin-top: -6rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
    url(${backIMG}) center/cover no-repeat;
  display: grid;
  place-items: center;
  overflow-x: hidden;
.hero-container{
    width: 90vw;
    max-width: var(--max-width);
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .hero-container h2 {
  font-family: var(--ff-tertiary);
  color: var(--clr-white);
  -webkit-animation: slideFromRight 5s ease-in-out 1;
          animation: slideFromRight 5s ease-in-out 1;
  font-weight: 900;
  margin-bottom: -0.5rem;
  letter-spacing: var(--spacing);
}
.hero-container h1 {
  text-transform: uppercase;
  color: var(--clr-primary);
  font-weight: 900;
  font-size: 3.5rem;
  letter-spacing: var(--spacing);
  margin: 1.5rem;
  -webkit-animation: slideFromLeft 5s ease-in-out 1;
          animation: slideFromLeft 5s ease-in-out 1;
}
.hero-btn {
  outline: 0.125rem solid var(--clr-primary);
  outline-offset: 0.25rem;
  font-size: 1.25rem;
  padding: 1rem 1.75rem;
  margin-top: 3rem;
  -webkit-animation: show 5s linear 1;
          animation: show 5s linear 1;
}
.hero-btn:hover {
  outline: 0.125rem solid var(--clr-white);
  outline-offset: 0.25rem;
}
@media screen and (min-width: 800px) {
  .hero-container h2 {
    letter-spacing: 0.2rem;
  }
  .hero-container h1 {
    letter-spacing: 0.25rem;
    font-size: 5rem;
  }
}
`
export default Hero