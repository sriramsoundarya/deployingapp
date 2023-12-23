import logo from './logo.svg';
import './App.css';
import React ,{lazy,Suspense} from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Projects from './components/Projects';
import Project from './components/Project';
import PrivateRoute from './components/PrivateRoute';
import Topics from './components/Topics';
const About=lazy(()=>import('./components/About'));

function App() {
  const location=window.location.pathname;
  console.log("location"+location);
  return (
    <div  className='App'>
      <Header/>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/Contact">
          <Contact/>
        </Route>
        <PrivateRoute path="/Dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/Projects/:id">
          <Project/>
        </Route>
        <PrivateRoute path="/Projects">
          <Projects/>
        </PrivateRoute>
        <PrivateRoute path="/topics">
          <Topics/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/logout">
          <Redirect to="/login"/>
        </Route>
        <Route path="*">
          <h1>404 error</h1>
        </Route>
      </Switch>
      </Suspense>
    </div>
  );
}

export default App;
