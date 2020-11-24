import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import AppBar from './Components/inc/AppBar'
import SymmetricEncryption from './Pages/SymmetricEncryption'
import SymmetricDecryption from './Pages/SymmetricDecryption'
import AsymmetricEncryption from './Pages/AsymmetricEncryption'
import AsymmetricDecryption from './Pages/AsymmetricDecryption'
import Home from './Pages/Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <AppBar />
          <br></br>
          <div>
            <Route path="/symmetricEncryption" component={SymmetricEncryption} />
            <Route path="/symmetricDecryption" component={SymmetricDecryption} />
            <Route path="/asymmetricEncryption" component={AsymmetricEncryption} />
            <Route path="/asymmetricDecryption" component={AsymmetricDecryption} />
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Home} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
