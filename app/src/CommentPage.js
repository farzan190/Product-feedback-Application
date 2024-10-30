import data from './data';
import CommentSection from './CommentSection';
import { useState ,useContext} from 'react';
import Cart from './Context';
import { NavLink } from 'react-router-dom';
import Tab  from './Tab';
import { v4 as uuidv4 } from 'uuid';



const CommentPage=({id})=>{
  const {displayData,setDisplayData}=useContext(Cart);
  const {selectedTab,setSelectedTab}=useContext(Cart);
  const [currentTab,setCurrentTab]=useState(0);
  const {passingTitle,setPassingTitle}=useContext(Cart);
  const {passingCategory,setpassingCategory}=useContext(Cart);
  const {passingDesc,setPassingDesc}=useContext(Cart);
  const {passingStat,setPassingStat}=useContext(Cart);
  const {originalData,setOriginalData}=useContext(Cart);    

  
  const handlePostcomment=(id)=>{ 
    const updatedData = originalData.map((obj)=> 
      {
        
         if(obj.id===id){
          return {
            ...obj,
           comments: [...obj.comments,{
            "id": 28765,
            "content": "waaaaaaaaaahhhhhhhhhhhhhh",
            "user": {
              "image": "./assets/user-images/image-suzanne.jpg",
              "name": "Suzanne Chang",
              "username": "upbeat1811"
            },
            "replies":[],
          }]
          }

         }
         return obj;
      
      })
        console.log(updatedData)  
        setOriginalData(updatedData);
        setDisplayData(updatedData);

  }
      

  return <div>{displayData.map((i)=>i.id===selectedTab &&  (<div className='comment-page'>
                                                         <div>{setPassingTitle(i.title)}</div>  
                                                         <div>{setpassingCategory(i.category)}</div>
                                                         <div>{setPassingDesc(i.description)}</div>
                                                         <div>{setPassingStat(i.status)}</div>
                                                          
                                                       <div >
                                                         <div className='gobackandeditfeedback'>  
                                                         <NavLink  to={-1}>Go Back</NavLink>
                                                        <button className='efb'><NavLink className={'efb'}  to={`/editFeedBack`}>Edit Feedback</NavLink></button>
                                                        </div> 
                                                        <Tab key={i.id} 
                                                        title={i.title}
                                                        description={i.description}
                                                        category={i.category} 
                                                        upvoted={i.upvoted} 
                                                        upvotes={i.upvotes}/>
                                                        </div>
                                                        <div className='comment-section'>
                                                        <CommentSection comments={i.comments} />
                                                        </div>
                                                        <div className='seperate-comment'>
                                                         <h3 className='AddComment'>Add Comment</h3>
                                                         <input type='text' className='input-comment' placeholder='Type your comment here'/>
                                                         <button className='post-comment' onClick={()=>handlePostcomment(i.id)}>Post Comment</button>
                                                        </div> 
                                                           </div>
                                                        )

                                                        )}</div>
                                                        }
                

export default CommentPage;