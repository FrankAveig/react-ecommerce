import { useReducer } from 'react'
import {useEffect,useState}from 'react'
import { getUser,updateUser } from '../services/User'
import './styles/profilePage.css'


const Profile = () => {
  const[dataUser ,setDataUser] = useState({})
  const[flag ,setFlag] = useState(false)
  const[url,setUrl] = useState('')
  const[ignored,forceUpdate] = useReducer(x=>x+1,0) 
  const getInfoUser= async()=>{
    const usuario = await getUser();
    setDataUser(usuario)
    
  }

  const handleInputChange = ({target})=>{
    setUrl(target.value)
  }
  const urlPhoto=()=>{
      setFlag(true)
  }

  const update= async(id,url)=>{
    if(url==''){
      console.log(url)
    }else{
      const newUpdate = {
        "img": url
      }
      const data = await updateUser(id,newUpdate)
      forceUpdate()
    }
    setFlag(false)
  }

 
  useEffect(  ()=>{
    getInfoUser()
  },[ignored])
 


  return (
    <>
      <section className='profile'>
        <div className="card-profile">
          <h2>My Profile</h2>
          <img src={dataUser.img} alt="" />
          <div className="datosProfile">
          {flag?null:<button onClick={(e)=>{urlPhoto()}} >Update photo</button>}
          {flag?<><button onClick={(e)=>{update(dataUser._id,url)}}>Complete update</button> <input type='text' placeholder='Ingresa la url de la imagen' value={url} onChange={handleInputChange}/></>:null}
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