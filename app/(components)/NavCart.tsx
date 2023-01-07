'use client'
import React, {useContext} from 'react'
import Link from 'next/link'
import { StateContext } from '../StateProvider'


const NavCart = () => {

  const {cart} = useContext(StateContext)
  
  let totalItems = cart.reduce((acc, value) => { 
      if(!value.cartQt){
        return acc
      }
      return acc + value.cartQt
  }, 0)

  let totalCost = cart.filter(item => item.cartQt && item.cartQt > 0).reduce((acc, {cartQt, price}) => acc + cartQt! * price, 0)

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{totalItems}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{totalItems} Items</span>
          <span className="text-info">Subtotal: ${totalCost}</span>
          <div className="card-actions">
            <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavCart