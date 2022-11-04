import React from 'react'
import './styles/LoginPage.css'
import images from '../assets/images/images'


const SingInPage = () => {
  return (
        <>
      <main>
        <section className='imagen'>
          <img src={images.imgLogin} alt="" />
        </section>
        <section className='form'>
          <form action="">
            <h2>SING IN</h2>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' />
            <label htmlFor="">Surname</label>
            <input type="text" placeholder='Enter your surname' />
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter your city' />
            <label htmlFor="">Age</label>
            <input type="number" placeholder='Enter your age' />
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder='Enter your E-mail'/>
            <label htmlFor="">Password</label>
            <input type="password"  placeholder='Enter your password'/>
            <button type='summit'>Login</button>
            <p>Don't have an account?  <a href="">Sign up</a></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default SingInPage