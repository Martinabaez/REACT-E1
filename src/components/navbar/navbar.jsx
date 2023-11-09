import React from 'react'
import {
    HomeContainer,
    LinksContainer, 
    NavbarContainer,
} from './styles'

export const Navbar = () => {
  return (
    <NavbarContainer>
       <div>
    <a href="#">
     <img src="./src/assets/img/logo.png" alt="" />
    </a>
       </div>
           <LinksContainer>
           <HomeContainer>
                <a href="/#">Inicio</a>
                <a href="/#">Productos</a>
                <a href="/#">Nosotros</a>
            </HomeContainer>
         </LinksContainer>
    </NavbarContainer>
)
}
