import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App
