import React from 'react';
import './App.css';
import Table from './components/Table';
import HeaderComponent from "./components/HeaderComponent"
import MainHighlight from "./components/MainHighlight.js"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function App() {
  return (
    <div id="App">
      <HeaderComponent />

      <div >

        <div className="container">
          <Router>
            <Route exact path='/MainHighlight/:string' component={MainHighlight}></Route>
            <Route exact path="/" component={Table}></Route>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
