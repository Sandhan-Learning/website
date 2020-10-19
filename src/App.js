import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import ContactUs from './Components/ContactUs';
import HomePage from './Components/HomePage';


function App() {
  return (
    <div className="App">
      <Router>
       <Route exact path="/" component={HomePage} />
       <Route exact path="/contact" component={ContactUs} />
      </Router>
    </div>
  );
}

export default App;
