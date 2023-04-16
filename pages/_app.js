import '../styles/globals.css';
import Layout from '../components/Layout';
import { StoreProvider } from '../utils/Store';
import { useState, useEffect } from 'react';
import ProductItem from '../components/ProductItem';


function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
      try {
          if (localStorage.getItem(cart) !== null) {
              setCart(JSON.parse(localStorage.getItem(cart)))
              saveCart(JSON.parse(localStorage.getItem(cart)))
          }
      }
      catch (error) {
          console.log(error)
          localStorage.clear()
      }
  }, [])

  const saveCart = (cart) => {
      localStorage.setItem(cart, JSON.stringify(cart))

      // calculate subtotal
      let total = 0
      let keys = Object.keys(cart)

      for (let i = 0; i < keys.length; i++) {
          total += cart[keys[i]].qty * cart[keys[i]].price
      }
      setSubTotal(total)
  }

  const addToCart = (slug, name, price, qty) => {
      let newCart = cart

      if (slug in cart) {
          newCart[slug].qty += qty
      }

      else {
          newCart[slug] = { name,price, qty: 1,}
      }

      setCart(newCart)
      saveCart(newCart)
  }

  const clearCart = () => {
      // clear cart
      setCart({})
      // pass empty cart to saveCart, because setCart is async and we need to clear cart before saving
      saveCart({})
  }

  const removeFromCart = (itemCode) => {
      let newCart = cart
      if (itemCode in cart) {
          // if qty is 1, remove item from cart
          if (newCart[itemCode].qty === 1) {
              delete newCart[itemCode]
          }
          else {
              newCart[itemCode].qty -= 1
          }
      }
      setCart(newCart)
      saveCart(newCart)
  }

  return (<>

      <Layout key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart
      } clearCart={clearCart} subTotal={subTotal} />
      <Component cart={cart} key={subTotal} addToCart={addToCart} removeFromCart={removeFromCart
      } clearCart={clearCart} subTotal={subTotal} {...pageProps} />


  </>);
  
}

MyApp.getInitialProps = async (appContext) => {
  // ...

  return {
    // ...
  }
}
export default MyApp;
