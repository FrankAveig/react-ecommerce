import axios from 'axios'
const path= `https://api-ecommercee.vercel.app/v1/product`
console.log(path)

export const verProductos = async ()=>{

  try{
      const {data} = await axios.get(`${path}/getAll`)
      return data
  }catch(e){
    console.log(e.response.data.detalles);
  }
}

