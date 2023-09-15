
import styled from "styled-components"
import Form from "./components/Form"
import Footer from "./components/Footer"

const Container = styled.div`
  display: grid;
  place-items: center;

`

const H1 = styled.h1`
  color: var(--Gray);
  font-weight: 300;
  margin-block: 2rem 1rem;
`


const Span = styled.span`
  color: var(--VeryDarkBlue);
  font-weight: 700;
`

const LeadParagraph = styled.p`
  color: var(--VeryDarkBlue);
  font-weight: 300;
`

function App() {
  return (
    <>
      <Container>
        <img className="logo" src="/images/logo.svg" alt="" />
        <H1>We are launching <Span>soon!</Span></H1>
        <LeadParagraph>Subscribe and get notified</LeadParagraph>
        <Form />
        <img className="hero__img" src="/images/illustration-dashboard.png" alt="" />
      </Container>

      <Footer />
    </>
  )
}

export default App