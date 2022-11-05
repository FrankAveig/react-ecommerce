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
const RouterComponent = () => {
  const {user: {token,type}} = useContext(UserContext)
  

  const customerRoutes=[
    {path:'/', element : <HomePage/>},
    {path:'/login', element : <LoginPage/>},
    {path:'/singin', element : <SingInPage/>}
  ]


  return (
    
    <Routes>
      <Route path='/' element = {<HomePage/>} /> 
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/signin' element = {<SingInPage/>} /> 
      <Route path='/logout' element = {<Logout/>} />
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