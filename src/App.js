import React from 'react';
import './App.css';
import Login from './components/Login';
import Display from './components/Display';
import Home from './components/Home';
import Update from './components/Update';

import { Switch, Route } from 'react-router-dom';
import SignUp from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLogin(){
        // Set the loggedIn state to true after successful login

    setLoggedIn(true);
  }
  function handleLogout(){
    // Set the loggedIn state to false after successful logout
    setLoggedIn(false);
  }
  
  return (
<Router>
    <div style={{ 
      backgroundImage: `url("https://raw.githubusercontent.com/Zackazt/MemeCreator/master/src/bg.jpg")` 
    }} className="App">
      <h1 className='header'>Meme Generator</h1>
     
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={SignUp} />
      <Route path="/login" component={Login}  />
      <Route path="/update" component={Update}  />
        <Route path="/memes" component={Display} onLogin={handleLogin} />
      
        
      </Switch>
   
    
   
    </div>
    </Router>
  );
}

export default App
