import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AsymmetricEncryption extends React.Component {
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

    componentDidMount() {
        axios.get("http://localhost:3001/textFileGet")
          .then(res => {
            this.setState({ varString: res.data })
          })
          .catch(err => { console.error(err) })
      }

    async handleSubmit(event) {
        event.preventDefault()

        const { varString } = this.state;

        const sendString = {
            varString,
        };

        //sendString has to be an object
        await axios.post("http://localhost:3001/asymmetricEncryptionPost", sendString)
            .then(res => { console.log('String is sent') })
            .catch(err => { console.error(err) })

        //get response
        await axios.get("http://localhost:3001/asymmetricEncryptionGet")
            .then(res => {
                this.setState({ varEncrypted: res.data })
            })
            .catch(err => { console.error(err) })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Asimetrično kriptiranje</h2>
                    <br></br>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="ControlTextarea1">
                            <Form.Label>Upiši željeni tekst za kriptiranje</Form.Label>
                            <Form.Control disabled type="text" value={this.state.varString} onChange={this.handleChange} as="textarea" rows={3} />
                            <Form.Text className="text-muted">
                                Upisani kriptirani tekst spremit će se u datoteku <b>"asymmetric_encryption_file.txt"</b>
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

                    <h3>{this.state.varEncrypted === '' ? '' : 'Tekst je uspješno kriptiran!'}</h3>
                    <br></br>
                    <Form.Group controlId="ControlTextarea2">
                        <Form.Label>Kriptirana datoteka <b>asymmetric_encryption_file.txt</b></Form.Label>
                        <Form.Control disabled type="text" value={this.state.varEncrypted} onChange={this.handleChange} as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                            Automatski su se generiralni javni i privatni ključevi unutar datoteka <b>"javni_ključ.txt"</b> i <b>"prvatni_ključ.txt"</b>
                        </Form.Text>
                    </Form.Group>
                    <Link to="/asymmetricDecryption">
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

export default AsymmetricEncryption;
