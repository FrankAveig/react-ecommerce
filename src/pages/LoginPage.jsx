import {React,useState, useContext }from 'react'
import './styles/LoginPage.css'
import images from '../assets/images/images'
import { login } from '../services/User'
import { UserContext } from '../context/UserContext'
const LoginPage = () => {
  const {guardarToken} = useContext(UserContext)
  const [errorMessage,setErrorMessage]=useState(null)

  const onSubmited= async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const data =Object.fromEntries(formData)
    const resp = await login(data)
    console.log(resp.detalles.token)
    if(resp.error){
      setErrorMessage(resp.error)
    }else{
      setErrorMessage(null)
      guardarToken(resp.detalles.token,resp.detalles.type)
      e.target.reset()
    } 

  }


  return (
    <>
      <main className='main-login'>
        <section className='imagen'>
          <img src={images.imgLogin} alt="" />
        </section>
        <section className='form'>
          <form onSubmit={onSubmited}>
            <h2>LOGIN</h2>
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder='Enter your E-mail' name='mail'/>
            {errorMessage==='Usuario no encontrado'?<label className='error'>{errorMessage}</label>:<label></label>}
            <label htmlFor="">Password</label>
            <input type="password"  placeholder='Enter your password' name='password' />
            {errorMessage==='Contraseña incorrecta'?<label className='error'>{errorMessage}</label>:<label></label>}

            <button type='summit'>Login</button>
            <p>Don't have an account?  <a href="">Sign up</a></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default LoginPage