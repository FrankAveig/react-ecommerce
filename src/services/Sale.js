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