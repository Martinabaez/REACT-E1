
import React, { useContext, useEffect } from "react";
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
                <a href="/">Inicio</a>
                <a href="/products">Productos</a>
                <a href="/about">Nosotros</a>
                <a href="/contact">Contacto</a>
            </HomeContainer>
         </LinksContainer>
    </NavbarContainer>
 )
}
