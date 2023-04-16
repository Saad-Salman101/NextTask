import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import Navbar from '../components/Navbar';

export default function Home(myproducts,cart, addToCart, removeFromCart, clearCart,subTotal) {
  // console.log(myproducts.myproducts.products)
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
const ref = useRef()
  return (
    <>
    <Layout title="Home Page">
    <Navbar key={subTotal} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart
        } clearCart={clearCart} subTotal={subTotal}  />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {myproducts.myproducts.products.map((product) => (
          <ProductItem product={product} addToCart={addToCart} cart={cart} key={product.id} ></ProductItem>
        ))}
      </div>
    </Layout>
    </>
  );
}


// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  
  const res = await fetch('https://dummyjson.com/products');
  const myproducts = await res.json()
  
  
  return {
    props: {
      myproducts,
    },
  }
}