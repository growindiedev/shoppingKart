'use client'
import React, {useContext} from 'react'
import { StateContext } from '../StateProvider'
import CartItem from '../(components)/CartItem'
import { totalItemsInCart, totalCost } from '../utils'
import Link from 'next/link'

const Page = () => {

  const {cart} = useContext(StateContext);
  const cartItems = cart.filter(item => item.cartQt! > 0)

  if(cartItems.length === 0){
    return (
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there 👋🏼</h1>
            <p className="py-6">It seems like your cart is empty. Go get some stuff for yourself 🥹</p>
          </div>
        </div>
      </div>
    )
  } 

  return (
    <div className="relative">
      {cartItems.map(item => <CartItem key={item.id} product={item}/>)}
      <div className="card card-compact glass w-1/4 bg-base-100 drop-shadow-xl fixed bottom-8 right-8">
        <div className="card-body">
          <span className="font-bold text-lg">{totalItemsInCart(cart)} Items</span>
          <span className="text-info">Subtotal: ${totalCost(cart)}</span>
          <div className="card-actions">
            <label htmlFor="my-modal-6" className="btn btn-outline btn-secondary">Checkout</label>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p className="py-4">Your order has been place. Check you email for tracking details.</p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">Yay!</label>
          </div>
        </div>
      </div>
    </div>
  )
  
}

export default Page