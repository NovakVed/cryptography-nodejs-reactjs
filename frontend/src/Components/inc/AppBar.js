import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to='/home'>Projekt</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Simetrično" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='symmetricEncryption'>Kriptiranje</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='symmetricDecryption'>Dekriptiranje</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Asimetrično" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='asymmetricEncryption'>Kriptiranje</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='asymmetricDecryption'>Dekriptiranje</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='messageSummary'>Sažetak poruke</Nav.Link>
              <Nav.Link as={Link} to='digitalSignature'>Digitalni potpis</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default AppBar;