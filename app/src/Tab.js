const Tab=({title,description,category,upvotes})=>{
    const handleOnclick=(e)=>{
         return ;
    }
return <div><div>{title}</div>
      <div>{description}</div>
      <div>{category}</div>
      <button>-</button>
      <button onClick={(e)=>handleOnclick(e)}>{upvotes}</button>
      <button>+</button>
        
      <div>.................</div>
      </div>
}

export default Tab;

// we need to add the contextapi and routes 
// uske baad things are  to be done as they are to be done 
