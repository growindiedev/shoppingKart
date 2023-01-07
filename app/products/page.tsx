import React from 'react'
import Card from '../(components)/Card'
import { Product } from '../../types/product';

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async () => {
  let data = await getData();
  return (
    <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m-6 pt-20'>
      {data.map((product: Product) => <Card key={product.id} {...product}/>)}
    </div>
  )
}

export default page