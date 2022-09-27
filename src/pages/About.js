import styled from "styled-components"
import PageHero from "../components/PageHero"
const About = () => {
  return (
    <Wrapper>
      <PageHero title="about" />
      <div className="section-center">
        <div className="title">
          <h2>Our Story</h2>
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non officia id ratione aperiam mollitia ea molestias
          pariatur labore, exercitationem culpa velit omnis quod ducimus illo a at reiciendis. Officiis, molestiae culpa
          ducimus quas repellat totam, vel iusto nihil quasi accusantium blanditiis optio iste recusandae quaerat modi.
          Blanditiis accusamus odio facere magnam cumque eius ullam doloribus sed quod, fuga excepturi numquam! Facilis
          placeat delectus inventore, natus, explicabo cum expedita tempore, in nobis maiores rerum harum molestias deleniti
          excepturi quod eaque illum.
        </p>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: calc( 100vh - 10rem);
    .section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
.title h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-top: 1rem;
}
.title span {
  color: var(--clr-primary);
  font-size: 0.85em;
  margin-right: 1rem;
}
.about-text {
  line-height: 2;
  max-width: 45em;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 1rem;
}
`

export default About