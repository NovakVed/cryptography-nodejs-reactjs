import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class SymmetricEncryption extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2>Simetrično kriptiranje</h2>
          <br></br>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Upiši nešto</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Text className="text-muted">
                  Navedeni tekst će se enkriptirati u tajnu datoteku "tajni_ključ.txt"
              </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Preuzmi
              </Button>
              <br></br>
              <br></br>
              <hr></hr>
            </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default SymmetricEncryption;
