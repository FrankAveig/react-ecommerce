import { useState,createContext } from 'react';
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
        };
        const[user,setUser]= useState(initialSstate)
        //! 5 Manejar el estado
        const guardarToken  = (newToken) =>{
            setUser({
                ...user,
                token:newToken,
            });
            localStorage.setItem('token',newToken);
          };

          const borrarInfoUser =()=>{
            setUser(initialSstate);
            localStorage.clear();
          }
        
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