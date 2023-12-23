import React from 'react'
import { useRouteMatch,Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function Projects() {
  const match=useRouteMatch(useLocation().pathname);
  console.log("match"+match.url);
  return (
    <div>
      <h1> My Projects</h1>
      <nav className="navbar navbar-expand-lg">
        <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
                <Link to={`${match.url}/chat-application`} title="Chat app" className="nav-link text-primary rounded">
                    Chat App
                </Link>
                <Link to={`${match.url}/ecommerce-application`}  className="nav-link text-info rounded">
                    Ecommerce App
                </Link>
            </li>

        </ul>
        
      </nav>
    </div>
  )
}

export default Projects
