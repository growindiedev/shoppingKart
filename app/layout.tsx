import './globals.css'
import Navbar from './(components)/Navbar'
import Link from 'next/link';
import { StateContext, StateProvider } from './StateProvider';
import {Product} from '../types/product'


async function getData() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  let products: Product[]  = await getData()
  let categories = [...new Set(products.map(item => item.category))]

  return (
    <html lang="en" data-theme="emerald">
      <head />
      <body>
        <div className="drawer relative">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <StateProvider products={products}>
                <Navbar/>
                {children}  
              </StateProvider>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 bg-base-100 text-base-content glass">
                {/* Sidebar content here */}
                {
                  categories.map((category: string) => <li key={category}><Link href={`/${category}`}>{category}</Link></li>)
                }
              </ul>
            </div>
          </div>
      </body>
    </html>
  )
}
