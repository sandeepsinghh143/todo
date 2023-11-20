import React, { useState } from 'react'
import plus from "../assets/plus.svg"

const Dashboard = () => {
    const [user,setUser]=useState("Sandeep");
  return (
    <>
    <div className='dashboard-top-bar'>
        <span>Welcome {user}</span>
        <span className='logout'>Logout</span>
    </div>
    <div className='dashboard-body'>
        <div className='create-list'>
            <div>Create New List</div>
            <div className='plus-logo'><img src={plus} alt="plus-logo" width={"80px"}/></div>
        </div>
    </div>
    </>
  )
}

export default Dashboard