import data from './data';

const FilterButtons=({filterResults})=>{

    return <div>{data[0].productRequests.map((i)=><button id={i.category} onClick={(e)=>filterResults(e)}>{i.category}</button>)}</div>
}
export default FilterButtons;