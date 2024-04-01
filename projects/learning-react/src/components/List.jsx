import styles from "./List.module.css"
let List=({item})=>{
    return(
        <li  className={`${styles["list"]} list-group-item`}>{item}</li>
    )}
    export default List;