import data from './data';
import { useContext } from 'react';
import Cart from './Context';

const FilterButtons=({filterResults})=>{
    const {displayData,setDisplayData}=useContext(Cart);
     const filterButtons=["All","UI","UX","Enhancement","Feature","Bug"];
    return <div>{filterButtons.map((i)=><button className='filter-button' id={i} onClick={(e)=>filterResults(e)}>{i} </button>)}</div>



        


}
export default FilterButtons;