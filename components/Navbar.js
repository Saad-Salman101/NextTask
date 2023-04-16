import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useRef } from "react";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart }) => {
  // console.log(myproducts.myproducts.products)
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    }
    else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }
  }
  const ref = useRef()
  return (
    <div className="shadow-md flex flex-col md:flex-row md:justify-start justify-center items-center py-3 sticky top-0 z-10 bg-white">
      <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/">
          <a className="text-lg font-bold">NC</a>
        </Link>
        <div>

          <div className="flex cart absolute right-0 mx-5 cursor-pointer">
            <AiOutlineShoppingCart onClick={toggleCart} size={30} className="text-red-500" />
          </div>

          <div ref={ref} className={`w-72 h-[100vh] sideCart absolute bg-white top-0 right-0 py-10 px-8 transform transition-transform ${cart && Object.keys(cart).length !== 0 ? 'translate-x-0' : 'translate-x-full'}`}>
            <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
            <span onClick={toggleCart} className="absolute top-3 right-2 cursor-pointer text-2xl text-red-500"><AiFillCloseCircle /></span>

            <ol className="list-decimal font-semibold">
              {/* empty cart message */}
              {cart && Object.keys(cart).length === 0 && <div className="flex flex-col items-center justify-center h-full">
                <BsBagCheckFill size={50} className='mt-4 text-blue-400' />
                <h2 className="text-xl font-sm mt-3">Your cart is empty</h2>
              </div>}

              {/* displaying cart */}
              {cart && Object.keys(cart).map((k) => {
                console.log(cart)
                return <li key={cart.id} >
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="w-2/3 font-semibold">{cart[k].price}</div>
                    <div className="flex items-center justify-center w-1/3 font-semibold">
                      <AiFillMinusCircle onClick={() => { removeFromCart(k) }} className="cursor-pointer text-red-500" />
                      <span className="mx-2">{cart[k].qty} </span>
                      <AiFillPlusCircle onClick={() => { addToCart(k, cart[k].name, cart[k].price, 1) }} className="cursor-pointer text-red-500" /></div>
                  </div>
                </li>
              })}

            </ol>

            {cart && (Object.keys(cart).length !== 0) && <div className="flex">
              <Link href={'/checkout'} >
                <button className="flex mx-auto mr-2 text-white bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm"><BsBagCheckFill className="m-1" />Checkout</button>
              </Link>
              {/* clear cart button */}
              <button onClick={clearCart} className="flex mx-auto mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Clear Cart</button>
            </div>
            }
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
