import { useContext } from "react";
import Cart from "../context/Context";
import editfeedbackimg from '../assets/icon-editfeedback/icon-edit-feedback.svg';
import { useNavigate } from "react-router-dom";

const EditFeedBackPage=({description})=>{
  let changedData;
  let updatedObject;
  const {passingTitle,setPassingTitle,displayData,setDisplayData,passingCategory,setpassingCategory,passingDesc,setPassingDesc,passingStat,setPassingStat,originalData,setOriginalData,selectedTab,setSelectedTab}=useContext(Cart);
  

  const navigate=useNavigate();

  const deleteButton=(e)=>{
    navigate(-2);
   const deletedData= originalData.filter((item)=>item.id!==e
    )
    setOriginalData(deletedData);
    setDisplayData(deletedData);
  } 

  const saveChangesFunction=(e)=>{
     changedData= originalData.map((item)=>{
        if(item.id==e){
           updatedObject={...item,"title":passingTitle,"category":passingCategory,"description":passingDesc,"status":passingStat} 
          return updatedObject;
        }
        return item;
       })
     
     setOriginalData(changedData);  
     setDisplayData(changedData);   
     navigate(-2);
   }  
 
   const cancelButton=()=>{
    navigate(-2);
   }


 return <div>{displayData.map((i)=>i.id===selectedTab &&   (<div className="editfeedback-slip">
  <img src={editfeedbackimg} className="editfeedback-img" />
 <h1 className="EF-heading">Editing `{passingTitle}`</h1>
<div className="ef-titledescription">
<div className="editfeedback-title">Feedback Title</div>
<div className="editfeedback-description">Add a short, descriptive headline</div>
<input type="text" value={passingTitle} onChange={(e)=>setPassingTitle(e.target.value)} />
</div>


<div className="editfeedback-category">
<div className="editfeedback-title">Category</div>
<div className="editfeedback-description">Choose a category for your feedback</div>
<select className="categoryoptions" value={passingCategory} onChange={(e)=>setpassingCategory(e.target.value)} >
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
<select className="feature-options" value={passingStat} onChange={(e)=>setPassingStat(e.target.value)} > 
<option>Suggestion</option>
<option>planned</option>
<option>in-progress</option>
<option>live</option>
</select>
</div>

<div className="ef-detail-description">
<div className="editfeedback-title">Feedback Detail</div>
<div className="editfeedback-description">Include any specific comments on what should be improved, added, etc.</div>
<input type="text" value={passingDesc} onChange={(e)=>setPassingDesc(e.target.value)} /> 
</div>

<div className="editfeedbackpage-buttons">
<div><button className="delete" onClick={()=>deleteButton(i.id)}>Delete</button></div>
<div className="cancel-savechanges">
<button className="cancel" onClick={()=>cancelButton()}>Cancel</button>
<button className="save-changes" onClick={()=>saveChangesFunction(i.id)}>Save Changes</button>   
</div>

</div>


</div>) 

   ) }</div>

}
export default EditFeedBackPage;




