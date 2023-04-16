import Head from 'next/head';
import Link from 'next/link';
import React, { useRef, useContext, useEffect, useState } from 'react';
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
// import { Store } from '../utils/Store';

export default function Layout({ title, children, cart, addToCart, removeFromCart, clearCart }) {

  // const { state } = useContext(Store);
  // const { cart } = state;
  // const [cartItemsCount, setCartItemsCount] = useState(0);
  // useEffect(() => {
  //   setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  // }, [cart.cartItems]);

//   const toggleCart = () => {
//     if (ref.current.classList.contains("translate-x-full")) {
//         ref.current.classList.remove("translate-x-full")
//         ref.current.classList.add("translate-x-0")
//     }
//     else if (!ref.current.classList.contains("translate-x-full")) {
//         ref.current.classList.remove("translate-x-0")
//         ref.current.classList.add("translate-x-full")
//     }
// }
// const ref = useRef()

  return (
    <>
      <Head>
        <title>{title ? title + ' - NC' : 'NC'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
        </footer>
      </div>
    </>
  );
}
