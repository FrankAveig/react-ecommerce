import { useState,createContext,useEffect } from 'react';
import {React} from 'react'

//! 1 Crear el conntexto para el usuario

const ProductoContext= createContext()

//! 2 Vamos a obtener al provider del user context
const{Provider} = ProductoContext;

//! 3 crear componente
const ProductoProvider = ({children}) => {

        //! 4 Creamos nuestro estado global
        const[product,setProduct]= useState({_id:null})
        //! 5 Manejar el estado

        const saveProduct = (id) =>{
          setProduct({_id:id})
        }



        //! 6 Retornamos el componente
  return (
    <Provider value={{
        product,
        saveProduct,
    
    }}
    >
        {children}
    </Provider>
  );
};
    //! 7 Exportarmos provider & context
export {ProductoProvider,ProductoContext}