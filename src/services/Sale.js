import axios from 'axios'
const path= `https://api-ecommercee.vercel.app/v1/sale`

export const getCompras= async()=>{
  try{
    const {data:{detalles}} = await axios.get(`${path}/compras`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}

export const getAllCompras= async()=>{
  try{
    const {data:{detalles}} = await axios.get(`${path}/getAll`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}

export const newCompra = async(saleInfo)=>{
  try{
    const {data:{detalles}} = await axios.post(`${path}/`,saleInfo, { headers:{
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }})
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}

export const updateCompra = async(id,state)=>{
  try{
    const {data:{detalles}} = await axios.put(`${path}/estado/${id}`,state, { headers:{
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }})
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}