import List from "./List";
let Food=({fooditem})=>{
    return(
    <>
    <ul className="list-group">
            {fooditem.map(item => 
            <List key={item} item={item}></List>
            )} 
    </ul>
    </>
    )}
    export default Food;