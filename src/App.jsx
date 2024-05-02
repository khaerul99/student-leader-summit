
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const route = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])

function App() {



  return (
    <>
     <RouterProvider router={route}/>
    </>
  )
}

export default App
