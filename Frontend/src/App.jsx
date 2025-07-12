import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
   <ToastContainer/>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>

     </Routes>
    </div>
  )
}

export default App



 