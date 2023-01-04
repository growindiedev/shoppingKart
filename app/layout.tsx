import './globals.css'
import Navbar from './(components)/Navbar'
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://fakestoreapi.com/products/categories');
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

  let categories = await getData()

  return (
    <html lang="en" data-theme="emerald">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
     <Navbar/>
     <div className="drawer relative">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
        {children}  
        {/* Page content here */}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            {
              categories.map((category: string) => <li key={category}><Link href="#">{category}</Link></li>)
            }
          </ul>
        </div>
      </div>
      </body>
    </html>
  )
}
