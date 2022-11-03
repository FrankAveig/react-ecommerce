import React from 'react'
import images from '../../assets/images/images'
import './styles/cardProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faCircleInfo  } from '@fortawesome/free-solid-svg-icons'
const hola =()=>{
  alert('hola')
}
const CardProduct = (props) => {
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
          <FontAwesomeIcon icon={faCartPlus} onClick={hola}/>
          <FontAwesomeIcon icon={faCircleInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProduct