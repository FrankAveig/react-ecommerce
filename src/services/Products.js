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
    const {data:{detalles}} = await axios.post(`${path}/verProducto`,id)
    console.log(detalles,'get')
    return detalles;
  }catch(e){
    console.log(e.response.console.log(e.response.data.detalles) )
  }
}
