import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';



function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1700);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }
  }
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Switch>
          <Route exact path="/" element= {<Textform showAlert={showAlert}heading="Enter the text to analyze" mode={mode}/>}/>
          <Route exact path="/about"/>
        </Switch>
        <About/>
      </div>
      </Router>
    </>
  );
}

export default App;
