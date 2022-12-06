import { useState } from 'react'
import {React, useContext} from 'react'
import PayaPalButton from '../components/PaypalButtons'
import { CarritoContext } from '../context/CarritoContext'
import './styles/checkout.css'

const CheckoutPage = () => {
  const {items} = useContext(CarritoContext)
  const {deleteItem} = useContext(CarritoContext)
  const ids = []

  items.map((item,index)=>ids.push(item.id))
  

  const deleted = (index)=>{
    deleteItem(index)
  }

  const total = items.reduce((va,sv)=>{
    return (
      (typeof va === "number" ? va : va.price) +
      sv.price
    );
    
  },0)

  let compraInfo = {
    'total': total,
    'products': ids
  }
  console.log(compraInfo)
  return (
    <main>
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
              <td><PayaPalButton amount={total} currency='USD' info={compraInfo} /></td>
            </tr>
          </tfoot>
        </table>
      </section>
    </main>
  )
}

export default CheckoutPage