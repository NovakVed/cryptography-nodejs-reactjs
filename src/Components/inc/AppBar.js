import React from 'react';
import { Navbar } from 'react-bootstrap';

class AppBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>
            <pre>OS2 - Digitalno potpisivanje</pre>
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default AppBar;