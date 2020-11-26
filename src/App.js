import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import AppBar from './Components/inc/AppBar'
import SymmetricEncryption from './Pages/SymmetricEncryption'
import SymmetricDecryption from './Pages/SymmetricDecryption'
import AsymmetricEncryption from './Pages/AsymmetricEncryption'
import AsymmetricDecryption from './Pages/AsymmetricDecryption'
import MessageSummary from './Pages/MessageSummary'
import DigitalSignature from './Pages/DigitalSignature'
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
            <Route path="/messageSummary" component={MessageSummary} />
            <Route path="/digitalSignature" component={DigitalSignature} />
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Home} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
