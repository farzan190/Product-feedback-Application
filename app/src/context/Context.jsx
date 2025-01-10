import { createContext, useState } from "react";
import data from '../data';


const Cart=createContext();

 export const ContextProvider=({children})=>{
  
   const [displayData,setDisplayData]=useState(data[0].productRequests);
   const [selectedTab,setSelectedTab]=useState(1);
   const [title,setTitle]=useState("");
   const [category,setCategory]=useState("all");
   const [detail,setDetail]=useState("");
   const [originalData,setOriginalData]=useState(data[0].productRequests);  
   const [passingTitle,setPassingTitle]=useState("");
   const [passingCategory,setpassingCategory]=useState("");
   const [passingDesc,setPassingDesc]=useState("");
   const [passingStat,setPassingStat]=useState("");
   const [status,setStatus]=useState("");

    return (<Cart.Provider value={{status,setStatus,passingStat,setPassingStat,passingDesc,setPassingDesc,selectedTab,setSelectedTab,displayData,setDisplayData,title,setTitle,category,setCategory,detail,setDetail,originalData,setOriginalData,passingTitle,setPassingTitle,passingCategory,setpassingCategory}} >
       {children} 
    </Cart.Provider>)
}


export default Cart;