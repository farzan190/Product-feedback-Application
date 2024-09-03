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
return <div id={id} onClick={()=>handleTab()}><NavLink to={`/CommentPage`} >{title}</NavLink>
      <div>{description}</div>
      <div>{category}</div>
      <button onClick={(e)=>handleUpvote(e)}>{vote}</button>
        
      </div>
}

export default Tab;

// we need to add the contextapi and routes 
// uske baad things are  to be done as they are to be done 
