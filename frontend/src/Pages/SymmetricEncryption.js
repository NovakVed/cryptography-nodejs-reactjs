import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SymmetricEncryption extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      varString: '',
      varEncrypted: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange(event) {
    this.setState({ varString: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const { varString } = this.state;

    const sendString = {
      varString,
    };

    //sendString has to be an object
    await axios.post("http://localhost:3001/symmetricEncryptionPost", sendString)
      .then(res => { console.log('String is sent') })
      .catch(err => { console.error(err) })

    //get response
    await axios.get("http://localhost:3001/symmetricEncryptionGet")
      .then(res => {
        this.setState({ varEncrypted: res.data })
      })
      .catch(err => { console.error(err) })
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <h2>Simetrično kriptiranje</h2>
          <br></br>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Upiši željeni tekst za kriptiranje</Form.Label>
              <Form.Control type="text" value={this.state.varString} onChange={this.handleChange} as="textarea" rows={3} />
              <Form.Text className="text-muted">
                Upisani kriptirani tekst spremit će se u datoteku <b>"text.txt"</b>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Kriptiraj
            </Button>
          </Form>

          <br></br>
          <br></br>

          <hr></hr>

          <br></br>
          <br></br>

          <h3>Tekst je uspješno kriptiran!</h3>
          <br></br>
          <Form.Group controlId="ControlTextArea2">
            <Form.Label>Kriptirana datoteka <b>text.txt</b></Form.Label>
            <Form.Control type="text" value={this.state.varEncrypted} onChange={this.handleChange} as="textarea" rows={3} />
            <Form.Text className="text-muted">
              Automatski se generirao simetrični tajni ključ u datoteci <b>"tajni_ključ.txt"</b>
            </Form.Text>
          </Form.Group>
          <Link to="/symmetricDecryption">
            <Button variant="primary" className="float-right" type="button">
              Sljedeća stranica  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Button>
          </Link>
        </Container>
      </React.Fragment>
    );
  }
}

export default SymmetricEncryption;
