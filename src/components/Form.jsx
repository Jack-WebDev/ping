
import styled from "styled-components"

const Container = styled.form`
    display: grid;
    place-items: center;
    margin-inline: auto;
    margin-block: 1rem 3rem;

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

const InputErrorContainer = styled.div`
    display: grid;
`

const Input = styled.input`
    border: none;
    outline: 1px solid var(--Blue);
    border-radius: 2rem;
    padding: .5rem 1.5rem;
    margin-block-start: 1rem;
    width: 100%;

    &::placeholder {
        color: var(--PaleBlue);
    }

`

const Button = styled.button`
    background-color: var(--Blue);
    color: #FFF;
    box-shadow: 1px 1px 10px var(--Blue);
    border: none;
    border-radius: 2rem;
    padding: .6rem 2rem;
    margin-block-start: 1rem;
    width: 100%;
    cursor: pointer;

    &:hover {
        background-color: rgb(79 125 243 / .9);
    }

    @media screen and (min-width: 768px) {
        width: 70%;
    }
`

const Error = styled.div`
    display: none;
    font-size: 13px;
    margin-block-start: .5rem;
    font-weight: 600;
    color: var(--LightRed);
    text-align: center;

    &.active {
        display: inline-block;
        
    }
`

function Form() {
    
    const handleSubmit = (e) => {
        const error = document.querySelector('.error');
        const email = document.querySelector('.email');
        e.preventDefault()

        if(email.value === '' || email.value === null) {
            error.classList.add('active')
            email.style.outline = '1px solid var(--LightRed)';

            setInterval(() => {
                error.classList.remove('active')
                email.style.outline = '1px solid var(--Blue)';

            },3000)
        }

        
    }

  return (
        <Container onSubmit={handleSubmit}>
            <InputErrorContainer>
                <Input className="email" type="text" placeholder="Your email address..."/>
                <Error className="error">Please Enter Your Email!!</Error>
            </InputErrorContainer>
            <Button>Notify Me</Button>

        </Container>
  )
}

export default Form