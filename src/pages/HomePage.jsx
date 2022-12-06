import React, { useEffect, useState, useContext } from 'react'
import images from '../assets/images/images'
import CardProduct from '../components/cards/CardProduct'
import './styles/defaultpage.css'
import { verProductos } from '../services/Products'

const HomePage = () => {




const [products , setProducts] =useState([])
const getProducts = async()=>{
  const {detalles} = await verProductos();
  setProducts(detalles)
}

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <>
      <section className='hero'>
        <div className="text-hero">
          <h2>Get Stylish With<br></br> The Latest</h2>
          <h3>Smartphone</h3>
          <p>Here you can find a wide variety of the latest high quality<br></br>
            smartphones at the best prices
          </p>
        </div>
        <img src={images.celularHome} alt="" />
        </section>
        <section className='products'>
          <div className="text-newProducts">
            <h2>New Products</h2>
            <p>There are many variations of passages of brands available</p>
          </div>
          <div className="container">
            {
              products.map((product,index)=>{
                if(index === 3){
                  return null
                }
                return(
                  <CardProduct key={index} img={product.img} name={product.name} id={product._id} price={product.price}/>
                )
              })
            }
          </div>
        </section>
        <section className='engage'>
            <img src={images.cel} alt="" />
            <div className="information">
              <h2>Iphone 14 and Iphone 14 plus</h2>
              <p>The iPhone 14 and the iPhone 14 Plus are Apple's new "affordable" flagship iPhones with pricing starting at $799, and the devices are being sold alongside the more expensive iPhone 14 Pro and iPhone 14 Pro Max.</p>
              <p>Apple did away with the "mini" iPhone in 2022, and the iPhone 14 models come in 6.1- and 6.7-inch sizes. The new 6.7-inch iPhone 14 is called the "iPhone 14 Plus," harkening back to the iPhone 8 and 8 Plus and prior generations. Apple's iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging.</p>
              <p>The iPhone 14 models come in blue, purple, midnight, starlight, and (PRODUCT)RED. Unlike the iPhone 14 Pro models, the iPhone 14 and 14 Plus continue to have a notch at the top of the display that houses the TrueDepth camera. Like the iPhone 13 models, the iPhone 14 and iPhone 14 Plus include Super Retina XDR OLED displays that support 1200 nits peak brightness, a 2,000,000:1 contrast ratio, Dolby Vision, and True Tone support for matching the white balance of the display to the lighting in the room. There is no ProMotion display technology available in the standard iPhone 14 models, with this</p>
            
            </div>
        </section>

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
    </>
  )
}

export default HomePage