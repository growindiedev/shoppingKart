import React from 'react'
import Card from '../(components)/Card'
import { Product } from '../../types/product';

async function getData(category: string) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async ({params} : {
  params: { category: string };
}) => {

  let data = await getData(params.category);

  return (
    <div className='grid gap-6 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] m-6 pt-20'>
      {data.map((product: Product) => <Card key={product.id} {...product}/>)}
    </div>
  )
}

export default page