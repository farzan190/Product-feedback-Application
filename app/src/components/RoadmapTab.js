import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../context/Context";
import CommentPage from "../pages/CommentPage";
import commentImg from "../assets/icon-comments.svg"

const RoadmapTab=({id,roadmapline,title,description,category,upvotes,upvoted,commentslength})=>{
    const [vote,setVote]=useState(upvotes);
    const [isVoted,setIsVoted]=useState(upvoted);
    const {setSelectedTab}=useContext(Cart);
     
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
return (
  <div className="roadmap-single-tab" id={id} onClick={()=>handleTab()}>
      
       <div  className={roadmapline}></div>
       
       <div className="roadmap-tab">
        <div className="dot-cat">
       <div className="road-dot"></div>
       <div className="road-category">{roadmapline}</div>
       </div>
       <div className="title"><NavLink className="navlink" to={`/CommentPage`} ><h3>{title}</h3></NavLink></div>
      <div className="description">{description}</div>
      <div className="category">{category}</div>
      </div>
      <div className="lower-section">
      <div className="roadmap-left-tab">
      <button className={isVoted?"roadmap-vote":"roadmap-didnt-vote"} onClick={(e)=>handleUpvote(e)}>{vote}</button>
      </div>
      <div className="roadmap-comment-size">
      <img src={commentImg} className="roadmap-cmnt-img"/>
      <div className="comm-length">{commentslength}</div>      
      </div>
      </div>
      </div>
)}

export default RoadmapTab;


