import styled from "styled-components"
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";


const StyledHeader = styled.header` 
    background-color:var(--color-grey-100);
    padding: 1.2rem 4.8rem;
    border-bottom:2px solid var(--color-grey-100);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.4rem;

`;


function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  )
}

export default Header