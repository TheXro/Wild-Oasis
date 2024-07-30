import styled from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"
const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  background-color: gainsboro;
`
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin: 1rem;
`

const Input = styled.input`
  border: 2px solid #687b8f;
  border-radius: 7px;
  padding: 0.8rem 1.2rem;
  outline: none;
`

const StyledApp = styled.main`
  background-color: beige;
  padding: 1rem;
`



function App() {
  return (
    <>
    <GlobalStyles />
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("check in")} >Check in</Button>
      <Button onClick={() => alert("check in")} >Check out</Button>
      <Input type="text" placeholder="Enter your name" /> 
      <Input type="text" placeholder="Enter your pop" /> 
    </StyledApp>
    </>
  )
}

export default App
