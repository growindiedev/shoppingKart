'use client'
import React, {useContext} from 'react'
import { StateContext } from '../StateProvider'
import CartItem from '../(components)/CartItem'

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
    <>
      {cartItems.map(item => <CartItem key={item.id} product={item}/>)}
    </>
  )
  
}

export default Page