import {React,useState, useContext} from 'react'
import './styles/LoginPage.css'
import images from '../assets/images/images'
import { UserContext } from '../context/UserContext'
import { singIn } from '../services/User'


const SingInPage = () => {
  const {guardarToken} = useContext(UserContext);
  const [errorMessage,setErrorMessage] = useState(null)
  const onSingIn =async (e)=>{
    e.preventDefault()
    const formData = new FormData (e.target)
    const data = Object.fromEntries(formData)
    const resp = await singIn(data)
    console.log(resp)
    if(resp.error){
      setErrorMessage(resp.error)
      console.log(resp.error)
    }else{
      setErrorMessage(null)
      guardarToken(resp.detalles.token,resp.detalles.type)
    }
  }
  return (
        <>
      <main className='main-login'>
        <section className='imagen'>
          <img src={images.imgLogin} alt="" />
        </section>
        <section className='form'>
          <form onSubmit={onSingIn}>
            <h2>SING IN</h2>
            <label htmlFor="">Name</label>
            <input required type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Surname</label>
            <input required type="text" placeholder='Enter your surname' name='surname' />
            <label htmlFor="">Address</label>
            <input required type="text" placeholder='Enter your addres' name='city' />
            <label htmlFor="">Age</label>
            <input required type="number" placeholder='Enter your age' name= 'age' />
            <label htmlFor="">E-mail</label>
            <input required type="email" placeholder='Enter your E-mail' name='mail'/>
            {errorMessage?<label className='error'>'This e-mail is aready used'</label>:<label></label>}

            <label htmlFor="">Password</label>
            <input required type="password"  placeholder='Enter your password' name ='password'/>
            <button type='summit'>Login</button>
            <p>Don't have an account?  <a href="">Sign up</a></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default SingInPage