import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
        <>
    <h1 className='login-heading'>Welcome</h1>
    <div className='form-group'>
    <form action="/signup" method='post'>
        <h1>SIGN UP</h1>
        <div>
        <label htmlFor="email">Email</label><br />
        <input type="email" name="" id="email" placeholder='Enter Email'/>
        </div>
        <div>
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" id="password" placeholder='Enter Password'/>
        </div>
        <div>
        <label htmlFor="confirm-password">Confirm Password</label><br />
        <input type="password" name="confirm-password" id="confirm-password" placeholder='Enter Password'/>
        </div>
        <input type="submit" value="SIGN UP" />
        <Link to={"/login"}>Already have an account ? Login</Link>
    </form>
    </div>
    </>
  )
}

export default Signup