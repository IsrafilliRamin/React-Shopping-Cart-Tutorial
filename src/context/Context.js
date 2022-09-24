import React, { useContext } from 'react'
import { createContext } from 'react'
import { faker } from '@faker-js/faker';
import { useReducer } from 'react';
import { cartReducer, productReducer } from './Reducer';

const Cart = createContext()

const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
    id: faker.datatype?.uuid(),
    name: faker.commerce.department(),
    price: faker.commerce?.price(),
    image: faker.image.image(),
    inStock: faker.datatype?.boolean(),
    fastDelivery: faker.datatype?.boolean(),
    ratings: faker.random?.numeric() 

  }))
 

  const [state,dispatch] = useReducer(cartReducer,{
    products: products,
    cart: []
  })

  const [producState ,productDispatch] = useReducer(productReducer,{
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    serachQuery: "",
    sort: ""
  })

  return (
    <Cart.Provider value={{state,dispatch,producState,productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = ()=>(useContext(Cart))