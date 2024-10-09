import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Cart from "./Context";
import profilepic from './assets/user-images/image-zena.jpg'

const Comment=({id,name,userName,content,replies,image})=>{
    
    const [reply,setReply]=useState();
    const [val,setVal]=useState("")
    const {displayData,setDisplayData}=useContext(Cart);
    const {originalData,setOriginalData}=useContext(Cart);    


    const handleVal=(e)=>{
      console.log(e.target.value)
        setVal(e.target.value);
        console.log(id);
         
    }
    const handleReply=()=>{
        setReply(!reply);
    } 
    const handlePostReply=(e)=>{
      const updatedData = originalData.map((obj) => {
        return {
          ...obj,
          comments: obj.comments.map((com) => {
            if (com.id === id) {
              return {
                ...com,
                replies: [
                  ...com.replies,
                  {
                    id: uuidv4(), 
                    content: val,
                    replyingTo: userName,
                    user: {
                      image: "./assets/user-images/image-anne.jpg",
                      name: "farzan",
                      username: "farzanitrate"
                    }
                  }
                ]
              };
            }
            return com;
          })
        };
      });
          setOriginalData(updatedData);
          setDisplayData(updatedData);
    }
     
    return <div className="bcad">
    <div className="username-content">
    <img src={require(`${image}`)} className="pro-pic" alt="profile-pic" />
    <div >
     <div className="nameReply"> 
    <div className="name-username">
    <h4 className="name">{name}</h4>
    <small className="userName">@{userName}</small>
    </div>
    <div>
    <button className="Reply" onClick={()=>handleReply()}>Reply</button>
    </div>
    </div>
    <div>
    <div className="content">{content}</div>

    </div>

    </div>
    
    <div className="replyNbutton" >{reply && <> <input className="ReplyInput" type="text" placeholder="Type your comment here " value={val} onChange={(e)=>handleVal(e)}/> <button onClick={(e)=>handlePostReply(e)} className="Post-Reply">Post Reply</button></>   }</div>
   
    <div className="all-the-replies">{replies?.map((r)=><div className="replies">
                      <img src={profilepic} className="pro-pic"/>  
                      <div  className="reply-name">{r.user.name} </div>
                      <div className="reply-username">@{r.user.username} </div>
                     <div className="reply-to-content"><strong className="reply-to-username"> @{r.replyingTo}</strong>{ r.content}</div>
                     </div>
                     )}</div>
    </div>
    <div className="line"></div>

    </div>
     
}

export default Comment;