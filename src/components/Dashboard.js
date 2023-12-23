import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'

export default function Dashboard() {
  const history=useHistory();
  const location=useLocation();
  const {id}=useParams();
  const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem("loggedIn"))
  const query=new URLSearchParams(useLocation().search);
  console.log(query.get("location"))
  function Blog(){
    let match=useRouteMatch("/dashboard/blog");
    if(match){
    return <h1>blog</h1>
    }
    else{
        return null
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Blog/>
      <button onClick={()=>history.push("/about")}>Navigate to about</button>
      {isLoggedIn==null && <Redirect to="/Login"/>}
    </div>
  )
}
