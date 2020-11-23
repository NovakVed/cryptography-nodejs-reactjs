import React from 'react';
import { Form, Button } from 'react-bootstrap';

class SymmetricEncryption extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Upiši nešto</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SymmetricEncryption;
