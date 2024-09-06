import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Context";
import CommentPage from "./CommentPage";

const Tab=({id,title,description,category,upvotes,upvoted})=>{
    const [vote,setVote]=useState(upvotes);
    const [isVoted,setIsVoted]=useState(upvoted);
    const {selectedTab,setSelectedTab}=useContext(Cart);
    
    const handleUpvote=(e)=>{
           if(!isVoted){
            setIsVoted(true);
            setVote(upvotes+1);
           }
           if(isVoted){
            setIsVoted(false);
            setVote(upvotes);
           }
    }
    const handleTab=()=>{
        console.log(id);
        setSelectedTab(id);
        
       }
return <div className="single-tab" id={id} onClick={()=>handleTab()}>

      <div className="left-tab">
      <div ><button className="vote" onClick={(e)=>handleUpvote(e)}>{vote}</button></div>
      </div>
      
       <div className="right-tab">
       <div className="title"><NavLink className="navlink" to={`/CommentPage`} >{title}</NavLink></div>
      <div className="description">{description}</div>
      <div className="category">{category}</div>
      </div>
      
      </div>
}

export default Tab;

// we need to add the contextapi and routes 
// uske baad things are  to be done as they are to be done 
