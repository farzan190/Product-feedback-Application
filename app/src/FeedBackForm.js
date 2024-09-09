import { useState,useContext } from "react"
import Cart from "./Context";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FeedBackForm=()=>{
  const {title,setTitle}=useContext(Cart);
  const {category,setCategory}=useContext(Cart);
  const {detail,setDetail}=useContext(Cart);
  const {originalData,setOriginalData}=useContext(Cart);    
  const {displayData,setDisplayData}=useContext(Cart);
   const navigate=useNavigate();
 
    const handleChange=(e)=>{
        return  ;
    }
    
    const addFeedBack=(e)=>{
      setOriginalData([...originalData,{
        "id": 111,
        "title": title,
        "category": category,
        "upvotes": 0,
        "upvoted": false,
        "status": "suggestion",
        "description": detail,
        "comments": [
        ]
      }])
       setDisplayData(originalData);
       navigate(-1);
     }
    return (<>
    <h1>Create New FeedBack</h1>
    <h3>Feedback Title</h3>
    <div>Add a short, descriptive headline</div>
      <input
      type="text"
      value={title}
      placeholder="please type feedback"
      onChange={(e)=>setTitle(e.target.value)}
      />
      
    <h1> Category</h1>
    <h3>Choose a category for your feedback</h3>
    <select value={category} onChange={(e)=>setCategory(e.target.value)}> 
    <option>All</option>
    <option>Feature</option>
    <option>UI</option>
    <option>UX</option>
    <option>Enhancement</option>
    <option>Bug</option>
    </select>
   <h3>FeedBack Detail</h3>
    <input
      type="text"
      value={detail}
      onChange={(e)=>setDetail(e.target.value)}
      placeholder="type your feedback here"
      />
      <button onClick={(e)=>addFeedBack(e)}>AddFeedBack</button>
      <NavLink to={`/`}>goBack</NavLink>
    </> 
    
    )
}

export default  FeedBackForm;