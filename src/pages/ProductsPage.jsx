import React, { useEffect, useState, useContext } from 'react'
import CardProduct from '../components/cards/CardProduct'
import { verProductos } from '../services/Products'

const ProductsPage = () => {

  const [products , setProducts] =useState([])

  const getProducts = async()=>{
  const {detalles} = await verProductos();
  setProducts(detalles)
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <section className='products'>
    <div className="text-newProducts">
      <h2>All Products</h2>
      <p>There are many variations of passages of brands available</p>
    </div>
    <div className="container">
      {
        products.map((product,index)=>{
          return(
            <CardProduct key={index} img={product.img} name={product.name} price={product.price}/>
          )
        })
      }
    </div>
  </section>
  )
}

export default ProductsPage