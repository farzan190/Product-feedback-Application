import { useState } from "react";

const Tab=({title,description,category,upvotes,upvoted})=>{
    const [vote,setVote]=useState(upvotes);
    const [isVoted,setIsVoted]=useState(upvoted);
   
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

return <div><div>{title}</div>
      <div>{description}</div>
      <div>{category}</div>
      <button onClick={(e)=>handleUpvote(e)}>{vote}</button>
        
      <div>.................</div>
      </div>
}

export default Tab;

// we need to add the contextapi and routes 
// uske baad things are  to be done as they are to be done 
