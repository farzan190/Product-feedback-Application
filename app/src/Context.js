import { createContext, useState } from "react";


const Cart=createContext();

 export const ContextProvider=({children})=>{
   const[name,setName]=useState("farru");

    return (<Cart.Provider value={{name}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;