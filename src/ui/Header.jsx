import styled from "styled-components"
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";


const StyledHeader = styled.header` 
    background-color:var(--color-grey-00);
    padding: 1.2rem 4.8rem;
    border-bottom:2px solid var(--color-grey-100);
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