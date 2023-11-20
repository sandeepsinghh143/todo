import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <h1 className='login-heading'>Welcome</h1>
    <div className='form-group'>
    <form action="/login" method='post'>
        <h1>LOGIN</h1>
        <div>
        <label htmlFor="email">Email</label><br />
        <input type="email" name="" id="email" placeholder='Enter Email'/>
        </div>
        <div>
        <label htmlFor="password">Password</label><br />
        <input type="password" name="password" id="password" placeholder='Enter Password'/>
        </div>
        <input type="submit" value="LOGIN" />
        <Link to={"/signup"}>Don't have an account ? Signup</Link>
    </form>
    </div>
    </>
  )
}

export default Login