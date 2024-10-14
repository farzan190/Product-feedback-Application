import { useState } from "react";
import { useContext } from "react";
import Cart from "./Context";
import editfeedbackimg from './assets/icon-editfeedback/icon-edit-feedback.svg';

const EditFeedBackPage=({description})=>{
  const {passingTitle,setPassingTitle}=useContext(Cart);
  const {selectedTab,setSelectedTab}=useContext(Cart);
  const {displayData,setDisplayData}=useContext(Cart);
  const [title,setTitle]=useState(passingTitle);
  const {category,setCategory}=useContext(Cart);
  
 

 return <div>{displayData.map((i)=>i.id===selectedTab &&   (<div className="editfeedback-slip">
  <img src={editfeedbackimg} className="editfeedback-img" />
 <h1 className="EF-heading">Editing 'Add tags for solutions'</h1>
<div className="ef-titledescription">
<div className="editfeedback-title">Feedback Title</div>
<div className="editfeedback-description">Add a short, descriptive headline</div>
<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
</div>







<div className="editfeedback-category">
<div className="editfeedback-title">Category</div>
<div className="editfeedback-description">Choose a category for your feedback</div>
<select className="categoryoptions" value={i.category} onChange={(e)=>setCategory(e.target.value)} >
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
<select className="feature-options" value={i.status} > 
<option>Suggestion</option>
<option>Planned</option>
<option>In-Progress</option>
<option>Live</option>
</select>
</div>

<div className="ef-detail-description">
<div className="editfeedback-title">Feedback Detail</div>
<div className="editfeedback-description">Include any specific comments on what should be improved, added, etc.</div>
<input type="text" value={i.description} onChange={(e)=>setTitle(e.target.value)} /> 
</div>

<div className="editfeedbackpage-buttons">
<div><button className="delete">Delete</button></div>
<div className="cancel-savechanges">
<button className="cancel">Cancel</button>
<button className="save-changes">Save Changes</button>   
</div>

</div>


</div>) 

   ) }</div>

}
export default EditFeedBackPage;











// we are basically selecting the 










