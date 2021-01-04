import React from "react";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Gallery from "./components/pages/Gallery";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Book from "./components/pages/Book";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/gallery' exact component={Gallery}/>
        <Route path='/about' exact component={About}/>
        <Route path='/contact' exact component={Contact}/>
        <Route path='/book' exact component={Book}/>
        
      </Switch>
    </Router>
   </>
  );
}

export default App;
