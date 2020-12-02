import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import Main from './Main'
import Home from './Home'
import Contact from './Contact'
import About from './About'

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
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




