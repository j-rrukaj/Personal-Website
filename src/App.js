import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer"
import Sidebar from "./pages/Resume/Sidebar"
import {SidebarData} from "./pages/Resume/SidebarData"



function App() {
  return (
  
    <Router>
    
    <Navbar />
   
    <Switch>
  <Route path="/" component={Home} exact />
  <Route path="/resume" component={Resume} />
  <Route path="/projects" component={Projects} />
  <Route path="/contact" component={Contact} />
  </Switch>
  

  <Footer />
  

  </Router>
  


  );
}

export default App;
