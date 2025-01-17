import { useContext } from "react";
import Cart from "../context/Context";
import RoadmapTab from "../components/RoadmapTab";
import { NavLink } from "react-router-dom";

const Roadmap=()=>{
    const {displayData}=useContext(Cart);   
     
    
    return <div>
        <NavLink  to={-1}>Go Back</NavLink>
        <div className="RoadMap-header"><span className="road">Roadmap</span>
         <button className='Add-feedback'><NavLink className='AddFeedBackText' to={`/feedback`}>+ Add Feedback</NavLink></button>
          </div>    
        
    <div className="roadmap-categories">
    
    <div className="Planned">
        <div className="road-cat-title">
        <div className="roadmap-head">Planned (2)</div>
        <div className="road-detail">Ideas prioritized for research</div>
        </div>
        <div>{ displayData.filter((item)=>item.status=="planned").map((i)=><RoadmapTab  id={i.id} roadmapline={"planned"} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}
        </div>
    </div>
    <div className="In-Progress " >
    <div className="road-cat-title">
        <div className="roadmap-head">In-Progress (2)</div>
        <div className="road-detail" >Currently being developed</div>
        </div>
    <div>{ displayData.filter((item)=>item.status=="in-progress").map((i)=><RoadmapTab  id={i.id} roadmapline={"In-progress"} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}
    </div>
        </div>
    <div className="Live">
    <div className="road-cat-title">
        <div className="roadmap-head">Live (2)</div>
        <div className="road-detail">Released features</div>
        </div>
    <div>{ displayData.filter((item)=>item.status=="live").map((i)=><RoadmapTab  id={i.id} roadmapline={"live"} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}
    </div>
        </div>
    </div>

    </div>
}

export default Roadmap;