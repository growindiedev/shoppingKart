import { Product } from '../types/product'

export const increaseCart = (cart: Product[], setCart: React.Dispatch<React.SetStateAction<Product[]>>, id: string) => {
  console.log('params', cart, id)
  setCart(cart.map(item => {
    if(item.id === parseInt(id)){
      if(item.cartQt){
        item.cartQt = item.cartQt + 1
      } else {
        item.cartQt = 0;
        item.cartQt = item.cartQt + 1
      }
    }
    return item
  }))
}

export const decreaseCart = (cart: Product[], setCart: React.Dispatch<React.SetStateAction<Product[]>>, id: string) => {
  setCart(cart.map(item => {
    if(item.id === parseInt(id)){
      if(item.cartQt && item.cartQt >= 1){
        item.cartQt = item.cartQt - 1
      } else {
        item.cartQt = 0;
      }
    }
    return item
  }))
}