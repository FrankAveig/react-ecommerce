import {React, useContext} from 'react'
import { CarritoContext } from '../context/CarritoContext'
import './styles/checkout.css'


const CheckoutPage = () => {
  const {items} = useContext(CarritoContext)
  console.log(items)

  const total = items.reduce((va,sv)=>{
    return (
      (typeof va === "number" ? va : va.price) +
      sv.price
    );
    
  },0)
  return (
    <section className="checkout">
      <table>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
          {items?items.map((item,index)=>{
            return (<tr><td align="center" valign="middle"><img  src={item.img} alt="" /></td> <td>{item.name}</td><td>${item.price}</td></tr>) 
          }):<p>No existen items aun</p>}
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total}</td>
          </tr>
      </table>
    </section>
  )
}

export default CheckoutPage