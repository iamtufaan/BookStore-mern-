import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Courses from './pages/Courses'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider'
const App = () => {
    const {authUser, setAuthUser} = useContext(AuthContext);
    console.log(authUser);
  return (
    <div className=' w-full min-h-screen bg-slate-300 sm:px-20  px-2'>
      <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={authUser ?<Courses/> : <Navigate to={'/signup'}/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
