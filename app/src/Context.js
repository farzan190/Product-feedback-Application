import { createContext, useState } from "react";


const Cart=createContext();

 export const ContextProvider=({children})=>{
    return (<Cart.Provider >
       {children} 
    </Cart.Provider>)
}


export default Cart;