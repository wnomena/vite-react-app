import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'
const rooter = createBrowserRouter([
  {
    path : "/",
    element : <div>Page d'acceuil</div>
  }
])
function App() {
  return (
    <div>
        <RouterProvider router={rooter}/>
    </div>
  )
}

export default App
