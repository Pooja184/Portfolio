import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Consultation from './components/Consultation';
import ScrollToTop from './components/ScrollToTop';
import Projects from './pages/Projects';


const App = () => {
  return (
    <div>
   <ToastContainer/>
     <Navbar/>
     <ScrollToTop/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
     </Routes>
     <Consultation/>
     <Footer/>
    </div>
  )
}

export default App



 