import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
