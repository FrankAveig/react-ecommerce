import axios from 'axios'
const path= `https://api-ecommercee.vercel.app/v1/user`

export const login= async (UserInfo)=>{
    try{
      const {data} = await axios.post(`${path}/login`,UserInfo);
      return data
    }catch(e){
      return { error: e.response.data.detalles}
    }
  
  }