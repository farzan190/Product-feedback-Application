import { useState,useContext } from "react"
import Cart from "./Context";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import addNewFeedBack from './assets/icon-new-feedback.svg';

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
    
    const addFeedBack = (e) => {
      const newFeedback = {
        id: 111,
        title: title,
        category: category,
        upvotes: 0,
        upvoted: false,
        status: "suggestion",
        description: detail,
        comments: [],
      };
    
      const updatedData = [...originalData, newFeedback];
      
      setOriginalData(updatedData);  
      setDisplayData(updatedData);   
      navigate(-1);                  
    };

    
    return (<div className="outer-feedback-form">
     <NavLink to={`/`}> <div className="GoBack">GoBack</div></NavLink>

    <div className="addfeedback-form">
     <img src={addNewFeedBack} className="addfeedback-img"/>
     <div className="feedback-slip">

    <h1 className="createfeedback">Create New FeedBack</h1>
    <div className="title-description">
    <div className="feedback-title">Feedback Title</div>
    <div className="feedback-description" >Add a short, descriptive headline</div>
      <input
      type="text"
      value={title}
      placeholder="please type feedback"
      onChange={(e)=>setTitle(e.target.value)}
      />
    </div>

     <div className="category-section"> 
    <div className="cat"> Category</div>
    <div className="chooseACat">Choose a category for your feedback</div>
    <select className="categoryoptions" value={category} onChange={(e)=>setCategory(e.target.value)}> 
    <option>All</option>
    <option>Feature</option>
    <option>UI</option>
    <option>UX</option>
    <option>Enhancement</option>
    <option>Bug</option>
    </select>
    </div>
   <div className="feedback-detail">
   <div className="FD">FeedBack Detail</div>
   <div className="FD-desc">Include any specific comments on what should be improved, added, etc.</div>
    <input
    className="feedbackdescription"
      type="text"
      value={detail}
      onChange={(e)=>setDetail(e.target.value)}
      placeholder="type your feedback here"
      />
      </div>
      <button className="addFeedback-button" onClick={(e)=>addFeedBack(e)}>AddFeedBack</button>
      </div> 

    </div> 
    </div>
    )
}

export default  FeedBackForm;