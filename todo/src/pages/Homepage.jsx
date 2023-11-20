import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate=useNavigate()
  return (
    <div className='homepage'>
        <h1 style={{textAlign:"center",padding:"20px",fontSize:"60px",color:"white",fontFamily:"cursive,'sans-serif'",position:"absolute",width:"100%"}}>TODO APP</h1>
        <div>
        <button onClick={()=>{navigate("/signup")}}>SIGN UP</button>
        <button onClick={()=>{navigate("/login")}}>LOGIN</button>
        </div>
    </div>
  )
}

export default Homepage