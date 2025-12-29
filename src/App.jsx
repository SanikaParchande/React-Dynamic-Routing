
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  

  return (
    <> 
    <div className="header">
      <h2>React Dynamic Routing</h2>
      <div className="links">
        <NavLink to='/homepage'> Homepage</NavLink>
        <NavLink to='/about-us'>About-Us</NavLink>
        <NavLink to={'/services'}>Our Services</NavLink>
        <NavLink to={'contact-us'}>Contact-us</NavLink>
      </div>
      </div>
      <div className="outlet-container">
        <Routes>
        <Route path='/homepage' Component={Homepage}></Route>
        <Route path='/about-us' Component={About}></Route>
        <Route path='/services' Component={Services}></Route>
        <Route path='/contact-us' Component={Contact}></Route>
      </Routes>
      </div>
    
    
      
    </>
  )
}

export default App
