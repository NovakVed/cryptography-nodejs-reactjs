import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class MessageSummary extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <h2>Sažetak poruke</h2>
                    <br></br>
                    <Form>
                        <Form.Group controlId="exampleForm.File1">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Učitaj tekst</Form.File.Label>
                                <Form.File.Input />
                                <Form.Text className="text-muted">
                                    Odaberi kriptiranu tekstualnu datoteku
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
                        <Button variant="primary" className="col text-center" type="button">
                            Izračunaj sažetak
                        </Button>
                        <br></br>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>

                        <h3>Sažetak poruke</h3>
                        <br></br>
                        <p>Neki tekst koji se upravo dekriptirao bla bla bla</p>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default MessageSummary;
