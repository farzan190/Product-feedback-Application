import { useContext, useState } from "react";
import Cart from "./Context";
import Comment from "./Comment";

const CommentSection=({comments})=>{
    // sare objects ke comment aate hain yahan and if we map through these comments then we pass the comment as a single comment to comment 

    return <div>{comments.map((c)=> 
          <>
        <Comment id={c.id} name={c.user.name} userName={c.user.username} content={c.content} replies={c.replies}/>
        </>
    
    )}
    </div>
}
export default CommentSection;