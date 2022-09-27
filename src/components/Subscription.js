import styled from "styled-components"

const Subscription = () => {
  return (
    <Wrapper>
      <div className="section-center">
      <div className="title">
        <h2>Our Newsletter</h2>
      </div>
        <div className="content">
          <h3>Interested In Subscribing? </h3>
          <form
            action="https://formspree.io/f/xzbwzonl"
            method="POST"
            className="contact-form">
            <input type="email" name="email" placeholder="Your email" className="form-control" />
            <button type="submit" className="btn-submit">Join Now</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
padding: 2rem 0;
background: var(--clr-black);
color: var(--clr-white);
.title h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.contact-form{
  margin-top: 1rem;
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
}
.form-control::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
.form-control,
.btn-submit{
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
}
.form-control{
    border-right: none;
    color: var(--clr-grey-1);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
}
.btn-submit{
    background: var(--clr-primary);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}
.btn-submit:hover{
  color: var(--clr-white);
}
@media screen and (min-width: 600px) {
.contact-form{
  margin-top: 0;
}
}
@media screen and (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 2rem;
    }
    .title h2 {
      margin-bottom: 2rem;
    }
}
`

export default Subscription