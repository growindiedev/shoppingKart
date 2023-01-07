export type Product = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
  cartQt?: number
}



export type ShoppingCartStateType = Array<Product>;