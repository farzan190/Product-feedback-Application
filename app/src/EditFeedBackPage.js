import { useState } from "react";
import editfeedbackimg from './assets/icon-editfeedback/icon-edit-feedback.svg';

const EditFeedBackPage=()=>{
  const [category,setCategory]=useState("");      








 return <div className="editfeedback-slip">
      <img src={editfeedbackimg} className="editfeedback-img" />
     <h1 className="EF-heading">Editing 'Add tags for solutions'</h1>

    <div className="ef-titledescription">
    <div className="editfeedback-title">Feedback Title</div>
    <div className="editfeedback-description">Add a short, descriptive headline</div>
    <input type="text"/>
    </div>
    
    <div className="editfeedback-category">
    <div className="editfeedback-title">Category</div>
    <div className="editfeedback-description">Choose a category for your feedback</div>
    <select className="categoryoptions">
      <option>Feature</option>
      <option>UI</option>
      <option>UX</option>
      <option>Enhancement</option>
      <option>Bug</option>

    </select>
    </div>

    <div className="editfeedback-category">
    <div className="editfeedback-title">Update Status</div>
    <div className="editfeedback-description">Change feature state</div>
    <select className="feature-options" value={category} onChange={(e)=>setCategory(e.target.value)}> 
    <option>Suggestion</option>
    <option>Planned</option>
    <option>In-Progress</option>
    <option>Live</option>
    </select>
    </div>

    <div className="ef-detail-description">
    <div className="editfeedback-title">Feedback Detail</div>
    <div className="editfeedback-description">Include any specific comments on what should be improved, added, etc.</div>
    <input type="text"/>
    </div>
   
   <div className="editfeedbackpage-buttons">
    <div><button className="delete">Delete</button></div>
    <div className="cancel-savechanges">
    <button className="cancel">Cancel</button>
    <button className="save-changes">Save Changes</button>   
    </div>

   </div>


 </div>

}
export default EditFeedBackPage;