import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Context";
import CommentPage from "./CommentPage";
import commentImg from "./assets/icon-comments.svg"

const RoadmapTab=({id,title,description,category,upvotes,upvoted,commentslength})=>{
    const [vote,setVote]=useState(upvotes);
    const [isVoted,setIsVoted]=useState(upvoted);
    const {selectedTab,setSelectedTab}=useContext(Cart);
    const {passingTitle,setPassingTitle}=useContext(Cart);
     
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
        setSelectedTab(id);
       }
return <div className="roadmap-single-tab" id={id} onClick={()=>handleTab()}>
      <div className="left-tab">
      <div ><button className={isVoted?"vote":"didntVote"} onClick={(e)=>handleUpvote(e)}>{vote}</button></div>
      </div>
      
       <div className="right-tab">
       <div className="title"><NavLink className="navlink" to={`/CommentPage`} ><h3>{title}</h3></NavLink></div>
      <div className="description">{description}</div>
      <div className="category">{category}</div>
      </div>
      <div className="comment-size">
      <img src={commentImg} className="commentImg"/>
      <div className="comm-length">{commentslength}</div>      
      </div>
      </div>
}

export default RoadmapTab;


