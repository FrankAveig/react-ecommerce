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

export const singIn = async(UserInfo)=>{
  try{
    const {data} = await axios.post(`${path}`,UserInfo)
    return data
  }catch(e){
    return{error: e.response.data.detalles}
  }
}

export const getUser= async()=>{
  try{
    const {data:{detalles}} = await axios.get(`${path}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}

export const updateUser = async(id,img)=>{
  try{
    const {data:{detalles}} = await axios.put(`${path}/${id}`,img, { headers:{
      authorization: `Bearer ${localStorage.getItem("token")}`,
    }})
    return detalles;
  }catch(e){
    return{error: e.response.data.detalles}
  }
}