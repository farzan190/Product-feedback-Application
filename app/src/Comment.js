import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Cart from "./Context";
const Comment=({id,name,userName,content,replies})=>{
     // this recieves a single comment object with every detail in object along with the replies 
     //we need to push the comment to that particular comment being rendered 
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
          setDisplayData(originalData);
    }
     
    return <div>
    <hr/>
    <div>{name}</div>
    <strong>@{userName}</strong>
    <div>{content}</div>
    <div onClick={()=>handleReply()}>Reply</div>
    <div >{reply && <> <input type="text" placeholder="type your comment here " value={val} onChange={(e)=>handleVal(e)}/> <button onClick={(e)=>handlePostReply(e)}>Post Reply</button></>   }</div>
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