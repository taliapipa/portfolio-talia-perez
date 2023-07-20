import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Servicies from "./Components/Servicies"
import {Routes, Route} from "react-router-dom"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"

function App() {

  return (
        <div>
          <Header/>
          
          <Routes>
            <Route
            path='/' element={<Hero/>}
            />
            <Route
            path='/portfolio' element={<Portfolio/>}
            />
            <Route
            path='/contact' element={<Contact/>}
            />
          </Routes>
        </div>
      )
    }
  

export default App
