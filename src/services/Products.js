import axios from 'axios'
const path= `https://api-ecommercee.vercel.app/v1/product`

export const verProductos = async ()=>{

  try{
      const {data} = await axios.get(`${path}/getAll`)
      return data
  }catch(e){
    console.log(e.response.data.detalles);
  }
}

export const verProducto = async(id)=>{
  try{
    const data= await axios.get(`${path}/verProducto/${id ? id : ''}`)
    return data;
  }catch(e){
    console.log(e.response.data.detalles )
  }
}
