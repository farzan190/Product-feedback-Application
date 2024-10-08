import data from './data';
import CommentSection from './CommentSection';
import { useState ,useContext} from 'react';
import Cart from './Context';

import Tab  from './Tab';

// display the same to same tab and comments below it 
const CommentPage=({id})=>{
  const {displayData,setDisplayData}=useContext(Cart);
  const {selectedTab,setSelectedTab}=useContext(Cart);
  const [currentTab,setCurrentTab]=useState(0);
    
      

  return <div>{displayData.map((i)=>i.id===selectedTab &&  (<div className='comment-page'>
                                                       <div >  
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
                                                         <button className='post-comment'>Post Comment</button>
                                                        </div> 
                                                             

                                                           </div>
                                                        )

                                                        )}</div>
                                                        }
                

export default CommentPage;