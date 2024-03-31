import React from "react"
import './App.css'
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import AddItem from "./components/AddItems";

function App(){
  return(
   <center>
   
    <TodoName/>
    <AddTodo/>
    <AddItem/>
  
  </center>
  )
}
export default App;