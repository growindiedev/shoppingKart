import React from 'react'
import { Product } from '../../types/product'
import ManageCart from './ManageCart'

const CartItem = ({product}: { product: Product}) => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row mx-[10%] my-10">
        <img src={product.image} className="max-w-xs rounded-lg shadow-2xl mx-10" />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-6 text-justify">{product.description}</p>
          <div className="flex gap-2 my-6">
            <div className="flex-auto text-3xl">${product.price}</div>
            <div className="badge badge-accent">{product.category}</div> 
            <div className="badge badge-secondary">Rating: {product.rating.rate}</div>
          </div>
          <ManageCart id={String(product.id)}/>
        </div>
      </div>
    </div>
  )
}

export default CartItem