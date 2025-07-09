import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='px-[25px] md:px-[60px] bg-[rgb(33,35,33)]'>
   <ToastContainer/>
     <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </div>
  )
}

export default App



 