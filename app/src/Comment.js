import { useContext, useState } from "react";
import Cart from "./Context";
const Comment=({id,name,userName,content,replies})=>{
     // this recieves a single comment object with every detail in object along with the replies 
     //we need to push the comment to that particular comment being rendered 
    const [reply,setReply]=useState();
    const [val,setVal]=useState("your comment")
    const {displayData,setDisplayData}=useContext(Cart);

    const handleVal=(e)=>{
        setVal(e.target.value);
        console.log(id);
         
    }
    const handleReply=()=>{
        setReply(!reply);
    } 
    const handePostReply=(e)=>{
      const updatedData = displayData.map((obj)=>obj.comments.map((com)=>com.id===id? com?.replies?.push({
        "id":"889",
        "content": val ,
        "replyingTo": userName,
        "user": {
          "image": "./assets/user-images/image-anne.jpg",
          "name": "farzan",
          "username": "farzanitrate"
        }
      }): com)); 
      setDisplayData(updatedData);
      // jo chatGPT par bataya tha wahi solve karega 

    }
     
    return <div>
    <hr/>
    <div>{name}</div>
    <strong>@{userName}</strong>
    <div>{content}</div>
    <div onClick={()=>handleReply()}>Reply</div>
    <div >{reply && <> <input type="text" placeholder="type your comment here " value={val} onChange={(e)=>handleVal(e)}/> <button onClick={(e)=>handePostReply(e)}>Post Reply</button></>   }</div>
    <hr/>
    <div>{replies?.map((r)=><> 
                      <div>{r.user.name} </div>
                      <div>@{r.user.username} </div>
                     <div><strong> @{r.replyingTo}</strong>{ r.content}</div>
                     </>
                     )}</div>
    </div>
     
  
}

export default Comment;