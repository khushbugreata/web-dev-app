import './App.css'
import FoodName from './components/FoodName'
import Food from "./components/food"
function App() {
let fooditem=['rice','dal','roti','salad','vegetable']
  return (
    <>
   <FoodName/>
    <Food fooditem={fooditem}/>
    </>
  )
}

export default App
