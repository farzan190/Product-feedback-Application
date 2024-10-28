import { useState } from "react";
import { useContext } from "react";
import Cart from "./Context";
import RoadmapTab from "./RoadmapTab";

const Roadmap=()=>{
    const {displayData,setDisplayData}=useContext(Cart);
     
    let planneditems=  displayData.filter((item)=>item.status=="planned");
    let progress=  displayData.filter((item)=>item.status=="in-progress");
    let live=  displayData.filter((item)=>item.status=="live");
    
    return <div>
    <div className="roadmap-categories">
    <div className="Planned">
        { planneditems.map((i)=><RoadmapTab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}
    </div>
    <div className="In-Progress " >
    { progress.map((i)=><RoadmapTab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}

        </div>
    <div className="Live">
    { live.map((i)=><RoadmapTab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}

        </div>
    </div>

    








    </div>
}

export default Roadmap;