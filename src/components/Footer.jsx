import React from 'react'
import images from '../assets/images/images'
import NavigationBar from './NavigationBar'
import { FaGithub } from 'react-icons/fa';
import './styles/footer.css'
export const Footer = () => {
  return (
    <>
      <footer>
        <img src={images.logo} alt="" />
        <div className="nav">
          <NavigationBar/>
        </div>
        <div className="last">
          <h4>Developed by Frank Aveiga  </h4> <a href="https://github.com/FrankAveig" target='_blank'><FaGithub/></a>
        </div>
      </footer>
    </>
  )
}
