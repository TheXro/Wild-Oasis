import styled from "styled-components"
import Logo from "./Logo"
import MainNav from "./MainNav"
import Uploader from "../data/Uploader"
const StyledSidebar = styled.div`
    background-color:var(--color-grey-00);
    border-right: 2px solid var(--color-grey-100);
    padding: 3.2rem 2.4rem;
    flex: 0 1 32rem;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
function Sidebar() {
  return (
    <StyledSidebar>
        <Logo/>
      <MainNav />
      <Uploader/>
    </StyledSidebar> 
  )
}

export default Sidebar