import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../context/products'
import { CartContext } from '../context/cart'
// import {CartContext} from '../context/cart'
import { useHistory } from 'react-router-dom'
import Loading from '../components/Loading'
export default function ProductDetails () {
  const { id } = useParams()
  const history = useHistory()

  const { products } = React.useContext(ProductsContext)
  const { addToCart } = React.useContext(CartContext)
  const product = products.find(item => item.id == id)
  console.log(product)
  if (products.length === 0) {
    return <Loading />
  } else {
    const { image, title, price, description } = product
    const url = image.url
    return (
      <section className='single-product'>
        <img src={url} alt={title} className='single-product-image' />
        <article>
          <h1>{title}</h1>
          <h2>₹{price}</h2>
          <p>{description}</p>
          <button
            className='btn btn-primary btn-block'
            onClick={() => {
              // add to cart
              addToCart(product)
              history.push('/cart')
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    )
  }
}
