import React from 'react'
import { Product } from '../../../types/product';


async function getData(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async ({params} : {
  params: { id: string };
}) => {
  let product: Product = await getData(params.id)
  return (
    <div className="hero min-h-screen bg-amber-50">
      <div className="hero-content flex-col lg:flex-row mx-[10%]">
        <img src={product.image} className="max-w-xs rounded-lg shadow-2xl mx-4" />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="my-6 text-justify">{product.description}</p>
          <div className="flex gap-2 my-6">
            <div className="flex-auto text-3xl">${product.price}</div>
            <div className="badge badge-accent">{product.category}</div> 
            <div className="badge badge-secondary">Rating: {product.rating.rate}</div>
          </div>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default page