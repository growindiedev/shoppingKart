'use client'
import React, {useContext} from 'react'
import { StateContext } from '../StateProvider'
import { decreaseCart, increaseCart} from '../utils'


const ManageCart = ({id}: {id: string}) => {

  const {cart, setCart} = useContext(StateContext)

  const totalItems = cart.find( item => item.id === parseInt(id))?.cartQt
 
  return (
    <div className="btn-group justify-center m-4">
      <button className="btn btn-primary" onClick={() => increaseCart(cart, setCart, id)}>+</button>
      <div className="btn btn-disabled text-blue-700">{totalItems}</div>
      <button className="btn btn-primary" onClick={() => decreaseCart(cart, setCart, id)}>-</button>
    </div> 
  )
}

export default ManageCart