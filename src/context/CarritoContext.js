import { useState,createContext,useEffect } from 'react';
import {React} from 'react'

//! 1 Crear el conntexto para el usuario

const CarritoContext= createContext()

//! 2 Vamos a obtener al provider del user context
const{Provider} = CarritoContext;

//! 3 crear componente
const CarritoProvider = ({children}) => {

        //! 4 Creamos nuestro estado global
        const[items,setItems]= useState([])
        const[carrito,setCarrito]= useState([])
        //! 5 Manejar el estado

        const saveItem = (newItem) =>{
          setItems([...items, newItem])
          localStorage.setItem('items',JSON.stringify(items));
        }

        useEffect(()=>{
          const pasados = JSON.parse(localStorage.getItem('items'))
          if(pasados){
            setItems(pasados)
          }
        },[])
        const deleteItem = (index)=>{
         /*  const newItem =[...items];
          newItem.splice(index,1);
          setItems(newItem); */
        }

        const cleanItems = () => setCarrito([]);


        //! 6 Retornamos el componente
  return (
    <Provider value={{
        items, 
        saveItem,
        deleteItem,
        cleanItems
    }}
    >
        {children}
    </Provider>
  );
};
    //! 7 Exportarmos provider & context
export {CarritoProvider,CarritoContext}