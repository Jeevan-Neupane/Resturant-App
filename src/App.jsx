import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import MeunPage from "./Pages/MeunPage";
import NotFoundPage from "./Pages/NotFoundPage";


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<HomePage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactPage/>}/>
        <Route path="menu"  element={<MeunPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/> 
      </Route>
    )
  )
  

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
    
}

export default App;
