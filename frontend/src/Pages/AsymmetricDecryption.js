import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

class AsymmetricDecryption extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            varString: '',
            varEncrypted: '',
            varDecrypted: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleChange(event) {
        this.setState({ varEncrypted: event.target.value })
    }

    componentDidMount() {
        axios.get("http://localhost:3001/asymmetricEncryptionGet")
            .then(res => {
                this.setState({ varEncrypted: res.data })
            })
            .catch(err => { console.error(err) })
    }

    async handleSubmit(event) {
        event.preventDefault()

        //get response
        await axios.get("http://localhost:3001/asymmetricDecryptionGet")
            .then(res => {
                this.setState({ varDecrypted: res.data })
            })
            .catch(err => { console.error(err) })
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Simetrično dekriptiranje</h2>
                    <br></br>
                    <Form onSubmit={this.handleSubmit}>
                        <p>Automatski je izvađena datoteka <b>privatni_kljuc.txt</b> koja sadrži privatni ključ potreban za dekriptiranje</p>

                        <br></br>
                        <br></br>

                        <Form.Group>
                            <Form.Label>Željeni tekst za kriptiranje</Form.Label>
                            <Form.Control disabled type="text" value={this.state.varEncrypted} onChange={this.handleChange} as="textarea" rows={3} />
                            <Form.Text className="text-muted">
                                Upisani kriptirani tekst automatski je izvađen iz datoteke <b>"asymmetric_encryption_file.txt"</b>
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Dekriptiraj
                        </Button>
                    </Form>

                    <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <h3>{this.state.varDecrypted === '' ? '' : 'Tekst je uspješno dekriptiran!'}</h3>
                    <br></br>
                    <p>{this.state.varDecrypted}</p>
                </Container>
            </React.Fragment>
        );
    }
}

export default AsymmetricDecryption;
