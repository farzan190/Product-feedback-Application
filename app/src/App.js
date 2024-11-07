import './App.css';
import Tab  from './Tab';
import data from './data';
import {useState} from "react";
import FeedBackForm from './FeedBackForm';
import FilterButtons from './FilterButtons';
import { useContext } from 'react';
import {NavLink} from "react-router-dom";
import Cart from './Context';
import suggestionIcon from './assets/icon-suggestion.svg';

function App() {
  const {displayData,setDisplayData,originalData}=useContext(Cart);



const setSortByHandler = (e) => {
  if(e.target.value=="Most Upvotes") {
      const sortedData= displayData.sort((a, b) => b.upvotes - a.upvotes);
      const instaData=[...sortedData];
      setDisplayData(instaData);
  }
  if (e.target.value=="Least Upvotes"){
       const sortedData= displayData.sort((a, b) => a.upvotes - b.upvotes);
       const instaData=[...sortedData];
      setDisplayData(instaData);
    }
  if ('Most Comments'==e.target.value)
  { 
    const sortedData=displayData.sort((a, b) => b.comments.length - a.comments.length);
    const instaData=[...sortedData];
    setDisplayData(instaData);
   }
  if ('Least Comments'==e.target.value)
   {   
      const sortedData= displayData.sort((a, b) => a.comments.length - b.comments.length);
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
                <h2 className='FM'>Frontend Mentor</h2>
                <div className='FB'>feedback board</div>
               </div>
               <div className='filter-section'>
        <div className='filter-buttons'> <FilterButtons filterResults={filterResults} /></div>
               </div>
                <div className='roadmap'>
                 <div className='roadmap-heading'>
                  <div>Roadmap</div>
                  <div className='view'><NavLink className='view' to={`/roadmap`}>view</NavLink></div>
                 </div>
                 
                  <div className='amarta'>
                  <div className='live-dot'>
                      <div className='planned-dot'></div>
                      <div>Planned</div>
                      </div> 
                      <strong>2</strong>
                      </div>
                  <div className='amarta'>
                  <div className='live-dot'>
                      <div className='inprogress-dot'></div>
                      <div>In-Progress</div>
                      </div> 
                      <strong>3</strong>

                  </div>
                  <div className='amarta'>
                     <div className='live-dot'>
                      <div className='purple-live'></div>
                      <div>Live</div>
                      </div> 
                      <strong>1</strong>
                  </div>   

                </div>
              </div>
              
           <div className='home-page'>
            <div className='header'>
             <div className='suggestions-count'><span className='icon'><img src={suggestionIcon} className='icon-sugg'/></span> {displayData.length} <span className='suggestions'>Suggestions</span></div>
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
         <div className='tabs'>{displayData.map((i)=><Tab  id={i.id} title={i.title} description={i.description} category={i.category} upvoted={i.upvoted} upvotes={i.upvotes} commentslength={i.comments.length}/>)}</div>
         </div></div>
              </div>)            
}


export default App;
