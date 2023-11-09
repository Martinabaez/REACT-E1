import React from 'react'
import { CardCategoria } from './styles'

export const CategoryCard = ({ img, title, category}) => {
  return (
    <CardCategoria>
    <img src={img} alt= {category} />
    <h2> {title} </h2>
    </CardCategoria>
  )
}
