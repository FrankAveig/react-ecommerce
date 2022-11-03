import React from 'react'
import images from '../assets/images/images.js'
import './styles/navigationBar.css'
const NavigationBar = () => {
  return (
    <>
        <section className="navigation">
            <img className='logoNavbar' src={images.logo} alt="logo"  />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>Login</li>
                </ul>
            </nav>
        </section>
    
    
    </>
  )
}

export default NavigationBar