import { useState } from "react"

const FeedBackForm=({title,setTitle,category,setCategory,detail,setDetail})=>{
    

    const handleChange=(e)=>{

        return ;
    }

    return (<>
    <h1>Create New FeedBack</h1>
    <h3>Feedback Title</h3>
    <div>Add a short, descriptive headline</div>
      <input
      type="text"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}/>
      
   <h1> Category</h1>
    <h3>Choose a category for your feedback</h3>
    <select value={category} onChange={(e)=>setCategory(e.target.value)}> 
    <option>Feature</option>
    <option>UI</option>
    <option>UX</option>
    <option>Enhancement</option>
    <option>Bug</option>

    </select>
<h3>FeedBack Detail</h3>
<input
      type="text"
      value={detail}
      onChange={(e)=>setDetail(e.target.value)}
      placeholder="type your feedback here"
      />
    </> 
    
    )
}

export default  FeedBackForm;