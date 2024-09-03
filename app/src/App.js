import './App.css';
import Tab  from './Tab';
import data from './data';
import {useState} from "react";
import FeedBackForm from './FeedBackForm';
import FilterButtons from './FilterButtons';
import { useContext } from 'react';
import {NavLink} from "react-router-dom";
import Cart from './Context';


function App() {
  const [displayData,setDisplayData]=useState(data[0].productRequests);
  const [title,setTitle]=useState();
  const [category,setCategory]=useState();
  const [detail,setDetail]=useState();
  const {selectedTab,setSelectedTab}=useContext(Cart);
      
const addFeedBack=()=>{
  setDisplayData([...displayData,{
    "id": 111,
    "title": title,
    "category": category,
    "upvotes": 786,
    "upvoted": false,
    "status": "suggestion",
    "description": detail,
    "comments": [
    ]
  }])
 }

const filterResults=(e)=>{
  const filteredData= displayData.filter((item)=>item.category==e.target.id);
  setDisplayData(filteredData);
} 
 // we ll send the id to the comment page and it will find the data with the same id  and render it 
  return (<div> 
         <div>{displayData.map((i)=><Tab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes}/>)}</div>;
         <button onClick={()=>addFeedBack()}>clickme</button> 
         <NavLink to={`/feedback`}>feed</NavLink>
         <FeedBackForm title={title} setTitle={setTitle} category={category} setCategory={setCategory} detail={detail} setDetail={setDetail}/>
         <FilterButtons filterResults={filterResults} />
         </div>)            
}


export default App;
