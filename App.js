import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Reactjs from "./Reactjs"
import Header from "./Header"
import About from "./About"
import Contact from "./Contact"
import Services from "./Services"
import Footer from "./Footer"

function App() {
  return (<div>
    <div className="App">
     <Header/>
      <Routes>
    
      <Route exact path="/" element={<Home />} />
      <Route path="/reactjs" element={<Reactjs />} />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="Services" element={ <Services/> } />
      </Routes>
    
    </div><Footer/></div>
  )
}

export default App