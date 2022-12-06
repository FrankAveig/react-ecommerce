import {React, useContext, useState }from 'react'
import { UserContext } from '../context/UserContext.js'
import{Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import images from '../assets/images/images.js'
import './styles/navigationBar.css'
const NavigationBar = (props) => {
    const {user:{token,type}} =useContext(UserContext);
    const publicRoutes =[
    <Link as={Link} to="/login" key={1}>Login</Link>,
    <Link as={Link} to="/registro" key={0}>Registro</Link>
] 

    const [active,setActive] = useState('navigation-m')
    const activate = ()=>{
        if(active === 'navigation-m' ){
            setActive('navigation-m is-active')
        }else{
            setActive('navigation-m')
        }
    }
    return (
    <>
        <section className={props.class?'navigation':'footer-navigation'}>
            {props.img?<img className='logoNavbar' src={images.logo} alt="logo"  />:null}
            <FontAwesomeIcon icon={faBars}  onClick={(e)=>{activate()}}/>
            <nav className={active}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    {token?<li><Link to='/profile'>My Profile</Link></li>:null}
                    {type=='customer'?<li><Link to='/myorders'>My Orders</Link></li>:null}
                    {type=='admin'?<li><Link to='/allorders'>All Orders</Link></li>:null}
                    {token?<li><Link to='/checkout'>Chekout</Link></li>:null}
                </ul>
            </nav>
            {props.login?<nav className='navigation-2'>
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