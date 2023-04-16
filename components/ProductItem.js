/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product}) {
  return (

    <div className="container mx-auto my-16 p-2">
      
    <div className="card bg-base-100 shadow-xl item">
   <Link href={`/product/${product.id}`}>
     <a>
       <img
        src={product.images[0]}
        alt={product.name}
        className="rounded shadow"
      />
    </a>
  </Link>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>
          {product.description.slice(0, 60)}{" "}
          <Link className="font-bold text-primary" href={`/product/${product.id}`}>
            more...
          </Link>
        </p>
        <h4 className="text-primary font-bold card text-2xl">${product.price}</h4>
        <div className="card-actions">
          <button
             onClick={() => {  }}
className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </div>
  
  );

}
