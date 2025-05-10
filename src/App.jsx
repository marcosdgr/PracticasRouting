
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home'
import Ellos from "./Pages/Ellos"
import Nosotros from "./Pages/Nosotros"
import Error from "./Components/Error"

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/ellos" element={<Ellos/>}/>
      <Route path="/nosotros" element={<Nosotros/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
