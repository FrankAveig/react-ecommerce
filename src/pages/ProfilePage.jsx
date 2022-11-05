import {useEffect,useState}from 'react'
import { getUser } from '../services/User'
import { getCompras } from '../services/Sale'
import './styles/profilePage.css'


const Profile = () => {
  const[dataUser ,setDataUser] = useState({})
  const [compraUser ,setCompraUser] =useState({})
  
  const getInfoUser= async()=>{
    const usuario = await getUser();
    setDataUser(usuario)
  }

  const getUserCompras= async()=>{
    const compras = await getCompras();
    setCompraUser(compras)
  }

  useEffect(  ()=>{
    getInfoUser()
    getUserCompras()
  },[])
 
  console.log(compraUser)
 /*  console.log(dataUser)
  console.log(compraUser[0].createdAt.slice(0,10))
  console.log(compraUser) */

  return (
    <>
      <section className='profile'>
        <div className="card-profile">
          <h2>My Profile</h2>
          <img src={dataUser.img} alt="" />
          <div className="datosProfile">
            <p>Name: {dataUser.name}</p>
            <p>Type of User: {dataUser.type}</p>
            <p>Mail: {dataUser.mail}</p>
            <p>Age: {dataUser.age}</p>
          </div>
        </div>
      </section>
      <section className='shopping'>
      </section>
    </>
  )
}

export default Profile