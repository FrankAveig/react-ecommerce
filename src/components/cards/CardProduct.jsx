import {React,useContext }from 'react'
import images from '../../assets/images/images'
import './styles/cardProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faCircleInfo  } from '@fortawesome/free-solid-svg-icons'
import { CarritoContext } from '../../context/CarritoContext'


const CardProduct = (props) => {
  const {saveItem} = useContext(CarritoContext)
  const {items} = useContext(CarritoContext)
  
  function guardar(product){
    saveItem(product)
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
          <FontAwesomeIcon icon={faCartPlus} onClick={(e)=>guardar(props)}/>
          <FontAwesomeIcon icon={faCircleInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProduct