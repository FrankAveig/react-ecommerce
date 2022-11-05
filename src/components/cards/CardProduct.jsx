import {React,useContext,useState }from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/images/images'
import './styles/cardProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faCircleInfo  } from '@fortawesome/free-solid-svg-icons'
import { CarritoContext } from '../../context/CarritoContext'
import { UserContext } from '../../context/UserContext'
import { ProductoContext } from '../../context/ProductoContext'


const CardProduct = (props) => {
  const {saveProduct} = useContext(ProductoContext)
  const {user:{token}} = useContext(UserContext)
  const {saveItem} = useContext(CarritoContext)
  function guardarProduct(id){
    saveProduct(id)
  }
  function guardar(product){
      token?saveItem(product):alert('Debes estar Logeado')
  }



  return (
    <>
      <div className='cardProduct'>
        <img src={props.img} alt="" />
          <hr />
        <div className="description">
          <div className="text">
          <h3>{props.name}</h3>
          <h4>${props.price}</h4>
          </div>
          <div className="icons">
          {token?<FontAwesomeIcon icon={faCartPlus} onClick={(e)=>guardar(props)}/>:<Link to="/login"><FontAwesomeIcon icon={faCartPlus} onClick={(e)=>guardar(props)}/></Link>}
          <Link to="/product"><FontAwesomeIcon onClick={(e)=>{guardarProduct(props.id)}} icon={faCircleInfo} /></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProduct