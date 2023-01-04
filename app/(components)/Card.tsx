//'use-client'
import React from 'react'
import { Product } from '../../types/product'

const Card = ({title, price, description, category, image, rating}: Product) => {

  return (
    <div className="card card-compact m-2 bg-base-100 shadow-xl">
      <figure><img src={image} alt={title} className="h-48"/></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-lg font-800 tracking-wide">${price}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div> 
          <div className="badge badge-outline">Rating: {rating.rate}</div>
        </div>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  )
}

export default Card