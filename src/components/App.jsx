import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer';

import Home from './Home'
import Contact from './Contact'
import About from './About'
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/about" exact component={() => <About />} />
        <Route path="/contact" exact component={() => <Contact />} />
      </Switch>
      <Footer />
    </Router>
  </div>
);
}
export default App;




