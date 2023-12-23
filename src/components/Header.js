import React from 'react'
import {
    BrowserRouter,
    NavLink
} from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-dark justify-content-between"> 
       <li className='nav-link'>
        <NavLink to='/gituser' style={{textDecoration:'none'}}activeClassName="btn btn-primary">Github Users</NavLink>
       </li>  
       <li className='nav-link'>
        <NavLink to='/Dashboard' style={{textDecoration:'none'}}activeClassName="btn btn-primary">Dashboard</NavLink>
       </li>  
       <li className='nav-link'>
        <NavLink to='/Projects'style={{textDecoration:'none'}}activeClassName="btn btn-primary">My Projects</NavLink>
       </li> 
       <li className='nav-link'>
        <NavLink to='/topics' style={{textDecoration:'none'}}activeClassName="btn btn-primary">My topics</NavLink>
       </li> 
       <li className='nav-link'>
        <NavLink to='/about' style={{textDecoration:'none'}} activeClassName="btn btn-primary">About</NavLink>
       </li> 
       <li className='nav-link'>
        <NavLink to='/Contact' style={{textDecoration:'none'}} activeClassName="btn btn-primary">Contact Us</NavLink>
       </li> 
       <li className='nav-link'>
        <NavLink to='/Login' style={{textDecoration:'none'}} activeClassName="btn btn-primary">Login</NavLink>
       </li> 
       <li className='nav-link'>
        <NavLink to='/Logout' style={{textDecoration:'none'}} activeClassName="btn btn-primary" onClick={()=>localStorage.clear()}>Logout</NavLink>
       </li> 


    </nav>
  )
}

export default Header
