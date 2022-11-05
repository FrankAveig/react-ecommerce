import {React, useContext} from 'react'
import { CarritoContext } from '../context/CarritoContext'
import './styles/checkout.css'


const CheckoutPage = () => {
  const {items} = useContext(CarritoContext)
  const {deleteItem} = useContext(CarritoContext)
  console.log(items)

  const deleted = (index)=>{
    deleteItem(index)
  }

  const total = items.reduce((va,sv)=>{
    return (
      (typeof va === "number" ? va : va.price) +
      sv.price
    );
    
  },0)
  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items?items.map((item,index)=>{
            return (<tr key={index}><td align="center" valign="middle"><img  src={item.img} alt="" /></td><td>{item.name}</td><td>${item.price}</td><td><button onClick={(e)=>{deleted(index)}} >Elimiar</button></td></tr>) 
          }):<p>No existen items aun</p>}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total</td>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}

export default CheckoutPage