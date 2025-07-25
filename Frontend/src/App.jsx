import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


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
        <Route path='/contact' element={<Contact/>}/>

     </Routes>
     
     <Footer/>
    </div>
  )
}

export default App



 