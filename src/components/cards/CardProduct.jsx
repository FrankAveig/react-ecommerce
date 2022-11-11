import {React,useContext, }from 'react'
import {Link, useNavigate } from "react-router-dom";
import './styles/cardProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus,faCircleInfo  } from '@fortawesome/free-solid-svg-icons'
import { CarritoContext } from '../../context/CarritoContext'
import { UserContext } from '../../context/UserContext'


const CardProduct = (props) => {
  const {user:{token}} = useContext(UserContext)
  const {saveItem} = useContext(CarritoContext)
  let navigate = useNavigate();

  const guardarProduct = async (id)=>{
    navigate(`/product/${id}`);
  }

  function guardar(product){
      token?saveItem(product):alert('Debes estar Logeado')
  }



  return (
    <>
      <div className='cardProduct'>
        <div className="img_container">
          <img src={props.img} alt="" />
        </div>
          <hr />
        <div className="description">
          <div className="text">
          <h3>{props.name}</h3>
          <h4>${props.price}</h4>
          </div>
          <div className="icons">
          {token?<FontAwesomeIcon icon={faCartPlus} onClick={(e)=>guardar(props)}/>:<Link to="/login"><FontAwesomeIcon icon={faCartPlus} onClick={(e)=>guardar(props)}/></Link>}
          <FontAwesomeIcon onClick={(e)=>{guardarProduct(props.id)}} icon={faCircleInfo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardProduct