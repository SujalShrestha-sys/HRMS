import React from 'react'
import "../styles/Navbar.css"
import {useAuth} from "../../context/authContext.jsx"
const Navbar = () => {
    const {user} = useAuth();
  return (
    <div className='navbar'>
     <p>Welcome {user?.name}</p>
     <button className='login-btn'>Login</button>
    </div>
  )
}

export default Navbar
