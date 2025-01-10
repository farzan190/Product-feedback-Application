
const FilterButtons=({filterResults})=>{
    
     const filterButtons=["All","UI","UX","Enhancement","Feature","Bug"];
    return <div className='buttons-background' >{filterButtons.map((i)=><button className='filter-button' id={i} onClick={(e)=>filterResults(e)}>{i} </button>)}</div>

}
export default FilterButtons;