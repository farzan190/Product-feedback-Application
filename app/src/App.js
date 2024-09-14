import './App.css';
import Tab  from './Tab';
import data from './data';
import {useState} from "react";
import FeedBackForm from './FeedBackForm';
import FilterButtons from './FilterButtons';
import { useContext } from 'react';
import {NavLink} from "react-router-dom";
import Cart from './Context';


function App() {
  const {displayData,setDisplayData}=useContext(Cart);
  const {title,setTitle}=useContext(Cart);
  const {category,setCategory}=useContext(Cart);
  const {detail,setDetail}=useContext(Cart);
  const {selectedTab,setSelectedTab}=useContext(Cart);
  const {originalData,setOriginalData}=useContext(Cart);    


//const handleSorting=(e)=>{
  //   console.log(e.target.value);

//}
const setSortByHandler = (e) => {
  if(e.target.value=="Most Upvotes") {
      console.log(true);
      const sortedData= displayData.sort((a, b) => b.upvotes - a.upvotes);
      console.log(sortedData);
      const instaData=[...sortedData];
      setDisplayData(instaData);
  }
  if (e.target.value=="Least Upvotes"){
      console.log(true);
       const sortedData= displayData.sort((a, b) => a.upvotes - b.upvotes);
       const instaData=[...sortedData];
      setDisplayData(instaData);
    }
  if ('Most Comments'==e.target.value)
  { console.log(true);
    const sortedData=displayData.sort((a, b) => b.comments.length - a.comments.length);
    console.log(sortedData);
    const instaData=[...sortedData];
    setDisplayData(instaData);
   }
  if ('Least Comments'==e.target.value)
   {   console.log(true);
      const sortedData= displayData.sort((a, b) => a.comments.length - b.comments.length);
      console.log(sortedData);
    const instaData=[...sortedData];
       setDisplayData(instaData);
   }
      

   
};


const filterResults=(e)=>{
  if(e.target.id=="All"){
     setDisplayData(originalData);
     return ;
  }
  const filteredData= originalData.filter((item)=>item.category==e.target.id);
  setDisplayData(filteredData);
} 
  return (    <div className='board'>
    
              <div className='left-board'>
               <div className='gradient-column'>
                <div>FrontEnd Mentor</div>
                <div>feedback board</div>
               </div>
               <div className='filter-buttons'>
        <div className='filter-buttons'> <FilterButtons filterResults={filterResults} /></div>
               </div>
                <div className='roadmap'>
                 <div className='roadmap-heading'>
                  <div>Roadmap</div>
                  <div className='view'>view</div>
                 </div>
                  <div className='plans-container'>
                    <div><span className='planned-dot'></span>Planned <span>2</span></div>
                    <div><span className='inprogress-dot'></span>In-Progress<span>3</span> </div>
                    <div><span className='live-dot'></span>Live <span>1</span></div>

                  </div>
                </div>
              </div>
              
           <div className='home-page'>
            <div className='header'>
             <div className='suggestions-count'> 6 Suggestions</div>
            <div className='sortby'>Sort by:</div>
            <select className='options' onClick={(e)=>setSortByHandler(e)}>
              <option>Most Upvotes</option>
              <option>Least Upvotes</option>
              <option>Most Comments</option>
              <option>Least Comments</option>

            </select>
          <button className='Add-feedback'><NavLink className='AddFeedBackText' to={`/feedback`}>+ Add Feedback</NavLink></button>
            </div>
          <div className='main-page'> 
         <div className='tabs'>{displayData.map((i)=><Tab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes}/>)}</div>
         </div></div>
         </div>)            
}

//

export default App;
