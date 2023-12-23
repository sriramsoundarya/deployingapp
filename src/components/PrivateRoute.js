import {React,useState} from 'react'
import { Redirect} from 'react-router-dom/cjs/react-router-dom.min';

function PrivateRoute(props) {
  const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("loggedIn"));
  return (
    <div>
      {props.children}
      {isLoggedIn ===null && <Redirect to="/Login"/>}
    </div>
  )
}

export default PrivateRoute
