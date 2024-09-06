import data from './data';
import CommentSection from './CommentSection';
import { useState ,useContext} from 'react';
import Cart from './Context';
import Tab  from './Tab';

// display the same to same tab and comments below it 
const CommentPage=({id=2})=>{
  const [displayData,setDisplayData]=useState(data[0].productRequests);
  const {selectedTab,setSelectedTab}=useContext(Cart);
  const [currentTab,setCurrentTab]=useState(0);
    
      

  return <div>{displayData.map((i)=>i.id===selectedTab &&  (<><Tab key={i.id} 
                                                       title={i.title}
                                                        description={i.description}
                                                         category={i.category} 
                                                         upvoted={i.upvoted} 
                                                         upvotes={i.upvotes}/>
                                                         <CommentSection comments={i.comments} />
                                                       
                                                           </>
                                                        )

                                                        )}</div>
                                                        }
                

export default CommentPage;