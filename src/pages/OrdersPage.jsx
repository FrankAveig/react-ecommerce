import React, { useState } from 'react'
import { useEffect } from 'react'
import ModalProducts from '../components/ModalProducts'
import {getCompras} from '../services/Sale'
import './styles/checkout.css'
import './styles/orders.css'
const OrdersPage = () => {

  const[dataCompras ,setDataCompras] = useState({})
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState(true)
  const[dataShow, setDataShow] = useState(false)

const show = (index)=>{
  const dataProducts = dataCompras[index].products.map((product)=>{ return product})
  setProducts(dataProducts); 
  setDataShow(true);
  console.log(products)
}
const close = ()=>{
  setDataShow(false)
}

const getInfoComras = async()=>{
  const data = await getCompras()
  setDataCompras(data)
  if(data.error=== 'compras no encontradas'){
    setDataCompras(false)
  }
  setLoading(false)
  console.log(data)
}

useEffect(()=>{
  getInfoComras()
},[])


  
return loading?<div className="">cargando</div>:(
  <main>
     <div className="modal">
          {dataShow? <ModalProducts products= {products}><></><></><button onClick={(e)=>{close()}} >Close</button></ModalProducts> : null}
      </div>
    <section className="orders">
      <h2>My Orders</h2>
    <table>
        <thead>
          <tr>
            <th>Date</th>
            <th># Products</th>
            <th>Total</th>
            <th>State</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {dataCompras?dataCompras.map((dataCompra,index)=>{
            return (<tr key={index}><td align="center" valign="middle">{dataCompra.createdAt.slice(0,10)}</td><td>{dataCompra.products.length}</td><td>${dataCompra.total}</td><td>{dataCompra.state}</td><td><button onClick={(e)=>{show(index)}} >ver</button></td></tr>) 
          }):<p>No existen items aun</p>}
        </tbody>
        <tfoot> 
        </tfoot>
      </table>
   
    </section>
  </main>
  )
}

export default OrdersPage