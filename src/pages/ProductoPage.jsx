import {React, useEffect, useState,useContext }from 'react'
import { ProductoContext } from '../context/ProductoContext'
import { verProducto } from '../services/Products'


const ProductoPage = () => {
  const {product} = useContext(ProductoContext)

  const[producto,setProducto] = useState({})
  const verInfoProducto= async(id)=>{
   const data = await verProducto(id);
   setProducto(data)
  }
  useEffect(()=>{
    verInfoProducto(product)
  },[])
  return (

    <div>
      {console.log(producto[0])}
{/*       <h1>{producto[0].name}</h1>
      <img src={producto[0].img} alt="" />
      <p>{producto[0].description}</p>
      <p>Price: {producto[0].price}</p> */}
    </div>
  )
}

export default ProductoPage