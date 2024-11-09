import Todo from "./Pages/Todo"
import { Toaster } from "react-hot-toast"
import { TodoProvider } from "./Provider/TodoProvider"
import './App.css';





const App = () => {
  return (
     <TodoProvider>
   
        <Todo/>
      
 <Toaster position="top-right"/>
    </TodoProvider>
  )
}
export default App