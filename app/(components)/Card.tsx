'use client'
import React, {useContext} from 'react'
import { Product } from '../../types/product'
import { increaseCart } from '../utils'
import { StateContext } from '../StateProvider'
import Link from 'next/link'

const Card = (product: Product) => {

  const {title, price, category, image, rating, id} = product;
  const {cart, setCart} = useContext(StateContext)


  return (
    <div className="card card-compact m-2 bg-base-100 shadow-xl">
      <figure><img src={image} alt={title} className="h-48"/></figure>
      <div className="card-body">
        <h2 className="card-title">
        <Link className="link link-hover" href={`products/${id}`}>
          {title}
        </Link>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-lg font-800 tracking-wide text-blue-500">${price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div> 
          <div className="badge badge-outline">Rating: {rating.rate}</div>
        </div>
        <button className="btn btn-primary m-4" onClick={() => increaseCart(cart, setCart, String(id))}>Add to cart</button>
      </div>
    </div>
  )
}



export default Card
