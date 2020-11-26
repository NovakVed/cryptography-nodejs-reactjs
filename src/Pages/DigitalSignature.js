import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class DigitalSignature extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Digitalni potpis</h2>
                    <br></br>
                    <Form>
                        <Form.Group controlId="exampleForm.File1">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Učitaj tekst</Form.File.Label>
                                <Form.File.Input />
                                <Form.Text className="text-muted">
                                    Odaberi kriptirani tekst za potpis
                                </Form.Text>
                            </Form.File>
                        </Form.Group>

                        <Button variant="primary" type="button">
                            Učitaj tekst
                        </Button>

                        <br></br>
                        <br></br>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Učitana datoteka</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>

                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>

                        <Button variant="primary" type="button">
                            Digitalni potpis
                        </Button>

                        <br></br>
                        <br></br>

                        <h3>Digitalni potpis</h3>
                        <br></br>
                        <p>Neki tekst koji digitalnog potpisa bla bla bla</p>

                        <br></br>
                        <br></br>

                        <Button variant="primary" className="col text-center" type="button">
                            Provjeri digitalni potpis
                        </Button>
                        <br></br>
                        <br></br>
                        <h3>Digitalni potpis je ispravan</h3>
                        <h3>Digitalni potpis je neispravan</h3>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default DigitalSignature;
