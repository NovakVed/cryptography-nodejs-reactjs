import React from 'react';
import { Container } from 'react-bootstrap';

import EncryptComponents from '../Components/CenteredGrid'

class Home extends React.Component {
  render() {
    return (
      <Container>
        <EncryptComponents />
      </Container>
    );
  }
}

export default Home;