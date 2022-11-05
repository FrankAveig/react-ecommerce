import { useState,createContext,useEffect } from 'react';
import {React} from 'react'

//! 1 Crear el conntexto para el usuario

const UserContext= createContext()

//! 2 Vamos a obtener al provider del user context
const{Provider} = UserContext;

//! 3 crear componente
const UserProvider = ({children}) => {

        //! 4 Creamos nuestro estado global
        const initialSstate = {
            token:null,
            type:null,
            id:null,
        };
        const[user,setUser]= useState(initialSstate)
        //! 5 Manejar el estado
        const guardarToken  = (newToken,newType,newID) =>{
            setUser({
                ...user,
                id:newID,
                token:newToken,
                type:newType
            });
            localStorage.setItem('token',newToken);
            localStorage.setItem('type',newType);
            localStorage.setItem('id',newID);
          };

          const borrarInfoUser =()=>{
            setUser(initialSstate);
            localStorage.clear();
          }

          useEffect(()=>{
            const token = localStorage.getItem('token')
            const type = localStorage.getItem('type')
            const id = localStorage.getItem('id')
            if(token&&type&&id){
              guardarToken(token,type,id)
            }else{
              localStorage.clear();
            }
              // eslint-disable-next-line react-hooks/exhaustive-deps
            }, []);
        
        //! 6 Retornamos el componente
  return (
    <Provider value={{
        user, 
        guardarToken,
        borrarInfoUser,
    }}
    >
        {children}
    </Provider>
  );
};
    //! 7 Exportarmos provider & context
export {UserProvider,UserContext}