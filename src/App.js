import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Navbar from './Components/inc/Navbar'
import SymmetricEncryption from './Pages/SymmetricEncryption'
import AsymmetricEncryption from './Pages/AsymmetricEncryption'
import Home from './Pages/Home'

class App extends React.Component {
  

  render() {
    return (
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Container>
            <Route path="/symmetricEncryption" component={SymmetricEncryption} />
            <Route path="/asymmetricEncryption" component={AsymmetricEncryption} />
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Home} />
          </Container>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
