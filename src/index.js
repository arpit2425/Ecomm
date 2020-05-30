import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ProductsContextProvider from './context/products'
import { CartContext, CartProvider } from './context/cart'
import { UserContext, UserProvider } from './context/user'

ReactDOM.render(
  <UserProvider>
    <ProductsContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsContextProvider>
  </UserProvider>,
  document.getElementById('root')
)
