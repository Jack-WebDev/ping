
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    transform: translateY(100px);
`

const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;


`

const P = styled.p`
    text-align: center;
    color: var(--Gray);
    margin-block: 1rem 2rem;
`

function Footer() {
  return (
    <Container>
        <Socials>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>

        </Socials>
        <P>© Copyright Ping. All rights reserved.</P>
    </Container>
  )
}

export default Footer