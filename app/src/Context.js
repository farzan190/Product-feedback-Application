import { createContext, useState } from "react";
import data from './data';


const Cart=createContext();

 export const ContextProvider=({children})=>{
   const[name,setName]=useState("farru");
  const [displayData,setDisplayData]=useState(data[0].productRequests);
   const [selectedTab,setSelectedTab]=useState(1);
   const [title,setTitle]=useState("");
   const [category,setCategory]=useState("all");
   const [detail,setDetail]=useState("");
   const [originalData,setOriginalData]=useState(data[0].productRequests);  
 
    return (<Cart.Provider value={{selectedTab,setSelectedTab,displayData,setDisplayData,title,setTitle,category,setCategory,detail,setDetail,originalData,setOriginalData}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;