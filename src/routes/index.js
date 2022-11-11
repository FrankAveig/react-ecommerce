import {useContext} from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import HomePage from '../pages/HomePage';
import SingInPage from '../pages/SingInPage';
import LoginPage from '../pages/LoginPage';
import Logout from '../components/Logout';
import AboutPage from '../pages/AboutPage';
import ProductsPage from '../pages/ProductsPage';
import ProfilePage from '../pages/ProfilePage'
import ContactPage from '../pages/ContactPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductoPage from '../pages/ProductoPage';
const RouterComponent = () => {
  const {user: {token,type}} = useContext(UserContext)
  



  return (
    
    <Routes>
      <Route path='/' element = {<HomePage/>} /> 
      {!token&&<Route path='/login' element = {<LoginPage/>}/>}
      {!token&&<Route path='/signin' element = {<SingInPage/>} />} 
      {token&&<Route path='/logout' element = {<Logout/>} />}
      <Route path='/product/:id' element = {<ProductoPage/>} />
      {token&&<Route path='/profile' element = {<ProfilePage/>} />}
      <Route path='/about' element = {<AboutPage/>} /> 
      <Route path='/products' element = {<ProductsPage/>} /> 
      <Route path='/contact' element = {<ContactPage/>} /> 
      {token&&<Route path='/checkout' element = {<CheckoutPage/>} /> }
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
export default RouterComponent