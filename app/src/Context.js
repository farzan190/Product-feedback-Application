import { createContext, useState } from "react";


const Cart=createContext();

 export const ContextProvider=({children})=>{
   const[name,setName]=useState("farru");
   const [selectedTab,setSelectedTab]=useState(1);

    return (<Cart.Provider value={{selectedTab,setSelectedTab}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;