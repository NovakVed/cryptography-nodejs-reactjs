import React from 'react';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Navbar from './Components/inc/Navbar'
import EncryptComponents from './Components/CenteredGrid'
import About from './Pages/About'
import Home from './Pages/Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <EncryptComponents />
          <Container>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>

            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
