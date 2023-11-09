import React from 'react'
import { ProductoCard } from './styles'
import { Button } from '../../button/button'

export const ProductCard = ({img, title, price}) => {
  return (
    <ProductoCard>
        <img src={img} alt="" />
        <h2>{title}</h2>

        <div>
            <p>${price}</p>
            <Button>Agregar</Button>
        </div>
    </ProductoCard>
  )
}