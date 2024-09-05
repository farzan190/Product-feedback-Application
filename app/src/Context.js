import { createContext, useState } from "react";
import data from './data';


const Cart=createContext();

 export const ContextProvider=({children})=>{
   const[name,setName]=useState("farru");
  const [displayData,setDisplayData]=useState(data[0].productRequests);
   const [selectedTab,setSelectedTab]=useState(1);

    return (<Cart.Provider value={{selectedTab,setSelectedTab,displayData,setDisplayData}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;