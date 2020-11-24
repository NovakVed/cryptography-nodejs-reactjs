import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class SymmetricDecryption extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <h2>Simetrično dekriptiranje</h2>
          <br></br>
          <Form>
            <Form.Group controlId="exampleForm.File1">
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Regular file input</Form.File.Label>
                <Form.File.Input />
              </Form.File>
              <Form.Text className="text-muted">
                Odabrani "tajni_ključ.txt" će se dekriptirati u sljedeći tekst
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Dekriptiraj
              </Button>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <h3>Dekriptirani tekst</h3>
            <br></br>
            <p>Neki tekst koji se upravo dekriptirao bla bla bla</p>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default SymmetricDecryption;
