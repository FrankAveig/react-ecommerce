import {React, useContext }from 'react'
import { UserContext } from '../context/UserContext.js'
import{Link} from 'react-router-dom'
import images from '../assets/images/images.js'
import './styles/navigationBar.css'
const NavigationBar = (props) => {
  const {user:{token}} =useContext(UserContext);
  const publicRoutes =[
    <Link as={Link} to="/login" key={1}>Login</Link>,
    <Link as={Link} to="/registro" key={0}>Registro</Link>


  ] 


    return (
    <>
        <section className={props.class?'navigation':'footer-navigation'}>
            {props.img?<img className='logoNavbar' src={images.logo} alt="logo"  />:null}
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>MyProfile</Link></li>
                    <li><Link to='/checkout'>Chekout</Link></li>
                </ul>
            </nav>
            {props.login?<nav>
                <ul>
                    
                    { !token? <><li><Link to='/login'>Login</Link></li><li><Link to='/signin'>Sign in</Link></li></>
                    :<li><Link to='/logout'>Log out</Link></li>}
                    
                </ul>
            </nav>:null}
        </section>
    
    
    </>
    )  
}

export default NavigationBar