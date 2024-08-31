import { createContext, useState } from "react";


const Cart=createContext();

 export const ContextProvider=({children})=>{
    const [hello,setHello]=useState("pagal");
    return (<Cart.Provider value={{ hello }}>
       {children} 
    </Cart.Provider>)
}


export default Cart;