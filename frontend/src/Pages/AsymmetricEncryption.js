import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AsymmetricEncryption extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Asimetrično kriptiranje</h2>
                    <br></br>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Upiši željeni tekst za kriptiranje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Kriptirana datoteka <b>text.txt</b></Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        <Form.Text className="text-muted">
                            Automatski su se generiralni javni i privatni ključevi unutar datoteka <b>"javni_ključ.txt"</b> i <b>"prvatni_ključ.txt"</b>
                        </Form.Text>
                    </Form.Group>
                    <Link to="/asymmetricDecryption">
                        <Button variant="primary" className="float-right" type="button">
                            Sljedeća stranica  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </Link>
                </Container>
            </React.Fragment>
        );
    }
}

export default AsymmetricEncryption;
