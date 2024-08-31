import './App.css';
import Tab  from './Tab';
import data from './data';
import {useState} from "react";
import FeedBackForm from './FeedBackForm';
import FilterButtons from './FilterButtons';
import { useContext } from 'react';
import Cart from './Context';

function App() {
  const [displayData,setDisplayData]=useState(data[0].productRequests);
  const [title,setTitle]=useState();
  const [category,setCategory]=useState();
  const [detail,setDetail]=useState();
      
const addFeedBack=()=>{
  setDisplayData(...displayData,{
    "id": 111,
    "title": title,
    "category": category,
    "upvotes": 786,
    "upvoted": false,
    "status": "suggestion",
    "description": detail,
    "comments": [
    ]
  })
  
  
 }

const filterResults=(e)=>{
  const filteredData= data[0].productRequests.filter((item)=>item.category==e.target.id);
  setDisplayData(filteredData);
} 

  return (<div> <div>{displayData.map((i)=><Tab title={i.title} description={i.description} category={i.category} upvotes={i.upvotes}/>)}</div>;
         <button onClick={(e)=>addFeedBack()}>clickme</button> 
         <FeedBackForm title={title} setTitle={setTitle} category={category} setCategory={setCategory} detail={detail} setDetail={setDetail}/>
         <FilterButtons filterResults={filterResults} />
         </div>)            
}


export default App;
