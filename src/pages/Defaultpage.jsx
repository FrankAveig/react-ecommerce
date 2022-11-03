import React from 'react'
import { Link } from 'react-router-dom'
import images from '../assets/images/images'
import './styles/defaultpage.css'
const Defaultpage = () => {
  return (
    <>
        <section className='hero'>
                <div className="text-hero">
                  <h2>Get Stylish With<br></br> The Latest</h2>
                  <h3>Smartphone</h3>
                  <p>Here you can find a wide variety of the latest high quality<br></br>
                    smartphones at the best prices
                  </p>
                <a href=''>Shop Now</a>
                </div>
                <img src={images.celularHome} alt="" />
        </section>
    <div className='background'>
        <div className="">
            <h1>hola</h1> 
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
            <h1>hola</h1>
        </div>
            <h1>hola</h1>
    </div>
    </>
  )
}

export default Defaultpage