import React from 'react'
import images from '../assets/images/images'

const AboutPage = () => {
  return (
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
  )
}

export default AboutPage