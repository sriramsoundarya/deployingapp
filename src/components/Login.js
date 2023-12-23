import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'

export default function Login() {
  const [name,setName]=useState("");
  const [pass,setPass]=useState("");
  const [loggedIn,setLoggedIn]=useState(localStorage.getItem("loggedIn"));
  const login=()=>{
    if(name==="admin" && pass==="admin"){
        localStorage.setItem("loggedIn",1)
        setLoggedIn(1);
    }
    else{
        alert("wrong credentials");
    }
  }
  return (
    <div>
    <h1 className='mt-5'>Login Area</h1>
    <form onSubmit={login}>
        <input type='text' className='form-control-lg m-4 radius' placeholder='User name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <br/>
        <input type='password' className='form-control-lg m-4 radius' placeholder='password' value={pass} onChange={(e)=>setPass(e.target.value)}/>
        <br/>
        <button type='submit' className='btn btn-primary'>Login</button>
    </form>
   {loggedIn && <Redirect to="/dashboard"/>}
    </div>
  )
}
