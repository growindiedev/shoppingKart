import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="drawer relative">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
          <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">SaddaGalla</h1>
                <p className="mb-5">Check out our latest collection</p>
                {/* <button className="btn btn-primary">Shop</button> */}
                <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
              </div>
            </div>
          </div>
          {/* Page content here */}
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            
          </ul>
        </div>
      </div>
    </>
  )
}
