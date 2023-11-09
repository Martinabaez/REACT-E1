import styled from "styled-components";

export const NavbarContainer = styled.div`
height: 90px;
background-color: #FF7CC1;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 4rem;
margin: 0;

@media (max-width: 768px) {
    padding: 1rem 2rem;
}
`

export const LinksContainer = styled.div`
color:#000000;
display: flex;
justify-content: center;
align-items: center;
gap: 40px;

a{
    padding: 1rem 1.5rem;
    color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 20px;
}
`
export const HomeContainer = styled.nav`
display: flex;
gap: 2rem;
align-items: center;
@media (max-width: 768px) {
    display: none;
}
`

export const MenuContainer = styled.nav`
display: none;
align-items: center;
font-size: 2rem;
cursor: pointer;
@media (max-width: 768px) {
    display: flex;
}
`