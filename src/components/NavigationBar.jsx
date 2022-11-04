import React from 'react'
import images from '../assets/images/images.js'
import './styles/navigationBar.css'
const NavigationBar = (props) => {
  return (
    <>
        <section className={props.class?'navigation':'footer-navigation'}>
            {props.img?<img className='logoNavbar' src={images.logo} alt="logo"  />:null}
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </nav>
            {props.login?<nav>
                <ul>
                    <li>Login</li>
                    <li>Sign in</li>
                </ul>
            </nav>:null}
        </section>
    
    
    </>
  )
}

export default NavigationBar