import React from 'react'
import { HeaderContainer, HeaderImageContainer,HeaderTextContainer, Home } from './styles'
import { CategoryWidget } from '../../components/categories/category_widget/category_widget'


export const Header = () => {
  return (
    <Home>
    <HeaderContainer>
    <HeaderTextContainer>
        <h1> Bienvenido a Pastelería&CO</h1>
        <p>❤Plasmamos nuestra pasión en cada producto y atención❤</p>
        </HeaderTextContainer>
          <HeaderImageContainer>
        <img src="./src/assets/img/cake2.png" alt="" />
        </HeaderImageContainer>
    </HeaderContainer>
    <CategoryWidget/>
    </Home>
  )
  
}
