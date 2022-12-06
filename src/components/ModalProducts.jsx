import React from 'react'
import './styles/modalProducts.css'
const ModalProducts = ({products,children}) => {
  return (
    <>
    <div className="background">
      <section className='productos'>
      {children[0]}
      <h2>Details of Products</h2>
        {products.map((product,index)=>{return (<article className='producto'><img src={product.img}/><p>Name: {product.name}</p> <p>Price: {product.price}</p></article>)})}
      {children[1]}
      {children[2]}
      </section>
    </div>
    </>
  )
}

export default ModalProducts