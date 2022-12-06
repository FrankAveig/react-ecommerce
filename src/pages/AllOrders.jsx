import React, { useState, useReducer } from 'react'
import { useEffect } from 'react'
import ModalProducts from '../components/ModalProducts'
import {getAllCompras,updateCompra} from '../services/Sale'
import './styles/orders.css'
import './styles/allOrders.css'
const AllOrders = () => {
  const[dataCompras ,setDataCompras] = useState({})
  const[dataBuyer , setDataBuyer] = useState(null)
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState(true)
  const[dataShow, setDataShow] = useState(false)
  const[index,setIndex] = useState(null)
  const[ignored,forceUpdate] = useReducer(x=>x+1,0) 

const show = (index)=>{
  const dataProducts = dataCompras[index].products.map((product)=>{ return product})
  const dataBuyer = dataCompras[index].buyer
  setProducts(dataProducts); 
  setDataBuyer(dataBuyer)
  setIndex(index)
  setDataShow(true);
}
const close = ()=>{
  setDataShow(false)
}

const getInfoComras = async()=>{
  const data = await getAllCompras()
  setDataCompras(data)
  if(data.error=== 'Colección vacía'){
    setDataCompras(false)
  }
  setLoading(false)
}

const update = async(id,word)=>{
  const update = {
    "state": word
  }
  const data = await updateCompra(id,update)
  forceUpdate()

}

useEffect(()=>{
  getInfoComras()

},[ignored])

return loading?<div className="">cargando</div>:(
  <main>
     <div className="modal">
          {dataShow? <ModalProducts products= {products}><div className='buyer'><h4>Buyer</h4><img src={dataBuyer.img}/> <p>Name: {dataBuyer.name}</p><p>Address: {dataBuyer.city}</p></div><div className='update'><h4>Update State</h4><div><button onClick={(e)=>{update(dataCompras[index]._id,'Ordered')}}>Ordered</button><button  onClick={(e)=>{update(dataCompras[index]._id,'Confirmed')}}>Confirmed</button><button onClick={(e)=>{update(dataCompras[index]._id,'Sent')}}>Sent</button></div></div><button onClick={(e)=>{close()}} >Close</button></ModalProducts> : null}
      </div>
    <section className="orders">
    <h2>All Orders</h2>

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

export default AllOrders