import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [alert,setAlert]=useState(null);

  const showalert =(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#0d104e';
      showalert("Dark mode has been enabled","success");
      // To change title of the react app dynamically
      document.title="Textutills-Dark Mode";
      // Used to get attention of users
      /* setInterval(()=>{
        document.title="Textutills is not safe";
      },2000);
      setInterval(()=>{
        document.title="install Textutills now";
      },1500); */

    }
      else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
      // To change title of the react app dynamically
      document.title="Textutills-light Mode";
    }
  }
  const [mode,setmode]=useState("light");
  return (
    <>
       <Router>
    <Navbar title="Textutilsby-sky" about="About text" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showalert={showalert} heading="Enter the Text to analyze " mode={mode} />
          </Route>
        </Switch>
    </div> 
    {/* <div className="container my-3"><About /></div> */}
    </Router>
    </>
  );
}

export default App;
